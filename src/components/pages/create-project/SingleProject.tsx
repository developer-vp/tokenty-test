import { ScrollText, UserRound } from "lucide-react";
import React from "react";

const SingleProject = () => {
  return (
    <div className="flex h-20 w-64 flex-col justify-between rounded-md px-3.5 py-2.5 shadow-[0px_0px_4px_3px_#4f4f4f10] transition-all duration-200 hover:shadow-[0px_0px_3px_5px_#4f4f4f10]">
      <div className="text-lg font-[800]">Doky.ai</div>

      <div className="flex items-end gap-5 font-bold">
        <div className="flex items-center gap-1">
          <UserRound size={17} strokeWidth={2.6} />
          <div className="">3</div>
        </div>

        <div className="flex items-center gap-1">
          <ScrollText size={17} strokeWidth={2.6} />
          <div className="">3</div>
        </div>

        <div className="text-base">20%</div>
      </div>
    </div>
  );
};

export default SingleProject;
