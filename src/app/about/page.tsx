import { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us - Qingdao Utocom Co., Ltd. | Industrial Camera Manufacturer",
  description: "Qingdao Utocom Co., Ltd., with 20 years of expertise in industrial vision, specializes in R&D and manufacturing of industrial cameras, smart cameras, and machine vision systems. Learn about our development history, corporate culture, and core technical capabilities.",
  keywords: [
    "Qingdao Utocom",
    "industrial camera manufacturer",
    "machine vision company",
    "industrial camera factory",
    "Qingdao industrial camera",
    "industrial vision enterprise",
    "about us"
  ],
  openGraph: {
    title: "About Us - Qingdao Utocom Co., Ltd. | Industrial Camera Manufacturer",
    description: "Qingdao Utocom Co., Ltd., with 20 years of expertise in industrial vision, specializes in R&D and manufacturing of industrial cameras, smart cameras, and machine vision systems",
    url: "https://www.utocom.com/about",
    type: "website",
  },
  alternates: {
    canonical: "https://www.utocom.com/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
