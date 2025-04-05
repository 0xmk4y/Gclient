"use client";
import React from "react";
import { useEffect, useState } from "react"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Invoice } from "@/types/types";
import DeleteModal from "./DeleteModal";
import { createClient } from "@/app/utils/supabase/client";
import {
  Check,
  Clock,
  Pencil,
  ChevronLeft,
  ChevronRight,
  Trash2
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default async function Table() {
  const [invoices, setInvoices] = useState<any[]>([]);

  useEffect(() => {
    async function fetchInvoices() {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("invoices")
        .select("*, learner_id:learners(*)");
      console.log(data)
      if (data) setInvoices(data);
    }
    fetchInvoices();
  }, []);

  const deleteInvoice = async (id: string) => {
    const supabase = createClient();
    const { error } = await supabase
      .from("invoices")
      .delete()
      .eq("id", id); // Deleting the invoice by id

    if (error) {
      console.error("Error deleting invoice:", error);
    } else {
      // Successfully deleted, remove it from the state
      setInvoices((prevInvoices) => prevInvoices.filter((invoice) => invoice.id !== id));
    }
  };

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
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="bg-white">
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
                    <div className="">{invoice.learner_id.firstname + " " + invoice.learner_id.lastname}</div>
                  </div>
                </th>
                <td className="md:px-6 md:py-4 px-2">{invoice.learner_id.email}</td>
                <td className="md:px-6 md:py-4 px-2">
                  ${invoice.amount.toLocaleString()}
                </td>
                <td className="md:px-6 md:py-4 px-2">{new Date(invoice.createdat).toDateString()}</td>
                <td
                  className={`max-w-[100px] text-center font-bold m-3 py-2`}
                >
                  <div className={`flex items-center justify-center gap-2 p-3 ${invoice.status === "paid" ? "bg-[#77C053] text-white" : "bg-[#dbdbdb] text-gray-600"
                    } `}>
                    <p>{invoice.status}</p>
                    {invoice.status === "paid" ? <Check size={18} /> : <Clock size={18} />}
                  </div>
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
                  <AlertDialog>
                    <AlertDialogTrigger asChild className="p-1 bg-[#F7E9EA] hover:bg-red-100">
                      <Trash2 color="#A61D24" />
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-white">
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete this
                          invoice and remove all of its data from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => deleteInvoice(invoice.id)}>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
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
