import type { Metadata } from "next";
import "./global.css"
import Navbar from '@/components/header'
import Footer from '@/components/Footer'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Work Story",
  description: "Generated by create omni biz sol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className=''>
        <Navbar />
        {children}
        <Footer />
        
      </body>
    </html>
  );
}
