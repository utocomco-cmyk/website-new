import { Card, CardContent } from "@/components/ui/card";
import { Box, Gem, Ruler, Microscope, Eye, Thermometer, Sparkles } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "3D Microscopes",
    icon: Box,
    count: "6",
    desc: "3D Viewing · Depth Measurement · Stereoscopic Imaging",
    color: "from-blue-500 to-blue-700",
    tags: ["3D View", "Depth Field", "Stereo Imaging"],
  },
  {
    id: 2,
    name: "Metallographic Microscopes",
    icon: Gem,
    count: "3",
    desc: "Material Analysis · Metal Inspection · Research Grade",
    color: "from-emerald-500 to-emerald-700",
    tags: ["4K", "DIC", "Polarized Light"],
  },
  {
    id: 3,
    name: "Measuring Microscopes",
    icon: Ruler,
    count: "3",
    desc: "Precision Measurement · Dimensional Analysis · AI Powered",
    color: "from-violet-500 to-violet-700",
    tags: ["Auto Focus", "AI Measurement", "High Precision"],
  },
  {
    id: 4,
    name: "Electronic Microscopes",
    icon: Microscope,
    count: "4",
    desc: "All-in-One Design · Digital Imaging · Industrial Grade",
    color: "from-cyan-500 to-cyan-700",
    tags: ["HDMI", "USB", "Deep View"],
  },
  {
    id: 5,
    name: "Vision Inspection",
    icon: Eye,
    count: "4",
    desc: "AOI Systems · Smart Cameras · Robot Vision",
    color: "from-orange-500 to-orange-700",
    tags: ["AOI", "Smart Vision", "PCB Inspection"],
  },
  {
    id: 6,
    name: "Thermal Cameras",
    icon: Thermometer,
    count: "2",
    desc: "Infrared Imaging · Temperature Measurement · Industrial",
    color: "from-red-500 to-red-700",
    tags: ["Wireless", "640×512", "-20℃~650℃"],
  },
  {
    id: 7,
    name: "Specialized Microscopes",
    icon: Sparkles,
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Card
                key={cat.id}
                className="group relative bg-white border-gray-200 hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden cursor-pointer"
              >
                {/* Gradient accent */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <CardContent className="relative z-10 p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>

                  <h3 className="text-gray-900 font-bold text-lg mb-1">{cat.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{cat.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600 border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{cat.count} Products</span>
                    <span className="text-blue-600 text-sm group-hover:translate-x-1 transition-transform inline-block">
                      View All →
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
