import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import ThemeProvider from "@/src/theme/ThemeProvider";
import Header from "@/src/feature/layout/Header";
import Footer from "@/src/feature/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FunThread",
  description: "Ligne de conversation amusante pour le DEV",
};
type LayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function RootLayout({
  children, modal,
}: LayoutProps) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning={true}>
      <body className={clsx(inter.className, 'bg-background h-full')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col h-full">
            <Header />
            <div className="flex-1 max-w-lg m-auto py-14 w-full">
              {modal}
              {children}
            </div>
            <Footer />
          </div>
          
        </ThemeProvider>
      </body>
    </html>
  );
}
