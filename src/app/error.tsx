"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  console.log("1219: Error:", error.message, "\n", error.cause, "\n", error);

  return (
    <section className="mx-auto flex h-screen max-w-sm flex-col items-center justify-center gap-6 md:max-w-2xl md:gap-10">
      <h1 className="text-center text-2xl font-semibold text-primary">
        There was a Problem
      </h1>

      <h1 className="text-center text-sm font-medium text-slate-300 md:text-xl">
        {error.message}
      </h1>

      <h2 className="text-center">
        Please Try Again later or contact Support is error persists
      </h2>

      <div className="flex items-center gap-6 md:gap-10">
        <Button
          variant={"outline"}
          className="border-primary bg-primary/20 text-primary hover:bg-primary/10 hover:text-primary"
          onClick={reset}
        >
          Try again
        </Button>

        <Link href={"/"}>Go to Home</Link>
      </div>
    </section>
  );
};

export default error;
