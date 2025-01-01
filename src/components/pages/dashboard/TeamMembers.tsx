import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Pencil, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const TeamMembers = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("flex h-full w-64 flex-col", className)}>
      <CardHeader className="flex flex-row items-center justify-center gap-2 p-3.5 text-muted-foreground">
        <Users className="" size={18} strokeWidth={2.8} />
        <p className="text text-sm font-bold">Team Members</p>
      </CardHeader>

      <CardContent className="flex-1 px-4">
        <ScrollArea className="h-56">
          {teamData.map((item, i) => {
            return (
              <div
                key={i}
                className="mx-auto mb-2 flex w-full flex-row items-center justify-between gap-2 rounded-sm border px-4 py-2.5 text-muted-foreground"
              >
                <p className="text text-[10px] font-bold">{item.name}</p>
                <p className="text text-[10px] font-medium">{item.role}</p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>

      <CardFooter className="p-3.5 pt-2">
        <Link
          href={"/edit-team"}
          className="mx-auto flex w-[150px] cursor-pointer flex-row items-center justify-center gap-2 rounded-md border py-3 text-muted-foreground shadow-sm hover:shadow-md"
        >
          <Pencil className="" size={14} strokeWidth={2.8} />
          <p className="text text-[10px] font-bold">Edit Team</p>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TeamMembers;

const teamData = [
  { name: "Thomas", role: "manager" },
  { name: "David", role: "holder" },
  { name: "Thomas", role: "manager" },
  { name: "David", role: "holder" },
  { name: "Thomas", role: "manager" },
  { name: "David", role: "holder" },
  { name: "Thomas", role: "manager" },
  { name: "David", role: "holder" },
  { name: "Thomas", role: "manager" },
  { name: "David", role: "holder" },
  { name: "Thomas", role: "manager" },
  { name: "David", role: "holder" },
  { name: "Thomas", role: "manager" },
  { name: "David", role: "holder" },
];
