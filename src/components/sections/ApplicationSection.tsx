"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useTranslation } from "@/components/LanguageSwitcher";

export function ApplicationSection() {
  const { t } = useTranslation();

  const applications = [
    {
      id: 1,
      title: t.semiconductor || "Semiconductor",
      image: "/images/industries/01-semiconductor.jpg",
      desc: "Wafer defect detection, chip packaging inspection, PCB surface inspection with sub-micron precision",
      cases: ["Wafer Defect", "Chip Packaging", "PCB Inspection"],
    },
    {
      id: 2,
      title: t.newEnergy || "Battery Manufacturing",
      image: "/images/industries/02-battery.jpg",
      desc: "Electrode coating inspection, cell assembly guidance, module appearance defect detection",
      cases: ["Coating Inspection", "Cell Assembly", "Module Check"],
    },
    {
      id: 3,
      title: t.automotive || "Automotive",
      image: "/images/industries/03-automotive.jpg",
      desc: "Body weld inspection, component dimension measurement, assembly line vision guidance",
      cases: ["Weld Inspection", "Measurement", "Assembly Guide"],
    },
    {
      id: 4,
      title: t.foodPharma || "Food & Pharma",
      image: "/images/industries/04-foodpharma.jpg",
      desc: "Package integrity inspection, barcode/label recognition, foreign object detection",
      cases: ["Package Check", "Barcode Scan", "Foreign Object"],
    },
    {
      id: 5,
      title: t.logistics || "Logistics",
      image: "/images/industries/05-logistics.jpg",
      desc: "High-speed barcode reading, package dimension measurement, sorting robot guidance",
      cases: ["Barcode Read", "Dimension", "Robot Guide"],
    },
    {
      id: 6,
      title: t.printing || "Printing & Textile",
      image: "/images/industries/06-printing.jpg",
      desc: "Print quality inspection, color deviation analysis, fabric defect detection",
      cases: ["Print Check", "Color Analysis", "Defect Detection"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-600 text-sm mb-4">
            {t.solutions || "Industries"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.industrySolutions || "Solutions for Every Industry"}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t.solutionsDesc || "20 years in machine vision, serving 50,000+ enterprise clients worldwide with customized vision solutions"}
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

              {/* Content */}
              <div className="p-5">
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {app.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {app.cases.map((caseItem) => (
                    <span
                      key={caseItem}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      {caseItem}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
