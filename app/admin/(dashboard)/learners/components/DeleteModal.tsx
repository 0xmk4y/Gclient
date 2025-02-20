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

export default function DeleteModal({ id }: { id: number }) {
    const router = useRouter();

    async function DeleteLeaner(id: number) {
        try {
            const response = await fetch(`/api/learners`, {
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
      <AlertDialogTrigger asChild className="h-8 w-8 p-2 bg-[#F7E9EA] hover:bg-red-100">
        <Trash2 color="#A61D24" className="p-1"/>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            learner and associated invoices.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => DeleteLeaner(id)}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
