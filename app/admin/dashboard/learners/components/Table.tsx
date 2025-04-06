"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { createClient } from "@/app/utils/supabase/client";
import { Eye, Pencil, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { Learner } from "@/types/types";

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


export default function Table({ learners }: { learners: Learner[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const learnersPerPage = 10;
  const totalPages = Math.ceil(learners.length / learnersPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const indexOfLastLearner = currentPage * learnersPerPage;
  const indexOfFirstLearner = indexOfLastLearner - learnersPerPage;
  const currentLearners = learners.slice(indexOfFirstLearner, indexOfLastLearner);
  const router = useRouter();

    const deleteLearner = async (id: string) => {
      const supabase = createClient();
      const { error } = await supabase
        .from("learners")
        .delete()
        .eq("id", id); // Deleting the invoice by id
  
      if (error) {
        console.error("Error deleting learner:", error);
      } else {
        router.push("/admin/dashboard/learners")
        // Successfully deleted, remove it from the state
        // setInvoices((prevInvoices) => prevInvoices.filter((invoice) => invoice.id !== id));
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
                Course
              </th>
              {/* <th scope="col" className="px-3 py-3 md:px-6 md:py-3">
                Amount
              </th> */}
              <th scope="col" className="px-3 py-3 md:px-6 md:py-3">
                Date
              </th>
              <th scope="col" className="px-3 py-3 md:px-6 md:py-3">
                Gender
              </th>
              <th scope="col" className="px-3 py-3 md:px-6 md:py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {currentLearners.map((learner) => (
              <tr key={learner.id} className="bg-white">
                <th scope="row" className="flex items-center md:px-6 md:py-4 px-2">
                  <Image
                    src={learner.image || "/profile-icon.svg"}
                    alt="avatar"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <div className="ps-3">
                    <div className="">{learner.firstname + " " + learner.lastname}</div>
                  </div>
                </th>
                <td className="md:px-6 md:py-4 px-2">{learner.program}</td>
                {/* <td className="md:px-6 md:py-4 px-2">${learner.}</td> */}
                <td className="md:px-6 md:py-4 px-2">{new Date(learner.createdat).toDateString()}</td>
                <td className="md:px-6 md:py-4 px-2">{learner.gender}</td>
                <td className="text-center flex gap-3 items-center">
                  <Button
                    variant="link"
                    size="sm"
                    className="p-1.5 bg-[#D1E5F8] hover:bg-red-100"
                  >
                    <Eye color="#115EA5" />
                  </Button>
                  <Button
                    variant="link"
                    size="sm"
                    className="p-1.5 bg-[#EDF7E8] hover:bg-red-100"
                  >
                    <Pencil color="#77C053" />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild className="h-8 w-8 p-2 bg-[#F7E9EA] hover:bg-red-100">
                      <Trash2 color="#A61D24" className="p-1" />
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
                        <AlertDialogAction onClick={() => deleteLearner(learner.id.toString())}>Continue</AlertDialogAction>
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
            <Button variant={"outline"} className="shadow-none" onClick={handlePreviousPage} disabled={currentPage === 1}>
              <ChevronLeft color="#115EA5" />
            </Button>
            <p>{currentPage}</p>
          </div>
          <p>of {totalPages} pages</p>
          <Button variant={"outline"} className="shadow-none" onClick={handleNextPage} disabled={currentPage === totalPages}>
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
