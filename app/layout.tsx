import "bootstrap/dist/css/bootstrap.min.css";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import StoreProvider from "@/store/StoreProvider";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { CartProvider } from "./context/ContextApp";


export const metadata: Metadata = {
  title: "Ecommerce App",
  description: "Ecommerce of the future",
};

// Typing RootLayout with children prop as ReactNode
export default function RootLayout({
  children,
}: { children: ReactNode }) {
  return (
      <html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossOrigin="anonymous"
          />
        </Head>
        <Script
          src="https://kit.fontawesome.com/e04ed0b4fb.js"
          crossOrigin="anonymous"
        ></Script>

        <body className={`font-inter overflow-x-hidden`}>
         <CartProvider> 
             <Header className='font-poppins' />
              <Nav />
             {children}
               <Footer />
          </CartProvider> 
      
        </body>
      </html>
  );
}
