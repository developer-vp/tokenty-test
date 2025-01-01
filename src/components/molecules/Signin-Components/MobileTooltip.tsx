import { cn } from "@/lib/utils";
import { BadgeInfo } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MobileTooltip = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute bottom-0 right-0 px-4 py-3", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none ring-0">
          <BadgeInfo />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="mr-4 max-w-[260px]" sideOffset={10}>
          <DropdownMenuItem>
            <p className="text-xs leading-4">
              <span className="mr-2 font-[800]">Manager :</span>
              <span>You will create Smart Contracts and pay your holders</span>
            </p>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <p className="text-xs leading-4">
              <span className="mr-2 font-[800]">Holder :</span>
              <span>
                You will sign Smart Contracts to receive your tokens and
                royalties
              </span>
            </p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileTooltip;
