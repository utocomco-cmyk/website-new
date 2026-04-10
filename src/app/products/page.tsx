import { Metadata } from "next";
import { ProductsContent } from "./ProductsContent";

export const metadata: Metadata = {
  title: "Products - HDMI Cameras, Microscope Cameras, Vision Inspection | Utocom",
  description: "Explore Utocom's full range of industrial camera products, including HDMI cameras, microscope cameras, vision inspection cameras, smart cameras, VGA cameras, and digital microscopes. High-performance industrial cameras for smart manufacturing, semiconductor inspection, medical observation, and more.",
  keywords: [
    "industrial cameras",
    "HDMI cameras",
    "microscope cameras",
    "vision inspection cameras",
    "smart cameras",
    "VGA cameras",
    "digital microscopes",
    "industrial camera price",
    "industrial camera manufacturer"
  ],
  openGraph: {
    title: "Products - HDMI Cameras, Microscope Cameras, Vision Inspection | Utocom",
    description: "Explore Utocom's full range of industrial camera products, including HDMI cameras, microscope cameras, vision inspection cameras, smart cameras, and more",
    url: "https://www.utocom.com/products",
    type: "website",
  },
  alternates: {
    canonical: "https://www.utocom.com/products",
  },
};

export default function ProductsPage() {
  return <ProductsContent />;
}
