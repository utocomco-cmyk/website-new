import { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "../data";
import { ProductDetailContent } from "./ProductDetailContent";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return {
      title: "Product Not Found - Utocom",
      description: "Sorry, the product you are looking for does not exist. Browse our industrial camera product center to find the right high-performance industrial camera for your needs.",
    };
  }

  const keywords = [
    product.model,
    product.name,
    product.subCategory,
    "industrial camera",
    "machine vision",
    "industrial camera price",
    "industrial camera manufacturer"
  ];

  return {
    title: `${product.model} ${product.name} - ${product.subCategory} | Utocom`,
    description: `${product.description} Suitable for industrial inspection and machine vision applications. Utocom professional industrial camera manufacturer.`,
    keywords: keywords,
    openGraph: {
      title: `${product.model} ${product.name} - ${product.subCategory} | Utocom`,
      description: product.description,
      url: `https://www.utocom.com/products/${product.id}`,
      type: "website",
      images: product.image ? [
        {
          url: `https://www.utocom.com${product.image}`,
          alt: product.name,
        }
      ] : undefined,
    },
    alternates: {
      canonical: `https://www.utocom.com/products/${product.id}`,
    },
  };
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id.toString() }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    notFound();
  }

  return <ProductDetailContent product={product} />;
}
