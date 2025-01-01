import { createContractFormSchema } from "@/app/(with-sidebar)/(without-block-topRight-links)/edit-smart-contract/ContractPages";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import MemberSelectSkeleton, {
  MemberSelectError,
} from "./MemberSelectSkeleton";
import { FormControl, FormField, FormItem } from "@/components/ui/form";

interface HoldersResponse {
  success: boolean;
  data: {
    id: number;
    role: string;
    email: string;
  }[];
}

const fetchHolders = async (token: string): Promise<HoldersResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/company/holders`,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch holders");
  }

  return response.json();
};

const MemberSelect = ({
  className,
  form,
}: {
  className?: string;
  form: UseFormReturn<z.infer<typeof createContractFormSchema>, any, undefined>;
}) => {
  const router = useRouter();
  const user = useSession();
  if (!user) {
    router.push("/login");
    return;
  }
  const token = user.data?.user.token;
  if (!token) {
    router.push("/login");
    return;
  }

  const holders = useQuery({
    queryKey: ["getHolders"], // must be unique
    queryFn: () => fetchHolders(token),
  });
  if (holders.isLoading) {
    return <MemberSelectSkeleton />;
  }
  if (holders.error) {
    toast.error("Failed to fetch holders");
    console.log(holders.error);
    return <MemberSelectError />;
  }
  if (holders.isSuccess)
    return (
      <div className={cn("flex items-center", className)}>
        <div className="rounded-lg bg-white px-4 py-3 leading-[50px] shadow-md">
          <span className="mr-4 text-sm">The Royality Owner is: </span>

          <span
            className={cn(
              "inline-flex items-center whitespace-nowrap rounded-sm text-sm font-semibold text-black",
            )}
          >
            <FormField
              control={form.control}
              name="holderEmail"
              render={({ field }) => {
                return (
                  <FormItem className="">
                    <FormControl>
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger
                          className={cn(
                            "w-full font-bold !outline-none !ring-0 [&_svg]:ml-2",
                            form.formState.errors.holderEmail &&
                              "border-red-600",
                          )}
                        >
                          {/* <SelectValue placeholder="Select Member" /> */}
                          {field.value || "Select Member"}
                        </SelectTrigger>

                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Team Members</SelectLabel>
                            {holders.data.data.map((Item, idx) => {
                              return (
                                <SelectItem
                                  key={idx}
                                  value={Item.email}
                                  className="cursor-pointer"
                                >
                                  {Item.email}
                                </SelectItem>
                              );
                            })}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                );
              }}
            />
          </span>
        </div>
      </div>
    );
};
export default MemberSelect;
