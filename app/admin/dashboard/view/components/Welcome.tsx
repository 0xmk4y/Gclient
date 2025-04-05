"use client";
import React, { useState, useEffect } from "react";

export default function Welcome() {
  interface AdminData {
    firstName: string;
  }

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="mb-6 px-4 md:px-8">
      <h2 className="font-bold text-2xl">Dashboard</h2>
      <p className="text-sm">Welcome back, {user?.user_metadata.firstName + " " + user?.user_metadata.lastName}</p>
    </div>
  );
}
