"use client";

import { Product } from "./data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  viewMode: "grid" | "list";
}

// 产品图片组件
function ProductImage({ product, className }: { product: Product; className?: string }) {
  if (product.image) {
    return (
      <Image
        src={product.image}
        alt={product.name}
        fill
        className={`object-contain ${className || ""}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
        unoptimized
      />
    );
  }

  // 默认 SVG 图标
  return (
    <div className={`flex items-center justify-center ${className || ""}`}>
      <svg viewBox="0 0 280 200" className="w-full h-full">
        <rect x="60" y="55" width="160" height="100" rx="12" fill="#e2e8f0" stroke="#3b82f6" strokeWidth="1.5" />
        <rect x="65" y="60" width="150" height="90" rx="10" fill="#f8fafc" />
        <circle cx="140" cy="105" r="32" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.8" />
        <circle cx="140" cy="105" r="20" fill="#f1f5f9" />
        <circle cx="140" cy="105" r="12" fill="#3b82f6" opacity="0.9" />
        <circle cx="136" cy="101" r="3" fill="white" opacity="0.6" />
      </svg>
    </div>
  );
}

export function ProductCard({ product, viewMode }: ProductCardProps) {
  if (viewMode === "list") {
    return (
      <Card className="group bg-white border-gray-200 hover:border-gray-300 overflow-hidden transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-4">
          <div className="flex gap-4">
            {/* Image - 统一为正方形 */}
            <Link href={`/products/${product.id}`} className="block flex-shrink-0">
              <div className="relative w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <ProductImage product={product} className="w-full h-full p-2" />
                {product.badge && (
                  <Badge className={`absolute top-2 left-2 ${product.badgeColor} text-white text-xs`}>
                    {product.badge}
                  </Badge>
                )}
              </div>
            </Link>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-gray-500 text-xs mb-1">{product.subCategory}</div>
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-gray-900 font-bold text-lg mb-1 hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="text-gray-400 text-sm mb-2">{product.model}</div>
                </div>
                {/* 价格与库存状态 */}
                <div className="text-right">
                  <div className="text-blue-600 font-bold text-lg">{product.price}</div>
                  <div className="flex items-center gap-1 text-gray-500 text-xs justify-end">
                    <Check className="w-3 h-3 text-green-500" />
                    {product.inStock ? "In Stock" : "Pre-order"}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                {product.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  {product.specs && Object.entries(product.specs).slice(0, 3).map(([key, value], index) => (
                    <span key={key}>
                      {index > 0 && <span className="mx-2">·</span>}
                      {value}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-gray-700 text-sm">{product.rating}</span>
                    <span className="text-gray-400 text-xs">({product.reviews})</span>
                  </div>
                  <Link href={`/products/${product.id}`}>
                    <Button className="bg-blue-600 hover:bg-blue-500 text-white text-sm">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Grid View
  return (
    <Card className="group bg-white border-gray-200 hover:border-gray-300 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product image area - 800x800 aspect ratio */}
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
          <div className="w-full h-full p-8 opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-300">
            <ProductImage product={product} className="w-full h-full" />
          </div>
          {product.badge && (
            <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white`}>
              {product.badge}
            </Badge>
          )}
        </div>
      </Link>

      {/* Info */}
      <CardContent className="p-5">
        <div className="text-gray-500 text-xs mb-1">{product.subCategory}</div>
        <Link href={`/products/${product.id}`}>
          <h3 className="text-gray-900 font-bold text-lg mb-1 hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="text-gray-400 text-sm mb-3">{product.model}</div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          {product.specs && Object.entries(product.specs).slice(0, 4).map(([key, value]) => (
            <div key={key} className="bg-gray-50 rounded-lg px-2.5 py-1.5">
              <div className="text-gray-400 text-xs">{key}</div>
              <div className="text-gray-700 text-xs font-medium mt-0.5">{value}</div>
            </div>
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((idx) => (
              <Star
                key={idx}
                className={`w-3 h-3 ${
                  idx <= Math.round(product.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-gray-700 text-xs font-medium">{product.rating}</span>
          <span className="text-gray-400 text-xs">({product.reviews} reviews)</span>
        </div>

        {/* Price & View Details Button */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-blue-600 font-bold text-lg">{product.price}</div>
            <div className="flex items-center gap-1 text-gray-500 text-xs">
              <Check className="w-3 h-3 text-green-500" />
              {product.inStock ? "In Stock" : "Pre-order"}
            </div>
          </div>
          <Link href={`/products/${product.id}`}>
            <Button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-xl transition-colors shadow-lg shadow-blue-600/30">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
