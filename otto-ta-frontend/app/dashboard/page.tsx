"use client";
import { FC, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const DashboardPage: FC = () => {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-0 bg-gradient-to-br from-purple-700 to-purple-300/90"></main>
  );
};

export default DashboardPage;
