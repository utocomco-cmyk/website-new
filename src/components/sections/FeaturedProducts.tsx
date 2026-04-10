import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const featuredProducts = [
  {
    id: 20,
    name: "Smart Vision Inspection Camera",
    model: "SmartGO-570CPLC",
    category: "Smart Camera",
    resolution: "1600 x 1400",
    price: "Contact Us",
    interface: "HDMI",
    shutter: "Global Shutter",
    fps: "Color",
    badge: "Hot",
    badgeColor: "bg-red-500",
    rating: 4.9,
    reviews: 328,
    image: "/images/products/smartgo-570cplc.jpg",
  },
  {
    id: 59,
    name: "Smart-4k-80 HD Microscope Camera",
    model: "Smart-4k-80",
    category: "Digital Microscope",
    resolution: "3840 X 2160",
    price: "Contact Us",
    interface: "HDMI",
    shutter: "Global Shutter",
    fps: "4K",
    badge: "4K",
    badgeColor: "bg-blue-500",
    rating: 4.8,
    reviews: 156,
    image: "/images/products/smart-4k-80.jpg",
  },
  {
    id: 19,
    name: "6MP Smart Inspection Camera",
    model: "SmartGO-178CPLC",
    category: "Smart Camera",
    resolution: "3072 x 1728",
    price: "Contact Us",
    interface: "HDMI",
    shutter: "Global Shutter",
    fps: "6MP",
    badge: "Smart",
    badgeColor: "bg-violet-500",
    rating: 4.9,
    reviews: 412,
    image: "/images/products/smartgo-178cplc.png",
  },
  {
    id: 17,
    name: "2K Ultra HD Camera",
    model: "Smart-2K",
    category: "HDMI Camera",
    resolution: "2560 X 1440",
    price: "Contact Us",
    interface: "HDMI",
    shutter: "Global Shutter",
    fps: "2K",
    badge: "2K",
    badgeColor: "bg-teal-500",
    rating: 4.7,
    reviews: 89,
    image: "/images/products/smart-2k.png",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-600 text-sm mb-4">
              Featured
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Featured Products
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block text-blue-600 hover:text-blue-700 text-sm border border-blue-200 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
          >
            View All Products →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {featuredProducts.map((p) => (
            <Card
              key={p.id}
              className="group bg-white border-gray-200 hover:border-gray-300 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Product image area - 800x800 aspect ratio */}
              <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
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
                <Badge className={`absolute top-3 left-3 ${p.badgeColor} text-white`}>
                  {p.badge}
                </Badge>
              </div>

              {/* Info */}
              <CardContent className="p-5">
                <div className="text-gray-500 text-xs mb-1">{p.category}</div>
                <h3 className="text-gray-900 font-bold text-lg mb-3">{p.name}</h3>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[
                    ["Resolution", p.resolution],
                    ["Interface", p.interface],
                    ["Shutter", p.shutter],
                    ["Frame Rate", p.fps],
                  ].map(([k, v]) => (
                    <div key={k} className="bg-gray-50 rounded-lg px-2.5 py-1.5">
                      <div className="text-gray-400 text-xs">{k}</div>
                      <div className="text-gray-700 text-xs font-medium mt-0.5">{v}</div>
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
                          idx <= Math.round(p.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-700 text-xs font-medium">{p.rating}</span>
                  <span className="text-gray-400 text-xs">({p.reviews} reviews)</span>
                </div>

                {/* Price & View Details Button */}
                <div className="flex items-center justify-between">
                  <div className="text-blue-600 font-bold text-xl">{p.price}</div>
                  <Link href={`/products/${p.id}`}>
                    <Button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-xl transition-colors shadow-lg shadow-blue-600/30">
                      View Details
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
