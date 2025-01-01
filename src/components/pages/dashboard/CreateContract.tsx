import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const CreateContract = () => {
  return (
    <Link href={`/edit-smart-contract?page=1`}>
      <Card className="col-span-1 flex h-32 items-end bg-gradient-to-r from-[rgb(146,0,79)] to-[rgb(190,26,39)] text-white">
        <CardContent className="p-4 text-xs font-semibold leading-4">
          <Plus size={18} className="mb-1" />
          Create <br /> Smart Contract
        </CardContent>
      </Card>
    </Link>
  );
};

export default CreateContract;
