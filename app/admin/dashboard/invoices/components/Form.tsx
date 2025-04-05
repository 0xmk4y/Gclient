'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { Calendar, UsersRound, BadgeCent, Pencil, ChevronRight } from "lucide-react";
import { Learner } from '@/types/types';
import { createClient } from '@/app/utils/supabase/client';

const formSchema = z.object({
  learner_id: z.string().uuid({ message: "Invalid learner ID" }),
  amount: z.coerce.number().positive("Amount must be positive"),
  date: z.string().min(1, "Date is required"),
  status: z.enum(["paid", "pending"]),
  details: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function InvoiceForm() {
  const [learners, setLearners] = useState<Learner[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { register, handleSubmit, setError, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    async function fetchLearners() {
      const supabase = createClient();
      const { data } = await supabase.from("learners").select("*");
      if (data) setLearners(data);
    }
    fetchLearners();
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const supabase = createClient();
      const { error } = await supabase.from("invoices").insert([data]);
      if (!error) {
      router.push('/admin/dashboard/invoices');
      }
      if (error) {
      setError("root", { message: "Failed to create invoice. Please try again." });
      }
    } catch (error) {
      console.error("Error creating invoice:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full bg-gray-100 p-4 mt-10">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
        {/* Learner Selection */}
        <div className="flex items-center border-b-2 border-b-primary bg-white px-2">
          <UsersRound size={20} />
          <select {...register("learner_id")} className="bg-transparent p-2 w-full" required>
            <option value="">Select Learner</option>
            {learners.map((learner) => (
              <option key={learner.id} value={learner.id}>
                {learner.firstname} {learner.lastname}
              </option>
            ))}
          </select>
        </div>
        {errors.learner_id && <p className="text-red-500 text-sm">{errors.learner_id.message}</p>}

        {/* Amount */}
        <div className="flex items-center border-b-2 border-b-primary bg-white px-2">
          <BadgeCent size={20} />
          <input
            type="number"
            step="0.01"
            placeholder="Amount in USD"
            {...register("amount")}
            className="bg-transparent border-none focus:outline-none p-2 w-full"
          />
        </div>
        {errors.amount && <p className="text-red-500 text-sm">{errors.amount.message}</p>}

        {/* Date */}
        <div className="flex items-center border-b-2 border-b-primary bg-white px-2">
          <Calendar size={20} />
          <input
            type="date"
            {...register("date")}
            className="bg-transparent border-none focus:outline-none p-2 w-full"
          />
        </div>
        {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}

        {/* Status */}
        <div className="flex items-center border-b-2 border-b-primary bg-white px-2">
          <UsersRound size={20} />
          <select {...register("status")} className="bg-transparent p-2 w-full">
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        {errors.status && <p className="text-red-500 text-sm">{errors.status.message}</p>}

        {/* Details */}
        <div className="flex items-center border-b-2 border-b-primary bg-white px-2">
          <Pencil size={20} />
          <textarea
            {...register("details")}
            className="bg-transparent border-none focus:outline-none p-2 w-full"
            placeholder="Payment details"
          />
        </div>

        {/* Submit Buttons */}
        <div className="flex justify-end gap-4">
          <Button variant="outline" className="bg-gray-100">Cancel <ChevronRight /></Button>
          <Button type="submit" className="text-white">
            {isLoading ? "Creating..." : "Create Invoice"} <ChevronRight />
          </Button>
        </div>
      </form>
      {errors.root && <p className="text-red-500 text-sm">{errors.root.message}</p>}

    </div>
  );
}
