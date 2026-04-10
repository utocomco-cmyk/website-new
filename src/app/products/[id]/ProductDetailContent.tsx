"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Product } from "../data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  Check,
  FileText,
  Download,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { QuoteForm } from "@/components/QuoteForm";

interface ProductDetailContentProps {
  product: Product;
}

export function ProductDetailContent({ product }: ProductDetailContentProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const productImages = product.images?.filter((img): img is string => typeof img === 'string') || [];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products" className="hover:text-gray-900 transition-colors">
              Products
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Header - White Background */}
      <div className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden border border-gray-200">
                {productImages.length > 0 && productImages[selectedImage] ? (
                  <Image
                    src={productImages[selectedImage]}
                    alt={product.name}
                    fill
                    className="object-contain p-8"
                    priority
                  />
                ) : (
                  <div className="w-64 h-48">
                    <svg viewBox="0 0 280 200" className="w-full h-full">
                      <rect x="60" y="55" width="160" height="100" rx="12" fill="#e2e8f0" stroke="#3b82f6" strokeWidth="2" />
                      <circle cx="140" cy="105" r="40" fill="none" stroke="#3b82f6" strokeWidth="3" />
                    </svg>
                  </div>
                )}
                {product.badge && selectedImage === 0 && (
                  <Badge className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 text-sm`}>
                    {product.badge}
                  </Badge>
                )}
              </div>
              
              {/* Thumbnail Gallery */}
              {productImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {productImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all hover:border-blue-400 ${
                        selectedImage === idx ? 'border-blue-600 ring-2 ring-blue-100' : 'border-gray-200'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} - ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="text-blue-600 text-sm mb-2 font-medium">{product.subCategory}</div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <div className="text-gray-500">Model: {product.model}</div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((idx) => (
                    <Star
                      key={idx}
                      className={`w-5 h-5 ${
                        idx <= Math.round(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-900 font-medium">{product.rating}</span>
                <span className="text-gray-500">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="text-gray-500 text-sm mb-1">Price</div>
                <div className="text-4xl font-bold text-blue-600">{product.price}</div>
                <div className="flex items-center gap-2 mt-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-green-600 text-sm">
                    {product.inStock ? "In Stock" : "Pre-order"}
                  </span>
                </div>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["Resolution", product.resolution],
                  ["Interface", product.interface],
                  ["Shutter", product.shutter],
                  ["Frame Rate", product.fps],
                ].map(([label, value]) => (
                  <div key={label} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <div className="text-gray-500 text-xs">{label}</div>
                    <div className="text-gray-900 font-medium">{value}</div>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <QuoteForm
                  buttonText="Get Quote"
                  buttonVariant="default"
                  buttonClassName="flex-1 bg-blue-600 text-white hover:bg-blue-700 h-12 text-lg rounded-xl"
                  source={`product_${product.id}`}
                />
                <QuoteForm
                  buttonText="Technical Consult"
                  buttonVariant="outline"
                  buttonClassName="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 h-12 text-lg rounded-xl"
                  source={`product_${product.id}_consult`}
                />
              </div>

              {/* Detailed Specs - Below buttons */}
              <Card className="bg-gray-50 border-gray-200">
                <CardContent className="p-4">
                  <h3 className="text-gray-900 font-bold mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    Technical Specs
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.entries(product.specs).slice(0, 8).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-500 text-sm">{key}</span>
                        <span className="text-gray-900 font-medium text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                  {Object.entries(product.specs).length > 8 && (
                    <div className="text-center mt-4">
                      <span className="text-blue-600 text-sm">View Full Specifications</span>
                    </div>
                  )}
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </div>

      {/* Product Details Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Product Detail Section - 显示完整详情页图片 */}
        {product.images && product.images.length > 2 && (
          <Card className="bg-white border-gray-200 mb-8 shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-gray-900 font-bold text-2xl mb-8">Product Details</h3>
              <div className="relative w-full bg-gray-50 rounded-xl overflow-hidden" style={{ minHeight: '1400px' }}>
                <Image
                  src={product.images[product.images.length - 1]}
                  alt={`${product.name} - Product Details`}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Specs Image Section - 额外的详情图片 */}
        {product.images && product.images.length > 4 && (
          <Card className="bg-white border-gray-200 mb-8 shadow-sm">
            <CardContent className="p-8">
              <div className="space-y-8">
                {product.images.slice(4).map((img, idx) => (
                  <div key={idx} className="relative w-full bg-gray-50 rounded-xl overflow-hidden" style={{ minHeight: '900px' }}>
                    <Image
                      src={img}
                      alt={`${product.name} - Detail ${idx + 1}`}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Full Specs Section */}
        <Card className="bg-white border-gray-200 mb-8 shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-gray-900 font-bold text-xl mb-6">Full Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-center justify-between py-3 border-b border-gray-100"
                >
                  <span className="text-gray-500">{key}</span>
                  <span className="text-gray-900 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features Section */}
        <Card className="bg-white border-gray-200 mb-8 shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-gray-900 font-bold text-xl mb-6">Product Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>
          </CardContent>
        </Card>

        {/* Downloads Section */}
        <Card className="bg-white border-gray-200 mb-8 shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-gray-900 font-bold text-xl mb-6">Downloads</h3>
            <div className="space-y-3">
              {[
                { name: "Product Datasheet (PDF)", size: "2.4 MB" },
                { name: "User Manual (PDF)", size: "5.1 MB" },
                { name: "SDK Package (ZIP)", size: "156 MB" },
                { name: "Driver (EXE)", size: "45 MB" },
              ].map((file) => (
                <div
                  key={file.name}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-gray-900">{file.name}</div>
                      <div className="text-gray-500 text-sm">{file.size}</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Reviews Section */}
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-gray-900 font-bold text-xl">Customer Reviews</h3>
              <Button className="bg-blue-600 hover:bg-blue-700">Write Review</Button>
            </div>
            <div className="space-y-6">
              {[
                {
                  user: "John Zhang",
                  company: "Automation Co.",
                  rating: 5,
                  date: "2024-03-15",
                  content: "Excellent camera quality, clear imaging, complete SDK documentation, and responsive technical support.",
                },
                {
                  user: "Manager Li",
                  company: "Inspection Equipment Factory",
                  rating: 5,
                  date: "2024-03-10",
                  content: "Purchased 20 units, very stable, running continuously on the production line for half a year without any issues.",
                },
                {
                  user: "Engineer Wang",
                  company: "Research Institute",
                  rating: 4,
                  date: "2024-02-28",
                  content: "Good performance and reasonable price, but shipping was a bit slow.",
                },
              ].map((review, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-6 last:border-0">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-medium">{review.user[0]}</span>
                      </div>
                      <div>
                        <div className="text-gray-900 font-medium">{review.user}</div>
                        <div className="text-gray-500 text-sm">{review.company}</div>
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm">{review.date}</div>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700">{review.content}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
