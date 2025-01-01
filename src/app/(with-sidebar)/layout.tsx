import "@/app/globals.css";
import { ImageAssets } from "@/assets/ImageAssets";
import LaptopSidebar from "@/components/molecules/sidebar/Sidebar-Components/LaptopSidebar";
import SidebarRoutes from "@/components/molecules/sidebar/Sidebar-Components/SidebarRoutes";
import Image from "next/image";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative h-full antialiased">
      <main className="relative flex min-h-screen">
        {/*
         * Laptop sidebar is only going to show in laptop view. Mobile sidebar is handled from individual pages
         */}
        <LaptopSidebar className="hidden md:block" />

        <div className="mt-5 flex-1 flex-grow px-3 md:ml-20 md:px-10">
          {children}
        </div>
      </main>
    </section>
  );
}
