"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Eye, Pencil, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { Learner } from "@/types/types";
import DeleteModal from "./DeleteModal";

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
                    <div className="">{learner.firstName + " " + learner.lastName}</div>
                  </div>
                </th>
                <td className="md:px-6 md:py-4 px-2">{learner.program}</td>
                {/* <td className="md:px-6 md:py-4 px-2">${learner.}</td> */}
                <td className="md:px-6 md:py-4 px-2">{learner.createdAt.toDateString()}</td>
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
                  <DeleteModal id={learner.id} />
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
