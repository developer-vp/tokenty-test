import React from "react";
import { House } from "lucide-react";
import { NotebookPen } from "lucide-react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";

const Sidebar = () => {
  return (
    <div className="flex h-[100vh] w-24 flex-col items-center gap-12 rounded-md border-2 bg-white pt-10 shadow-2xl">
      <div>
        <Image src={Logo} alt="logo_image" height={40} width={40} />
      </div>

      <div className="">
        <House size={28} className="text-[#d1d1d1]" />
      </div>
      <div>
        <NotebookPen size={28} className="text-[#d1d1d1]" />
      </div>
    </div>
  );
};
export default Sidebar;
