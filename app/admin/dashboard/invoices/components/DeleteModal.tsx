"use client"
import React from "react";
import { useEffect } from "react";
import { createClient } from "@/app/utils/supabase/client";
import { Trash2 } from "lucide-react";

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
import { useRouter } from "next/navigation";

export default function DeleteModal({ id }: { id: string }) {
    const router = useRouter();

    const deleteInvoice = async (id: string) => {
      const supabase = createClient();
      const { error } = await supabase
        .from("invoices")
        .delete()
        .eq("id", id); // Deleting the invoice by id
  
      if (error) {
        console.error("Error deleting invoice:", error);
      } else {
        router.push("/admin/dashboard/invoices")
        // Successfully deleted, remove it from the state
        // setInvoices((prevInvoices) => prevInvoices.filter((invoice) => invoice.id !== id));
      }
    };
      

  return (
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
          <AlertDialogAction onClick={() => deleteInvoice(id)}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
