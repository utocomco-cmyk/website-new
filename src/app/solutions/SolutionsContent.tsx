"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Microscope,
  Brain,
  Check,
  ArrowRight,
  Phone,
  Mail,
  Flame,
  Cpu,
} from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    id: "microscope",
    icon: Microscope,
    image: "/images/solutions/microscope-lab.png",
    title: "Microscope Vision Solutions",
    subtitle: "3D Imaging · 4K HD · Digital Microscopy",
    desc: "Comprehensive microscopy solutions including 3D digital microscopes, metallographic microscopes, and electronic microscopes for semiconductor, PCB, material analysis, and research applications",
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/30",
    features: [
      "3D stereoscopic imaging",
      "4K/1080P HD resolution",
      "Metallographic analysis",
      "C-mount compatible",
    ],
    products: ["UT-800+P3D", "UT-MT4K80", "UT-360A", "UT-600II"],
    href: "/solutions/microscope",
  },
  {
    id: "electronics",
    icon: Cpu,
    image: "/images/solutions/electronics-smt.png",
    title: "Electronics Inspection Solutions",
    subtitle: "PCB Inspection · SMT Lines · Assembly Verification",
    desc: "Comprehensive inspection solutions for electronics manufacturing including PCB solder joint inspection, component assembly verification, and automated optical inspection for SMT production lines",
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/30",
    features: [
      "PCB defect detection",
      "Component placement verification",
      "SMT line integration",
      "Real-time quality control",
    ],
    products: ["UT-9218/9118", "UT-SmartGo", "UT-A100"],
    href: "/solutions/electronics",
  },
  {
    id: "vision",
    icon: Brain,
    image: "/images/solutions/vision-hero.png",
    title: "AI Vision Inspection Solutions",
    subtitle: "AOI Systems · Smart Cameras · Automated Detection",
    desc: "AI-powered vision inspection systems for automated defect detection, measurement, and quality control in manufacturing and electronics production",
    color: "from-green-500/20 to-green-600/5",
    border: "border-green-500/30",
    features: [
      "AI defect detection",
      "Automated measurement",
      "AOI inspection systems",
      "High-speed processing",
    ],
    products: ["UT-SmartGo", "UT-A100", "UT-AI300CNC"],
    href: "/solutions/vision",
  },
  {
    id: "thermal",
    icon: Flame,
    image: "/images/solutions/thermal-hero.png",
    title: "Thermal Imaging Solutions",
    subtitle: "Infrared Cameras · Temperature Measurement · Industrial",
    desc: "Professional thermal imaging solutions including handheld wireless thermal cameras and online thermal imaging systems for electrical inspection, equipment monitoring, and industrial applications",
    color: "from-orange-500/20 to-orange-600/5",
    border: "border-orange-500/30",
    features: [
      "Wireless thermal imaging",
      "Real-time temperature monitoring",
      "AI super-resolution",
      "Multi-platform support",
    ],
    products: ["UT-IX2 Pro", "UT-460TC"],
    href: "/solutions/thermal",
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
            Microscopy & Vision Solutions
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Professional microscopy and vision inspection solutions including 3D digital microscopes, 
            metallographic microscopes, thermal cameras, and AI-powered vision systems for semiconductor, 
            PCB inspection, material analysis, and industrial applications
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Card
                  key={solution.id}
                  className={`bg-gradient-to-br ${solution.color} ${solution.border} border overflow-hidden hover:shadow-lg transition-shadow`}
                >
                  {/* Solution Image */}
                  <div className="relative h-40 w-full">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-white/90 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-gray-700" />
                        </div>
                        <div className="text-white text-xs font-medium">
                          {solution.subtitle}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6">{solution.desc}</p>

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
