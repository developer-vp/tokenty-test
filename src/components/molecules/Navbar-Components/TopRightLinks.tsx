"use client";
import React, { useState } from "react";
import BlockTRLinks from "./BlockTRLinks";
import DefaultTRLinks from "./DefaultTRLinks";

type TopRightLinksVarient = "default" | "block";
type TopRightLinks = "profile" | "activity";

const TopRightLinks = ({ varient }: { varient: TopRightLinksVarient }) => {
  const [open, setOpen] = useState<TopRightLinks>("profile");

  if (varient === "default") return <DefaultTRLinks />;

  //   Block varient will be hidden in mobile we are using media query to show default on on block screen in mobile view
  if (varient === "block")
    return (
      <>
        {/*
         * This will only show in laptop
         */}
        <BlockTRLinks
          open={open}
          setOpen={setOpen}
          className="hidden lg:block"
        />
        {/*
         * This will only show in mobile
         */}
        <DefaultTRLinks className="lg:hidden" />
      </>
    );
};
export default TopRightLinks;
