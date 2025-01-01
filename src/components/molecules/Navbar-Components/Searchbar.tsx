import { Input } from "@/components/ui/input";
import { Bell, Search } from "lucide-react";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const Searchbar = () => {
  return (
    <>
      <div className="hidden min-w-[400px] items-center gap-1 rounded-md bg-secondary px-4 py-1 placeholder:text-sm md:flex">
        <Search size={16} className="mb-0.5 text-muted-foreground" />
        <Input
          placeholder="Search Smart Contracts"
          className="flex-1 border-0 text-muted-foreground shadow-none outline-none !ring-0"
        />
      </div>

      <Popover>
        <PopoverTrigger className="mb-0.5 outline-none ring-0 md:hidden">
          <span className="cursor-pointer">
            <Search className={cn("h-6 w-6 text-muted-foreground")} />
          </span>
        </PopoverTrigger>

        <PopoverContent className="mr-10 min-w-[350px]" sideOffset={5}>
          <div className="flex w-full items-center gap-1 rounded-md bg-secondary px-4 py-1 placeholder:text-sm">
            <Search size={16} className="mb-0.5 text-muted-foreground" />
            <Input
              placeholder="Search Smart Contracts"
              className="flex-1 border-0 text-muted-foreground shadow-none outline-none !ring-0"
            />
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Searchbar;
