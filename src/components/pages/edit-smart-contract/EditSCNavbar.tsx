// screenn no 13 original navbar in which 14,15 screens navbar will merged
"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const EditSCNavbar = ({
  page,
  createQueryString,
  handleNextButton,
  handleFinishButton,
  handleBackButton,
}: {
  page: string;
  createQueryString: (name: string, value: string) => string;
  handleNextButton: () => void;
  handleFinishButton: () => void;
  handleBackButton: () => void;
}) => {
  const router = useRouter();

  return (
    <div className="w-[95%]">
      <div className="relative hidden h-12 items-center gap-5 rounded-3xl bg-white shadow-[0px_0px_4px_3px_#4f4f4f10] md:flex">
        <Button
          onClick={handleBackButton}
          className="absolute -left-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#f7f6f6] shadow-[0px_0px_3px_1px_#4f4f4f20] transition-all duration-150 hover:bg-[#f7f6f6] hover:shadow-none"
        >
          <ChevronLeft size={18} className="text-foreground" />
        </Button>

        <h2 className="absolute left-12 text-base font-bold">
          Edit Smart Contract name
        </h2>

        <div className="absolute right-2 flex items-center gap-4">
          {page !== "3" && (
            <Button
              className="flex h-9 w-9 rounded-full border-gray-100 bg-[#f7f6f6] font-semibold text-black hover:bg-transparent"
              onClick={handleNextButton}
            >
              <ChevronRight size={18} />
            </Button>
          )}

          <Button
            className="flex gap-2 rounded-3xl border-gray-100 bg-[#f7f6f6] px-8 font-semibold text-black hover:bg-transparent"
            onClick={handleFinishButton}
            disabled={page !== "3"}
          >
            Finish
          </Button>
        </div>
      </div>
    </div>
  );
};
export default EditSCNavbar;
