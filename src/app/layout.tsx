import type { Metadata } from "next";
import "./globals.css";
import { getSession } from "@/auth";
import { Poppins } from "next/font/google";
import Providers from "./providers";
import { cn } from "@/lib/utils";
import ResponsiveTester from "@/lib/ResponsiveTester";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  // preload: true,
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tokenty",
  description: "Create Your Smart Contracts With Tokenty",
  icons: [{ rel: "icon", url: "/icon.png" }],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  return (
    <html lang="en">
      <body className={cn("text-foreground antialiased", poppins.variable)}>
        <Providers session={session}>{children}</Providers>
        {/* <ResponsiveTester /> */}

        <Toaster
          richColors
          toastOptions={{
            classNames: { loading: "bg-[#001f0f] text-blue-400" },
          }}
        />
      </body>
    </html>
  );
}
