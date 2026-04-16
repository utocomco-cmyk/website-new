import { Card } from "@/components/ui/card";
import Image from "next/image";

const applications = [
  {
    id: 1,
    title: "Semiconductor",
    image: "/images/industries/01-semiconductor.jpg",
    desc: "Wafer defect detection, chip packaging inspection, PCB surface inspection with sub-micron precision",
    cases: ["Wafer Defect", "Chip Packaging", "PCB Inspection"],
  },
  {
    id: 2,
    title: "Battery Manufacturing",
    image: "/images/industries/02-battery.jpg",
    desc: "Electrode coating inspection, cell assembly guidance, module appearance defect detection",
    cases: ["Coating Inspection", "Cell Assembly", "Module Check"],
  },
  {
    id: 3,
    title: "Automotive",
    image: "/images/industries/03-automotive.jpg",
    desc: "Body weld inspection, component dimension measurement, assembly line vision guidance",
    cases: ["Weld Inspection", "Measurement", "Assembly Guide"],
  },
  {
    id: 4,
    title: "Food & Pharma",
    image: "/images/industries/04-foodpharma.jpg",
    desc: "Package integrity inspection, barcode/label recognition, foreign object detection",
    cases: ["Package Check", "Barcode Scan", "Foreign Object"],
  },
  {
    id: 5,
    title: "Logistics",
    image: "/images/industries/05-logistics.jpg",
    desc: "High-speed barcode reading, package dimension measurement, sorting robot guidance",
    cases: ["Barcode Read", "Dimension", "Robot Guide"],
  },
  {
    id: 6,
    title: "Printing & Textile",
    image: "/images/industries/06-printing.jpg",
    desc: "Print quality inspection, color deviation analysis, fabric defect detection",
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
          {applications.map((app) => (
            <Card
              key={app.id}
              className="group relative rounded-2xl border border-gray-200 overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-300 hover:shadow-lg"
            >
              {/* Background Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl">
                  {app.title}
                </h3>
              </div>

              <div className="p-5">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{app.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {app.cases.map((c) => (
                    <span
                      key={c}
                      className="px-2 py-1 rounded-lg text-xs bg-violet-50 text-violet-600 border border-violet-200"
                    >
                      ✓ {c}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="text-gray-500 text-sm">View Solution</span>
                  <span className="text-violet-600 group-hover:translate-x-1 transition-transform inline-block">
                    →
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
