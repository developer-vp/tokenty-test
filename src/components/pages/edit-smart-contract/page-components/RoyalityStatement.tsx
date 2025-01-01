import { createContractFormSchema } from "@/app/(with-sidebar)/(without-block-topRight-links)/edit-smart-contract/ContractPages";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Time } from "@/lib/enums/utils";
import { cn } from "@/lib/utils";
import React, { Dispatch, SetStateAction, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

const RoyalityStatement = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof createContractFormSchema>, any, undefined>;
}) => {
  const [key, setKey] = useState(+new Date());

  return (
    <div className="flex items-center">
      <div className="rounded-lg bg-white px-4 py-3 leading-[50px] shadow-md">
        <span className="mr-4 text-sm">
          The first royality will be paid after:{" "}
        </span>

        <span
          className={cn(
            "inline-flex items-center whitespace-nowrap rounded-sm pr-3 text-sm font-semibold text-black",
          )}
        >
          <FormField
            control={form.control}
            name="first_payment_after_number"
            render={({ field }) => {
              return (
                <FormItem className="">
                  <FormControl>
                    <Select
                      onValueChange={(val) => field.onChange(parseInt(val))}
                    >
                      <SelectTrigger className="w-full font-bold !outline-none !ring-0 [&_svg]:ml-2">
                        {/* <SelectValue placeholder="1" /> */}
                        {field.value}
                      </SelectTrigger>

                      <SelectContent className="h-56">
                        {/* prettier-ignore */}
                        <SelectGroup>
                          {[ "1", "2", "3", "4", "5", "6", "7", "9", "10", "11",].map((Item, idx) => {
                            return (
                              <SelectItem
                                value={Item}
                                key={idx}
                                className="cursor-pointer"
                              >
                                {Item}
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

        <span
          className={cn(
            "inline-flex items-center whitespace-nowrap rounded-sm pr-3 text-sm font-semibold text-black",
          )}
        >
          <FormField
            control={form.control}
            name="first_payment_after_unit"
            render={({ field }) => {
              return (
                <FormItem className="">
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="w-full font-bold !outline-none !ring-0 [&_svg]:ml-2">
                        {/* <SelectValue placeholder="Month" /> */}
                        {field.value}
                      </SelectTrigger>

                      <SelectContent>
                        <SelectGroup>
                          <SelectItem
                            value={"month"}
                            className="cursor-pointer"
                          >
                            {Time.Month}
                          </SelectItem>
                          <SelectItem value={"year"} className="cursor-pointer">
                            {Time.Year}
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              );
            }}
          />
        </span>

        <span className="mr-4 text-sm">
          of the present smart contract signature.
        </span>

        <br />

        <span className="mr-4 text-sm">The royality will be paid every</span>

        <span
          className={cn(
            "inline-flex items-center whitespace-nowrap rounded-sm pr-3 text-sm font-semibold text-black",
          )}
        >
          <FormField
            control={form.control}
            name="payment_frequency_unit"
            render={({ field }) => {
              return (
                <FormItem className="">
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="w-full font-bold !outline-none !ring-0 [&_svg]:ml-2">
                        {/* <SelectValue placeholder="Month" /> */}
                        {field.value}
                      </SelectTrigger>

                      <SelectContent>
                        <SelectGroup>
                          <SelectItem
                            value={Time.Month}
                            className="cursor-pointer"
                          >
                            {Time.Month}
                          </SelectItem>
                          <SelectItem
                            value={Time.Year}
                            className="cursor-pointer"
                          >
                            {Time.Year}
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              );
            }}
          />
        </span>

        <span className="mr-4 text-sm">during next</span>

        <span
          className={cn(
            "inline-flex items-center whitespace-nowrap rounded-sm pr-3 text-sm font-semibold text-black",
          )}
        >
          <FormField
            control={form.control}
            name="payment_duration_number"
            render={({ field }) => {
              return (
                <FormItem className="">
                  <FormControl>
                    <Select
                      onValueChange={(val) => field.onChange(parseInt(val))}
                    >
                      <SelectTrigger className="w-full font-bold !outline-none !ring-0 [&_svg]:ml-2">
                        {/* <SelectValue placeholder="1" /> */}
                        {field.value}
                      </SelectTrigger>

                      <SelectContent className="h-56">
                        {/* prettier-ignore */}
                        <SelectGroup>
                          {[ "1", "2", "3", "4", "5", "6", "7", "9", "10", "11",].map((Item, idx) => {
                            return (
                              <SelectItem
                                value={Item}
                                key={idx}
                                className="cursor-pointer"
                              >
                                {Item}
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

        <span
          className={cn(
            "inline-flex items-center whitespace-nowrap rounded-sm pr-3 text-sm font-semibold text-black",
          )}
        >
          <FormField
            control={form.control}
            name="payment_duration_unit"
            render={({ field }) => {
              return (
                <FormItem className="">
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="w-full font-bold !outline-none !ring-0 [&_svg]:ml-2">
                        {/* <SelectValue placeholder="Month" /> */}
                        {field.value}
                      </SelectTrigger>

                      <SelectContent>
                        <SelectGroup>
                          <SelectItem
                            value={Time.Month}
                            className="cursor-pointer"
                          >
                            {Time.Month}
                          </SelectItem>
                          <SelectItem
                            value={Time.Year}
                            className="cursor-pointer"
                          >
                            {Time.Year}
                          </SelectItem>
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
export default RoyalityStatement;
