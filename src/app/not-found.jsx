"use client";

import { FileSearch } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  }

  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center flex-col gap-2">
      <div className="flex justify-center items-center gap-2">
        <h3 className="text-color-accent text-2xl font-bold">404 | </h3>
        <FileSearch size={32} className="text-color-accent" />
        <h3 className="text-color-accent text-2xl font-bold">NOT FOUND</h3>
      </div>
      <button
        onClick={handleBack}
        className="underline text-color-primary hover:text-color-accent transition-all">
        Kembali
      </button>
    </div>
  );
};

export default Page;
