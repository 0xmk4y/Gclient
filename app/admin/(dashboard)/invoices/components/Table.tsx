import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Check,
  Clock,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Invoice } from "@/types/types";
import { PrismaClient } from "@prisma/client";

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

export default async function Table() {

  const invoices = await getInvoices();

  return (
    <div className="flex flex-col w-full justify-between">
      <div className="w-full overflow-x-auto bg-gray-100 py-4 px-3">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs">
            <tr>
              <th scope="col" className="px-3 py-3 md:px-6 md:py-3">
                Learners
              </th>
              <th scope="col" className="px-3 py-3 md:px-6 md:py-3">
                Email
              </th>
              <th scope="col" className="px-3 py-3 md:px-6 md:py-3">
                Amount
              </th>
              <th scope="col" className="px-3 py-3 md:px-6 md:py-3">
                Date
              </th>
              <th scope="col" className="px-3 py-3 md:px-6 md:py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={index} className="bg-white">
                <th
                  scope="row"
                  className="flex items-center md:px-6 md:py-4 px-2"
                >
                  <Image
                    src="/profile-icon.svg"
                    alt="avatar"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <div className="ps-3">
                    <div className="">{invoice.learner.firstName + " " + invoice.learner.lastName}</div>
                  </div>
                </th>
                <td className="md:px-6 md:py-4 px-2">{invoice.learner.email}</td>
                <td className="md:px-6 md:py-4 px-2">
                  ${invoice.amount.toLocaleString()}
                </td>
                <td className="md:px-6 md:py-4 px-2">{invoice.createdAt.toLocaleDateString()}</td>
                <td
                  className={`max-w-[100px] text-center font-bold flex gap-1 items-center justify-center ${
                    invoice.status === "Paid" ? "bg-[#77C053] text-white" : "bg-[#dbdbdb] text-gray-600"
                  } py-2`}
                >
                  <p>{invoice.status}</p>
                  {invoice.status === "Paid" ? <Check size={18} /> : <Clock size={18} />}
                </td>
                <td className="text-center">
                  <Button
                    variant="link"
                    size="sm"
                    className="p-1.5 bg-[#EDF7E8] hover:bg-red-100"
                  >
                    <Pencil color="#77C053" />
                  </Button>
                </td>
                <td className="text-center">
                  <Button
                    variant="link"
                    size="sm"
                    className="p-1.5 bg-[#F7E9EA] hover:bg-red-100"
                  >
                    <Trash2 color="#A61D24" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex flex-col md:flex-row gap-3 md:justify-between items-center p-4">
        <div className="flex items-center mt-4 gap-2">
          <div className="flex items-center gap-2">
            <Button variant={"outline"} className="shadow-none">
              <ChevronLeft color="#115EA5" />
            </Button>
            <p>2</p>
          </div>
          <p>of 12 pages</p>
          <Button variant={"outline"} className="shadow-none">
            <ChevronRight color="#115EA5" />
          </Button>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p>Results per Page</p>
            <Button variant={"outline"} className="shadow-none">
              {"10"}
              <ChevronRight color="#115EA5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
