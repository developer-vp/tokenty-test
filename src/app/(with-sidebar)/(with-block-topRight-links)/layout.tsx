import "@/app/globals.css";
import TopRightLinks from "@/components/molecules/Navbar-Components/TopRightLinks";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative h-full antialiased">
      <div className="relative flex gap-5">
        <div className="flex-1">{children}</div>
        {/*
         * In mobile below section is handled in individual routes
         */}
        <div className="">
          <TopRightLinks varient="block" />
        </div>
      </div>
    </section>
  );
}
