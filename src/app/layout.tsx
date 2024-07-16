import type { Metadata } from "next";
import { Inter, Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import List from "@/components/List";
import { Toaster } from "@/components/ui/toaster";


const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pehchan",
  description: "Customize your style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <List/>
        <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full ">
          {children}
          </div>
         </main>
         <Toaster/>
        
        </body>
    </html>
  );
}
