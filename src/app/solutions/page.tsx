import { Metadata } from "next";
import { SolutionsContent } from "./SolutionsContent";

export const metadata: Metadata = {
  title: "Machine Vision Solutions - Semiconductor, Lithium Battery, Automotive | Utocom",
  description: "Utocom provides professional machine vision solutions covering semiconductor inspection, lithium battery manufacturing, automotive manufacturing, food & pharmaceutical, logistics & warehousing, and printing & packaging industries. Intelligent inspection systems based on high-performance industrial cameras.",
  keywords: [
    "machine vision solutions",
    "industrial vision inspection",
    "semiconductor inspection",
    "lithium battery vision inspection",
    "automotive manufacturing vision",
    "food & pharmaceutical inspection",
    "logistics vision sorting",
    "printing quality inspection"
  ],
  openGraph: {
    title: "Machine Vision Solutions - Semiconductor, Lithium Battery, Automotive | Utocom",
    description: "Utocom provides professional machine vision solutions covering semiconductor inspection, lithium battery manufacturing, automotive manufacturing, and more industries",
    url: "https://www.utocom.com/solutions",
    type: "website",
  },
  alternates: {
    canonical: "https://www.utocom.com/solutions",
  },
};

export default function SolutionsPage() {
  return <SolutionsContent />;
}
