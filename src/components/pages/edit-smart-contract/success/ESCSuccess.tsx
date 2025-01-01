import React from "react";
import Image from "next/image";
import TickImage from "@/assets/images/tickbg.png";
import Link from "next/link";

const ESCSuccess = () => {
  return (
    <div className="mt-32 flex items-center justify-center">
      <div className="flex w-72 flex-col items-center gap-5 rounded-2xl border px-10 py-5">
        <Image src={TickImage} alt="Tick_missing" width={50} height={50} />
        <h2 className="font-semibold">Smart Contract Signed!</h2>
        <p className="text-center text-xs">
          An email has been sent to your holder. <br />
          You can see the state of your contract in your project's dashboard.
        </p>

        <Link href={"/"} className="font-semibold">
          view dashboard
        </Link>
      </div>
    </div>
  );
};
export default ESCSuccess;
