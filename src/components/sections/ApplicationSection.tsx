import { Card } from "@/components/ui/card";
import { Cpu, Battery, Car, Pill, Package, Palette } from "lucide-react";

const applications = [
  {
    id: 1,
    title: "Semiconductor",
    icon: Cpu,
    desc: "Wafer defect detection, chip packaging inspection, PCB surface inspection with sub-micron precision",
    color: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    cases: ["Wafer Defect", "Chip Packaging", "PCB Inspection"],
  },
  {
    id: 2,
    title: "Battery Manufacturing",
    icon: Battery,
    desc: "Electrode coating inspection, cell assembly guidance, module appearance defect detection",
    color: "from-green-50 to-green-100",
    border: "border-green-200",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    cases: ["Coating Inspection", "Cell Assembly", "Module Check"],
  },
  {
    id: 3,
    title: "Automotive",
    icon: Car,
    desc: "Body weld inspection, component dimension measurement, assembly line vision guidance",
    color: "from-orange-50 to-orange-100",
    border: "border-orange-200",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    cases: ["Weld Inspection", "Measurement", "Assembly Guide"],
  },
  {
    id: 4,
    title: "Food & Pharma",
    icon: Pill,
    desc: "Package integrity inspection, barcode/label recognition, foreign object detection",
    color: "from-pink-50 to-pink-100",
    border: "border-pink-200",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    cases: ["Package Check", "Barcode Scan", "Foreign Object"],
  },
  {
    id: 5,
    title: "Logistics",
    icon: Package,
    desc: "High-speed barcode reading, package dimension measurement, sorting robot guidance",
    color: "from-yellow-50 to-yellow-100",
    border: "border-yellow-200",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    cases: ["Barcode Read", "Dimension", "Robot Guide"],
  },
  {
    id: 6,
    title: "Printing & Textile",
    icon: Palette,
    desc: "Print quality inspection, color deviation analysis, fabric defect detection",
    color: "from-purple-50 to-purple-100",
    border: "border-purple-200",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    cases: ["Print Check", "Color Analysis", "Defect Detection"],
  },
];

export function ApplicationSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-600 text-sm mb-4">
            Industries
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Solutions for Every Industry
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            20 years in machine vision, serving 50,000+ enterprise clients worldwide with customized vision solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {applications.map((app) => {
            const Icon = app.icon;
            return (
              <Card
                key={app.id}
                className={`group relative rounded-2xl border ${app.border} bg-gradient-to-br ${app.color} p-6 cursor-pointer hover:scale-[1.02] transition-all duration-300 hover:shadow-lg`}
              >
                <div className={`w-12 h-12 rounded-xl ${app.iconBg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${app.iconColor}`} />
                </div>
                <h3 className="text-gray-900 font-bold text-xl mb-2">{app.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{app.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {app.cases.map((c) => (
                    <span
                      key={c}
                      className="px-2 py-1 rounded-lg text-xs bg-white/80 text-gray-600 border border-gray-200"
                    >
                      ✓ {c}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">View Solution</span>
                  <span className="text-gray-900 group-hover:translate-x-1 transition-transform inline-block">
                    →
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
