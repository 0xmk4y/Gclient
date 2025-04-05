"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Invoices = {
  learner: string;
  email: string;
  amount: number;
  date: string;
  status: "Pending" | "Paid" ;
};

export const columns: ColumnDef<Invoices>[] = [
  {
    accessorKey: "leaners",
    header: "Learners",
  },
  {
    accessorKey: "email",
    header: "Email",
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
    accessorKey: "status",
    header: "Status",
  },
];
