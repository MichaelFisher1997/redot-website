"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/landing/Hero";
import { ProductShowcase } from "@/components/sections/landing/ProductShowcase";

const Features = dynamic(
  () =>
    import("@/components/sections/landing/Features").then(
      (mod) => mod.Features
    ),
  {
    ssr: false,
  }
);

const Review = dynamic(
  () =>
    import("@/components/sections/landing/Review").then((mod) => mod.Review),
  {
    ssr: false,
  }
);

const News = dynamic(
  () => import("@/components/sections/landing/News").then((mod) => mod.News),
  {
    ssr: false,
  }
);

const Start = dynamic(
  () => import("@/components/sections/landing/Start").then((mod) => mod.Start),
  {
    ssr: false,
  }
);

export default function Landing() {
  return (
    <div>
      <Hero />
      <ProductShowcase />
      <Features />
      <News />
      <Review />
      <Start />
    </div>
  );
}
