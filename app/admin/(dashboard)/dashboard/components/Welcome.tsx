"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function Welcome() {
  const admin = localStorage.getItem("admin");

  const [adminData, setAdminData] = useState(admin ? JSON.parse(admin) : null);

  React.useEffect(() => {
    setAdminData(admin ? JSON.parse(admin) : null);
  }, [admin]);

  return (
    <div className="mb-6 px-4 md:px-8">
      <h2 className="font-bold text-2xl">Dashboard</h2>
      <p className="text-sm">Welcome back, {adminData.firstName}</p>
    </div>
  );
}
