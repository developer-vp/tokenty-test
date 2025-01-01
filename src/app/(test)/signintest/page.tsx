"use client";
import { signIn, signOut } from "next-auth/react";
import React from "react";

const Signin = () => {
  return (
    <div className="m-10 flex items-center gap-5">
      <button
        className="rounded-lg border-2 px-10 py-4"
        onClick={() => signIn("google", { callbackUrl: "/admintest" })}
      >
        Google
      </button>

      <button
        className="rounded-lg border-2 px-10 py-4"
        onClick={() => signIn("azure-ad", { callbackUrl: "/admintest" })}
      >
        Outlook
      </button>

      <button
        className="rounded-lg border-2 px-10 py-4"
        onClick={() => signOut({ callbackUrl: "/signintest" })}
      >
        logout
      </button>
    </div>
  );
};

export default Signin;
