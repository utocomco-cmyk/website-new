import { Card, CardContent } from "@/components/ui/card";
import { Monitor, MonitorPlay, Microscope, Eye, MicroscopeIcon, Brain } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "HDMI Cameras",
    icon: Monitor,
    count: "9",
    desc: "HD Video Output · Plug & Play · Multi-Resolution",
    color: "from-blue-500 to-blue-700",
    tags: ["1080P", "2K", "4K"],
  },
  {
    id: 2,
    name: "VGA Cameras",
    icon: MonitorPlay,
    count: "1",
    desc: "Legacy Interface Compatible · Stable & Reliable · Industrial Grade",
    color: "from-teal-500 to-teal-700",
    tags: ["VGA Interface", "1280x1024", "High Compatibility"],
  },
  {
    id: 3,
    name: "Digital Microscopes",
    icon: Microscope,
    count: "1",
    desc: "Digital Microscopy · High Magnification · Precision Imaging",
    color: "from-violet-500 to-violet-700",
    tags: ["4K HD", "Digital Zoom", "Research Grade"],
  },
  {
    id: 4,
    name: "Vision Inspection",
    icon: Eye,
    count: "1",
    desc: "Industrial Smart Inspection · Auto Recognition · Precision Measurement",
    color: "from-orange-500 to-orange-700",
    tags: ["AI Detection", "Automation", "High Precision"],
  },
  {
    id: 5,
    name: "Microscope Cameras",
    icon: MicroscopeIcon,
    count: "9",
    desc: "Professional Microscopy · Biomedical · Material Analysis",
    color: "from-red-500 to-red-700",
    tags: ["Biological", "Metallurgical", "Medical Grade"],
  },
  {
    id: 6,
    name: "Smart Cameras",
    icon: Brain,
    count: "8",
    desc: "Built-in AI Processing · Edge Computing · All-in-One Design",
    color: "from-slate-500 to-slate-700",
    tags: ["Deep Learning", "Edge Inference", "PC-Free"],
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
            Full Range of Industrial Cameras
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Covering all machine vision applications, from HDMI HD to Smart AI cameras, meeting various industrial inspection needs
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
