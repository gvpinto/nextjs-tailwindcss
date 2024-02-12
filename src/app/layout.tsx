import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Button } from "@/components/ui/button";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Tailwind",
  description: "Learning Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn("flex min-h-screen flex-col justify-start bg-background font-sans antialiased", fontSans.variable)}>
        <nav className='h-24 bg-blue-800'>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* <!-- Mobile menu button--> */}
                <Button
                  type='button'
                  className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                  aria-controls='mobile-menu'
                  aria-expanded='false'></Button>
              </div>
            </div>
          </div>
          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          <div className='sm:hidden' id='mobile-menu'></div>
        </nav>
        <main className='flex min-h-full w-full grow flex-col items-center justify-start'>
          {children}
          {/* <footer className='h-10 w-full bg-green-700'></footer> */}
        </main>
      </body>
    </html>
  );
}
