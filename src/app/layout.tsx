import type { Metadata } from "next";
import "./globals.css";
import {

  FontAnton,
  FontEdu,
  FontNanumMyeongjo,
  FontRoboto,
} from "./utils/CustomFonts";
import Navbar from "@/components/common/navbar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "BettEnoch",
  description: "NextGen Portfolio App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={`${FontRoboto.variable} ${FontNanumMyeongjo.variable} ${FontAnton.variable} ${FontEdu.variable} bg-background-light dark:bg-background-dark text-primary-dark dark:text-primary-light antialiased`}
      >
       <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="min-h-screen flex flex-col w-full font-roboto">
            <Navbar />
            {children}
            <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
