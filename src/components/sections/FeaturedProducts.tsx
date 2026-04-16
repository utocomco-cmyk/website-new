import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Featured products selected from 24 new products
// Prioritizing products with Hot/New badges
const featuredProducts = [
  {
    id: 11,
    name: "Autofocus Digital Microscope",
    model: "UT-3500AF",
    category: "Measuring Microscope",
    resolution: "HD",
    price: "Contact Us",
    interface: "HDMI",
    shutter: "Rolling Shutter",
    fps: "60fps",
    badge: "Hot",
    badgeColor: "bg-red-500",
    rating: 4.8,
    reviews: 203,
    image: "/images/products/ut-3500af/main.jpg",
  },
  {
    id: 8,
    name: "Digital Metallographic Microscope",
    model: "UT-MT4K80",
    category: "Metallographic Microscope",
    resolution: "4K",
    price: "Contact Us",
    interface: "HDMI",
    shutter: "Rolling Shutter",
    fps: "60fps",
    badge: "4K",
    badgeColor: "bg-blue-500",
    rating: 4.8,
    reviews: 156,
    image: "/images/products/ut-mt4k80/main.jpg",
  },
  {
    id: 3,
    name: "3D Digital Microscope",
    model: "UT-360A",
    category: "3D Microscope",
    resolution: "HD",
    price: "Contact Us",
    interface: "USB",
    shutter: "Rolling Shutter",
    fps: "60fps",
    badge: "Hot",
    badgeColor: "bg-red-500",
    rating: 4.9,
    reviews: 215,
    image: "/images/products/ut-360a/main.jpg",
  },
  {
    id: 22,
    name: "Thermal Imaging Camera",
    model: "UT-460TC",
    category: "Thermal Camera",
    resolution: "640x512",
    price: "Contact Us",
    interface: "Network",
    shutter: "Rolling Shutter",
    fps: "25Hz",
    badge: "4K Thermal",
    badgeColor: "bg-orange-500",
    rating: 4.9,
    reviews: 124,
    image: "/images/products/ut-460tc/main.jpg",
  },
  {
    id: 18,
    name: "Smart Vision Camera",
    model: "UT-SmartGo",
    category: "Vision Inspection",
    resolution: "1600 x 1400",
    price: "Contact Us",
    interface: "HDMI/Network",
    shutter: "Global Shutter",
    fps: "60fps",
    badge: "Smart",
    badgeColor: "bg-violet-500",
    rating: 4.9,
    reviews: 312,
    image: "/images/products/ut-smartgo/main.jpg",
  },
  {
    id: 24,
    name: "SEM Microscope",
    model: "UT-3200",
    category: "Specialized Microscope",
    resolution: "Nanometer scale",
    price: "Contact Us",
    interface: "USB",
    shutter: "Rolling Shutter",
    fps: "N/A",
    badge: "Premium",
    badgeColor: "bg-purple-500",
    rating: 4.9,
    reviews: 45,
    image: "/images/products/ut-3200/main.jpg",
  },
  {
    id: 1,
    name: "3D View Electric Microscope",
    model: "UT-2K30/4K30-EP3D_B",
    category: "3D Microscope",
    resolution: "2K/4K",
    price: "Contact Us",
    interface: "HDMI",
    shutter: "Rolling Shutter",
    fps: "30fps",
    badge: "New",
    badgeColor: "bg-green-500",
    rating: 4.8,
    reviews: 128,
    image: "/images/products/ut-2k30-4k30-ep3d-b/main.jpg",
  },
  {
    id: 10,
    name: "AI Image Measuring Instrument",
    model: "UT-AI300CNC",
    category: "Measuring Microscope",
    resolution: "High-definition",
    price: "Contact Us",
    interface: "USB",
    shutter: "Global Shutter",
    fps: "60fps",
    badge: "AI Powered",
    badgeColor: "bg-violet-500",
    rating: 4.9,
    reviews: 68,
    image: "/images/products/ut-ai300cnc/main.jpg",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-600 text-sm mb-3">
              Featured
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Featured Products
            </h2>
          </div>
          <a
            href="/products"
            className="hidden md:block text-blue-600 hover:text-blue-700 text-sm border border-blue-200 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors"
          >
            View All Products →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {featuredProducts.map((p) => (
            <Card
              key={p.id}
              className="group bg-white border-gray-200 hover:border-gray-300 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Product image area */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain p-4 opacity-90 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-300"
                  />
                ) : (
                  <div className="w-full h-full p-8 opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-300">
                    <svg viewBox="0 0 280 200" className="w-full h-full">
                      <rect x="60" y="55" width="160" height="100" rx="12" fill="#e2e8f0" stroke="#3b82f6" strokeWidth="1.5" />
                      <rect x="65" y="60" width="150" height="90" rx="10" fill="#f8fafc" />
                      <circle cx="140" cy="105" r="32" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.8" />
                      <circle cx="140" cy="105" r="20" fill="#f1f5f9" />
                      <circle cx="140" cy="105" r="12" fill="#3b82f6" opacity="0.9" />
                      <circle cx="136" cy="101" r="3" fill="white" opacity="0.6" />
                    </svg>
                  </div>
                )}
                <Badge className={`absolute top-2 left-2 ${p.badgeColor} text-white text-xs px-2 py-0.5`}>
                  {p.badge}
                </Badge>
              </div>

              {/* Info */}
              <CardContent className="p-3">
                <div className="text-gray-500 text-xs mb-0.5">{p.category}</div>
                <h3 className="text-gray-900 font-bold text-sm mb-2 line-clamp-1">{p.name}</h3>

                <div className="grid grid-cols-2 gap-1.5 mb-2">
                  {[
                    ["Resolution", p.resolution],
                    ["Interface", p.interface],
                    ["Shutter", p.shutter],
                    ["Frame Rate", p.fps],
                  ].map(([k, v]) => (
                    <div key={k} className="bg-gray-50 rounded px-2 py-1">
                      <div className="text-gray-400 text-[10px]">{k}</div>
                      <div className="text-gray-700 text-[10px] font-medium">{v}</div>
                    </div>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((idx) => (
                      <Star
                        key={idx}
                        className={`w-2.5 h-2.5 ${
                          idx <= Math.round(p.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-700 text-[10px] font-medium">{p.rating}</span>
                  <span className="text-gray-400 text-[10px]">({p.reviews})</span>
                </div>

                {/* Price & View Details Button */}
                <div className="flex items-center justify-between">
                  <div className="text-blue-600 font-bold text-sm">{p.price}</div>
                  <Link href={`/products/${p.id}`}>
                    <Button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs rounded-lg transition-colors shadow-md shadow-blue-600/30 h-auto">
                      View
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
