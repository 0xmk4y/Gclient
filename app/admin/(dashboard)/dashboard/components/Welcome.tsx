"use client";
import React, { useState, useEffect } from "react";

export default function Welcome() {
  interface AdminData {
    firstName: string;
  }

  const [adminData, setAdminData] = useState<AdminData | null>(null);

  useEffect(() => {
    const admin = typeof window !== "undefined" ? localStorage.getItem("admin") : null;
    setAdminData(admin ? JSON.parse(admin) : null);
  }, []);

  return (
    <div className="mb-6 px-4 md:px-8">
      <h2 className="font-bold text-2xl">Dashboard</h2>
      <p className="text-sm">Welcome back, {adminData ? adminData.firstName : "Guest"}</p>
    </div>
  );
}
