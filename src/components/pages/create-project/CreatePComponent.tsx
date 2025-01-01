import React from "react";
import { ChevronUp, Plus } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import SingleProject from "./SingleProject";

const CreatePComponent = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-col items-start gap-7 md:flex-row md:items-end">
        <Link href={`/create-project/edit-team`}>
          <Card className="flex h-32 w-40 items-end bg-gradient-to-r from-[rgb(146,0,79)] to-[rgb(190,26,39)] text-white shadow-md transition-all duration-200 hover:shadow-lg">
            <CardContent className="p-4 text-sm font-semibold leading-4">
              <Plus size={18} className="mb-1" />
              Create Project
            </CardContent>
          </Card>
        </Link>

        <Link href={"/"}>
          <SingleProject />
        </Link>
      </div>

      <div className="mt-12 flex items-center gap-2">
        <ChevronUp size={16} />

        <h2 className="text-sm font-semibold">
          You have no project created. Create one in 2 simple steps!
        </h2>
      </div>
    </div>
  );
};
export default CreatePComponent;
