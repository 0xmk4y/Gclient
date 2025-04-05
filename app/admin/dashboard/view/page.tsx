"use client";
import React, { useEffect, useState } from "react";
import CardBox from "@/components/CardBox";
import DashboardNav from "@/components/DashboardNav";
import { Banknote, Clock, Scroll, UsersRound } from 'lucide-react';
import { Invoice, Learner } from "@/types/types";
import RevenuesGraph from "./components/RevenuesGraph";
import LatestInvoiceGraph from "./components/LatestInvoiceGraph";
import Welcome from "./components/Welcome";


export default async function Page() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [learners, setLearners] = useState<Learner[]>([]);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const invoiceRes = await fetch('/api/invoices');
        const learnerRes = await fetch('/api/learners');
        const invoices = await invoiceRes.json();
        const learners = await learnerRes.json();
        setInvoices(invoices);
        setLearners(learners);

        const totalAmount: number = invoices.reduce((sum: number, invoice: Invoice) => sum + invoice.amount, 0);
        const paidInvoices: Invoice[] = invoices.filter((invoice: Invoice) => invoice.status === 'paid');
        const totalPaidAmount = paidInvoices.reduce((sum, invoice) => sum + invoice.amount, 0);
        const pendInvoices: Invoice[] = invoices.filter((invoice: Invoice) => invoice.status === 'pending');
        const totalPendAmount = pendInvoices.reduce((sum, invoice) => sum + invoice.amount, 0);
        const totalLearners = learners.length;

        setData([
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
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

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
