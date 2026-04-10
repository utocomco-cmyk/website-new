"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Monitor,
  Microscope,
  Brain,
  Check,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    id: "electronics",
    icon: Monitor,
    title: "Electronics Production Line Inspection",
    subtitle: "HDMI HD Output + Smart AI Detection",
    desc: "For HD real-time inspection needs of electronic manufacturing production lines, providing plug-and-play HDMI cameras and smart cameras with built-in AI algorithms",
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/30",
    features: [
      "Plug and play, no computer needed",
      "1080P~4K HD output",
      "AI automatic defect detection",
      "USB storage support",
    ],
    products: ["SmartGO-570CPLC", "Smart-2K", "Smart-4k-80", "Smart-3000"],
    href: "/solutions/electronics",
  },
  {
    id: "microscope",
    icon: Microscope,
    title: "Microscope Vision Solution",
    subtitle: "4K HD Imaging, Digital Microscopy",
    desc: "For microscopic observation needs in biomedical, material analysis, and industrial inspection fields, providing 4K HD microscope cameras",
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/30",
    features: [
      "4K/1080P HD imaging",
      "HDMI real-time display",
      "Image/video recording support",
      "C-mount compatible with various microscopes",
    ],
    products: ["Smart-4k-80", "Smart-6500", "Smart-6000", "HS-3500M"],
    href: "/solutions/microscope",
  },
  {
    id: "vision",
    icon: Brain,
    title: "AI Smart Vision Solution",
    subtitle: "Built-in Deep Learning, No PC Required",
    desc: "For intelligent detection needs of industrial automation production lines, providing smart cameras with built-in AI algorithms, supporting defect detection and positioning recognition",
    color: "from-green-500/20 to-green-600/5",
    border: "border-green-500/30",
    features: [
      "Built-in AI algorithm",
      "No external computer needed",
      "Detection speed <50ms",
      "Accuracy 99.5%",
    ],
    products: ["SmartGO-570CPLC", "SmartGO-178CPLC", "SmartGO-560M"],
    href: "/solutions/vision",
  },
];

export function SolutionsContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-6">
            Solutions
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Industrial Vision Solutions
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Complete vision solutions based on HDMI HD cameras, microscope cameras, and smart cameras,
            covering electronic production line inspection, microscopic observation, AI intelligent detection and more
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Solution</h2>
            <p className="text-gray-600">Select the right vision solution based on your application scenario</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Card
                  key={solution.id}
                  className={`bg-gradient-to-br ${solution.color} ${solution.border} border overflow-hidden hover:shadow-lg transition-shadow`}
                >
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-white/80 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-gray-700" />
                    </div>

                    <div className="text-blue-600 text-sm font-medium mb-2">
                      {solution.subtitle}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{solution.desc}</p>

                    <div className="space-y-2 mb-6">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700">
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-200/50 pt-6 mb-6">
                      <div className="text-xs text-gray-500 mb-2">Recommended Products</div>
                      <div className="flex flex-wrap gap-2">
                        {solution.products.map((product, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-white/60">
                            {product}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Link href={solution.href}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        View Solution Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure Which Solution to Choose?
          </h2>
          <p className="text-blue-100 mb-8">
            Our technical team can provide free solution consultation and product trial based on your specific needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 h-12 px-8">
              <Phone className="w-5 h-5 mr-2" />
              Technical Consult
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 h-12 px-8"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
