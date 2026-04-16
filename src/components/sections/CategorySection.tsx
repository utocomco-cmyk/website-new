import { Card, CardContent } from "@/components/ui/card";
import { Box, Gem, Ruler, Microscope, Eye, Thermometer, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "3D Microscopes",
    slug: "3d-microscopes",
    icon: Box,
    image: "/images/categories/01-3d-microscopes.jpg.jpg",
    count: "6",
    desc: "3D Viewing · Depth Measurement · Stereoscopic Imaging",
    color: "from-blue-500 to-blue-700",
    tags: ["3D View", "Depth Field", "Stereo Imaging"],
  },
  {
    id: 2,
    name: "Metallographic Microscopes",
    slug: "metallographic-microscopes",
    icon: Gem,
    image: "/images/categories/02-metallographic.jpg.jpg",
    count: "3",
    desc: "Material Analysis · Metal Inspection · Research Grade",
    color: "from-emerald-500 to-emerald-700",
    tags: ["4K", "DIC", "Polarized Light"],
  },
  {
    id: 3,
    name: "Measuring Microscopes",
    slug: "measuring-microscopes",
    icon: Ruler,
    image: "/images/categories/03-measuring microscope.jpg",
    count: "3",
    desc: "Precision Measurement · Dimensional Analysis · AI Powered",
    color: "from-violet-500 to-violet-700",
    tags: ["Auto Focus", "AI Measurement", "High Precision"],
  },
  {
    id: 4,
    name: "Electronic Microscopes",
    slug: "electronic-microscopes",
    icon: Microscope,
    image: "/images/categories/04-electroic microscopes.jpg",
    count: "4",
    desc: "All-in-One Design · Digital Imaging · Industrial Grade",
    color: "from-cyan-500 to-cyan-700",
    tags: ["HDMI", "USB", "Deep View"],
  },
  {
    id: 5,
    name: "Vision Inspection",
    slug: "vision-inspection",
    icon: Eye,
    image: "/images/categories/05-vision inspection.jpg",
    count: "4",
    desc: "AOI Systems · Smart Cameras · Robot Vision",
    color: "from-orange-500 to-orange-700",
    tags: ["AOI", "Smart Vision", "PCB Inspection"],
  },
  {
    id: 6,
    name: "Thermal Cameras",
    slug: "thermal-cameras",
    icon: Thermometer,
    image: "/images/categories/06-thermal cameras.jpg",
    count: "2",
    desc: "Infrared Imaging · Temperature Measurement · Industrial",
    color: "from-red-500 to-red-700",
    tags: ["Wireless", "640×512", "-20℃~650℃"],
  },
  {
    id: 7,
    name: "Specialized Microscopes",
    slug: "specialized-microscopes",
    icon: Sparkles,
    image: "/images/categories/07-specialized microscopes.jpg",
    count: "2",
    desc: "SEM · Advanced Optics · Research Applications",
    color: "from-purple-500 to-purple-700",
    tags: ["SEM", "Nanometer", "Premium"],
  },
];

export function CategorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-sm mb-4">
            Products
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Full Range of Microscopy Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive microscopy and inspection solutions from 3D digital microscopes to advanced SEM systems, meeting various industrial and research needs
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link key={cat.id} href={`/products?category=${cat.slug}`}>
              <Card
                className="group relative bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden cursor-pointer h-full"
              >
                {/* Product Image */}
                <div className="relative w-full overflow-hidden bg-gray-50">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Icon badge */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  
                  {/* Product count badge */}
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-blue-600 text-white text-xs font-medium">
                    {cat.count} Products
                  </div>
                </div>

                <CardContent className="relative z-10 p-5">
                  <h3 className="text-gray-900 font-bold text-lg mb-2">{cat.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{cat.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs bg-blue-50 text-blue-600 border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-gray-400 text-sm">View All</span>
                    <span className="text-blue-600 text-sm group-hover:translate-x-1 transition-transform inline-block">
                      →
                    </span>
                  </div>
                </CardContent>
              </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
