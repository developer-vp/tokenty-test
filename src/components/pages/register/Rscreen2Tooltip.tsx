import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleAlert } from "lucide-react";

const Rscreen2Tooltip = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none ring-0">
        <CircleAlert
          size={20}
          className="rotate-180 fill-foreground/70 text-white"
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="mr-4 w-72" sideOffset={10}>
        <DropdownMenuItem className="bg-white p-3 text-black focus:bg-white md:p-4">
          You need to be a manager to create Smart Contracts as they are a legal
          binding agreement between your company and your value creator. You
          will need to authorize payments through your company{`'`}s wallet.
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Rscreen2Tooltip;
