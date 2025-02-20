"use client"
import React from "react";
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

    async function DeleteInvoice(id: string) {
        try {
            const response = await fetch(`/api/invoices`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                throw new Error('Failed to delete the invoice');
            }
            router.refresh();
            // Handle successful deletion (e.g., show a success message, redirect, etc.)
            console.log('Invoice deleted successfully');
        } catch (error) {
            // Handle error (e.g., show an error message)
            console.error('Error deleting invoice:', error);
        }
    }
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
          <AlertDialogAction onClick={() => DeleteInvoice(id)}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
