"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Leaner = {
  learner: string;
  course: string;
  amount: number;
  date: string;
  gender: "Male" | "Female" ;
};

export const columns: ColumnDef<Leaner>[] = [
  {
    accessorKey: "leaners",
    header: "Learners",
  },
  {
    accessorKey: "course",
    header: "Course",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
];
