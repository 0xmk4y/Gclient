import CardBox from "@/components/CardBox";
import DashboardNav from "@/components/DashboardNav";
import React from "react";
import { Banknote, Clock, Scroll, UsersRound } from 'lucide-react'
import { Invoice } from "@/types/types";
import { Learner } from "@/types/types";
import { PrismaClient } from "@prisma/client";
import RevenuesGraph from "./components/RevenuesGraph";
import LatestInvoiceGraph from "./components/LatestInvoiceGraph";
import Welcome from "./components/Welcome";


const prisma = new PrismaClient();

async function getInvoices(): Promise<Invoice[]> {
  try{
    const Invoices = await prisma.invoice.findMany({
      include: {
        learner: true,
      },
    });
    console.log(Invoices);
    return Invoices;
  } catch (error) {
    console.error("Error fetching Invoices:", error);
    return [];
  }
}

async function getLearners(): Promise<Learner[]> {
  try{
    const Learners = await prisma.learner.findMany();
    return Learners;
  } catch (error) {
    console.error("Error fetching Learners:", error);
    return [];
  }
}


export default async function Page() {
  
  const invoices = await getInvoices();
  const totalAmount = invoices.reduce((sum, invoice) => sum + invoice.amount, 0);
  console.log("Total Amount:", totalAmount);

  const paidInvoices = invoices.filter(invoice => invoice.status === 'paid');
  const totalPaidAmount = paidInvoices.reduce((sum, invoice) => sum + invoice.amount, 0);

  const pendInvoices = invoices.filter(invoice => invoice.status === 'pending');
  const totalPendAmount = pendInvoices.reduce((sum, invoice) => sum + invoice.amount, 0);

  const Learners = await getLearners();
  const totalLearners = Learners.length;
  
  const data = [
    {
      icon: Banknote,
      title: "Collected",
      total: '$' + totalPaidAmount.toString()
    },
    {
      icon: Clock,
      title: "Pending",
      total: '$' + totalPendAmount.toString()
    },
    {
      icon: Scroll,
      title: "Total invoices",
      total: '$' + totalAmount.toString()
    },
    {
      icon: UsersRound,
      title: "Total learners",
      total: totalLearners.toString()
    },
  ];

  return (
    <div className="w-full">
      <div className="flex justify-end w-full p-3">
        <DashboardNav />
      </div>
      <Welcome />
      <div className="px-4 md:px-8">
        <div className="flex flex-wrap gap-2 justify-center items-center">
          {data.map((item, index) => (
        <CardBox key={index} icon={item.icon} title={item.title} total={item.total.toString()} />
          ))}
        </div>
      </div>
      <div className="mt-10 flex flex-col md:flex-row justify-between w-full px-4 md:px-8 mb-12 min-h-[340px]">
        
        {/* Recent Revenues */}
        <div className="w-full md:w-1/2 p-2">
          <h2 className="font-bold text-xl mb-4">Recent Revenues</h2>
          <RevenuesGraph />
          
        </div>
       
        {/* Latest Invoices */}
        <div className="w-full md:w-1/2 p-2">
          <h2 className="font-bold text-xl mb-4">Latest Invoices</h2>
          <LatestInvoiceGraph />
        </div>
      </div>
    </div>
  );
}
