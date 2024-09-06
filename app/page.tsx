import CategorySection from "@/components/CategorySection";
import Hero from "@/components/Hero";
import TodaySection from "@/components/TodaySection";
import Head from 'next/head';
import { Poppins } from 'next/font/google';
import BestSellingSection from "@/components/BestSellingSection";
import BillboardSection from "@/components/BillboardSection";
import ProductSection from "@/components/ProductSection";
import FeaturedSection from "@/components/FeaturedSection";



export default function Home() {
  return (
    <main className='font-poppins'>
    <Head>
        <title>My Website</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <meta name="description" content="This is a description of my website." />
      </Head>
    <div className="">
      <Hero />
      <TodaySection />
      <CategorySection />
      <BestSellingSection />
      <BillboardSection />
      <ProductSection />
      <FeaturedSection />
    </div>
    </main>
  );
}
