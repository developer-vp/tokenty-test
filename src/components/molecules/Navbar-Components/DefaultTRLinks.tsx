import React from "react";
import { cn } from "@/lib/utils";
import {
  Bell,
  CheckCircle,
  LogOut,
  Pencil,
  UserRound,
  Wallet,
} from "lucide-react";
import { ImageAssets } from "@/assets/ImageAssets";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const DefaultTRLinks = ({ className }: { className?: string }) => {
  return (
    <section className={cn("flex items-center gap-2 md:gap-3", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none ring-0">
          <span className="cursor-pointer">
            <Bell
              className={cn(
                "h-6 w-6 fill-muted-foreground text-muted-foreground",
              )}
            />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" sideOffset={5}>
          <section className="flex w-64 flex-col gap-5 px-3 py-3">
            <h2 className="text-lg font-bold">Activity</h2>

            <div>
              <h3 className="ml-1 select-none text-xs font-semibold text-muted-foreground">
                New
              </h3>

              <div className="mt-1">
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  orientation="vertical"
                  className="w-full max-w-xs"
                >
                  <CarouselContent className="mt-1 h-[100px] gap-2 py-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem
                        key={index}
                        className="basis-1/2 rounded-sm border pt-1"
                      >
                        <div className="flex items-center gap-2 px-3 py-1 text-muted-foreground">
                          <CheckCircle size={18} className="min-w-[10%]" />

                          <div className="max-w-[90%]">
                            <p className="text-xs font-semibold">NFT Minted!</p>
                            <p className="text-[9px] leading-[9px]">
                              Thomas just signed your smart contract
                            </p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  <div className="absolute -right-5 -top-7">
                    <div className="relative w-16">
                      <CarouselPrevious className="absolute left-0 top-0 h-6 w-6" />
                      <CarouselNext className="absolute right-0 top-0 h-6 w-6" />
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>

            <div>
              <h3 className="ml-1 select-none text-xs font-semibold text-muted-foreground">
                Old
              </h3>

              <div className="mt-1">
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  orientation="vertical"
                  className="w-full max-w-xs"
                >
                  <CarouselContent className="mt-1 h-[100px] gap-2 py-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem
                        key={index}
                        className="basis-1/2 rounded-sm border pt-1"
                      >
                        <div className="flex items-center gap-2 px-3 py-1 text-muted-foreground">
                          <CheckCircle size={18} className="min-w-[10%]" />

                          <div className="max-w-[90%]">
                            <p className="text-xs font-semibold">NFT Minted!</p>
                            <p className="text-[9px] leading-[9px]">
                              Thomas just signed your smart contract
                            </p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  <div className="absolute -right-5 -top-7">
                    <div className="relative w-16">
                      <CarouselPrevious className="absolute left-0 top-0 h-6 w-6" />
                      <CarouselNext className="absolute right-0 top-0 h-6 w-6" />
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </section>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none ring-0">
          <span className="block h-7 w-7 cursor-pointer">
            <ImageAssets.Icons.SolidUser
              className={cn("text-muted-foreground")}
            />
          </span>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" sideOffset={5}>
          <section className="flex w-64 flex-col gap-5 px-3 py-3">
            <h2 className="text-lg font-bold">Profile</h2>

            <div>
              <h3 className="ml-1 text-xs font-semibold text-muted-foreground">
                Wallet
              </h3>

              <div className="mt-1 flex h-14 items-center justify-center gap-2">
                <div className="flex h-full flex-1 cursor-pointer items-center gap-5 rounded-sm border border-muted-foreground/20 px-4 text-xs font-semibold text-muted-foreground">
                  <Wallet strokeWidth={2.8} size={18} />

                  <h4>Connect Wallet</h4>
                </div>
              </div>
            </div>

            <div>
              <h3 className="ml-1 text-xs font-semibold text-muted-foreground">
                Email Account
              </h3>

              <div className="mt-1 flex h-14 items-center justify-center gap-2">
                <div className="flex h-full flex-1 cursor-pointer items-center gap-5 rounded-sm border border-muted-foreground/20 px-4 text-xs font-semibold text-muted-foreground">
                  <ImageAssets.Icons.SolidGoogle className="h-[18px] w-[18px] text-muted-foreground" />

                  <div>
                    <p>Google Account</p>
                    <p className="font-medium">thomas@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="ml-1 text-xs font-semibold text-muted-foreground">
                Account
              </h3>

              <div className="mt-1 flex h-14 items-center justify-center gap-2">
                <div className="flex h-full flex-1 cursor-pointer items-center gap-5 rounded-sm border border-muted-foreground/20 px-4 text-xs font-semibold text-muted-foreground">
                  <UserRound strokeWidth={2.8} size={18} />

                  <div>
                    <p>Comapany Name</p>
                    <p className="font-medium">Doky</p>
                  </div>
                </div>

                <div className="flex h-full cursor-pointer items-center justify-center rounded-sm border border-muted-foreground/20 px-2">
                  <Pencil size={16} />
                </div>
              </div>
              <button
                onClick={() => signOut({ callbackUrl: "/signin" })}
                className="mt-5 flex h-full w-full flex-1 cursor-pointer items-center gap-5 rounded-sm border border-muted-foreground/20 px-4 py-3 text-xs font-semibold text-muted-foreground hover:shadow-sm"
              >
                <LogOut strokeWidth={2.8} size={18} />

                <p className="text-sm font-semibold">Logout</p>
              </button>
            </div>
          </section>
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
};

export default DefaultTRLinks;
