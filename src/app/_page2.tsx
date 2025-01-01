"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const home = () => {
  return (
    <div className="m-10 flex gap-5">
      home
      <Link href={"/admin"}>admin</Link>
      <Link href={"/signin"}>signin</Link>
      <button onClick={() => signOut({ callbackUrl: "/signin" })}>
        logout
      </button>
    </div>
  );
};

export default home;
