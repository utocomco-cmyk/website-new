"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Brain,
  Eye,
  Zap,
  Check,
  Phone,
  Mail,
  Target,
} from "lucide-react";

const solutionData = {
  title: "AI Intelligent Vision Inspection Solutions",
  subtitle: "Built-in deep learning algorithms, embedded vision inspection without PC",
  desc: "For intelligent inspection needs in industrial automation production lines, providing smart cameras with built-in AI algorithms, supporting defect detection, positioning recognition, and dimension measurement, no external computer needed, plug and play",
  stats: [
    { value: "<50ms", label: "Inspection Speed" },
    { value: "99.5%", label: "Inspection Accuracy" },
    { value: "PC-Free", label: "Embedded Solution" },
  ],
  scenarios: [
    {
      id: "defect",
      title: "Defect Detection",
      icon: Eye,
      image: "/images/solutions/vision-defect-detection.png",
      desc: "Automatically identify scratches, stains, cracks and other defects on product surfaces",
      benefits: [
        "Deep learning algorithms, adaptive to various defects",
        "No programming needed, sample training ready to use",
        "Real-time alarm, automatic sorting",
      ],
      products: ["UT-SmartGo", "UT-A100", "UT-9218/9118"],
    },
    {
      id: "positioning",
      title: "Positioning Recognition",
      icon: Target,
      image: "/images/scenarios/robot-vision.jpg",
      desc: "Precisely locate part positions to guide robotic assembly",
      benefits: [
        "Positioning accuracy ±0.05mm",
        "Support rotation, scaling, occlusion",
        "Multi-target simultaneous recognition",
      ],
      products: ["UT-Smart-2000M", "UT-SmartGo", "UT-600II"],
    },
    {
      id: "measurement",
      title: "Dimension Measurement",
      icon: Zap,
      image: "/images/scenarios/welding-automation.jpg",
      desc: "High-precision measurement of product dimensions, spacing, and angles",
      benefits: [
        "Sub-pixel measurement accuracy",
        "Automatic calibration compensation",
        "Data recording and traceability",
      ],
      products: ["UT-3500AF", "UT-600II_A", "UT-50MINI"],
    },
  ],
  comparison: [
    {
      type: "Smart Vision Camera",
      icon: Brain,
      image: "/images/products/ut-smartgo/main.jpg",
      bestFor: "Appearance inspection, color recognition, complex scenes",
      features: [
        "Color imaging, support color analysis",
        "Deep learning defect detection",
        "HDMI output, visual debugging",
        "Network interface, remote monitoring",
      ],
      products: [
        { name: "UT-SmartGo", spec: "1600×1400, Smart Vision" },
        { name: "UT-9218/9118", spec: "1920×1080, PCB Inspection" },
        { name: "UT-600II", spec: "All-in-One Vision System" },
      ],
    },
    {
      type: "AOI Inspection System",
      icon: Eye,
      image: "/images/products/ut-a100/main.jpg",
      bestFor: "Automated inspection, batch testing, production lines",
      features: [
        "One-button automatic measurement",
        "High-speed batch inspection",
        "Multi-industry application",
        "Compact mini size",
      ],
      products: [
        { name: "UT-A100", spec: "One-button MINI AOI" },
        { name: "UT-3500AF", spec: "Auto Focus Measurement" },
        { name: "UT-600II_A", spec: "Digital Measuring Microscope" },
      ],
    },
  ],
  cases: [
    {
      company: "Mobile Phone Component Supplier",
      industry: "Consumer Electronics",
      challenge: "Metal casing appearance defect detection, many defect types, traditional algorithms difficult to cover",
      solution: "Deploy 10 UT-SmartGo cameras with deep learning defect detection",
      result: [
        "Detection accuracy 99.7%",
        "Detection speed 120 pieces/minute",
        "Saved 12 quality inspection personnel",
      ],
    },
    {
      company: "Automotive Parts Factory",
      industry: "Automotive Manufacturing",
      challenge: "Engine part assembly positioning, high precision requirements, fast production line cycle",
      solution: "Robot Vision Camera + Robotic Guidance System",
      result: [
        "Positioning accuracy ±0.03mm",
        "Assembly cycle improved to 8 seconds/piece",
        "Zero assembly errors",
      ],
    },
    {
      company: "Precision Hardware Enterprise",
      industry: "Precision Manufacturing",
      challenge: "Small part dimension measurement, manual measurement low efficiency and large errors",
      solution: "UT-3500AF Auto Focus + Measurement Software",
      result: [
        "Measurement accuracy ±0.01mm",
        "Measurement efficiency improved 10x",
        "CPK value > 1.67",
      ],
    },
  ],
};

export default function VisionSolutionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/solutions/vision-hero.png"
            alt="AI Vision Solutions"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 to-green-50/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-green-100 text-green-700 border-green-200 mb-6">
              Industry Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {solutionData.title}
            </h1>
            <p className="text-xl text-green-600 font-medium mb-4">
              {solutionData.subtitle}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {solutionData.desc}
            </p>
            
            <div className="flex justify-center gap-8 mb-8">
              {solutionData.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-green-600">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-green-600 hover:bg-green-700 h-12 px-8">
                <Phone className="w-5 h-5 mr-2" />
                Get Solution Quote
              </Button>
              <Button variant="outline" className="h-12 px-8 bg-white/80">
                <Mail className="w-5 h-5 mr-2" />
                Technical Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Comparison + Scenarios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Inspection Solutions</h2>
            <p className="text-gray-600">Choose the right solution for your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {solutionData.comparison.map((item, idx) => (
                <Card key={idx} className="border-gray-200 shadow-sm overflow-hidden">
                  {/* Product Image */}
                  <div className="relative h-56 w-full bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.type}
                      fill
                      className="object-contain p-4"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pt-12 pb-4 px-4">
                      <h3 className="text-xl font-bold text-white">{item.type}</h3>
                      <p className="text-white/80 text-sm">{item.bestFor}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-3 mb-6">
                      {item.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-center gap-2 text-gray-700">
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-100 pt-6">
                      <h4 className="text-sm font-semibold text-gray-500 mb-3">Recommended Products</h4>
                      <div className="space-y-2">
                        {item.products.map((product, pidx) => (
                          <div
                            key={pidx}
                            className="flex items-center justify-between text-sm"
                          >
                            <span className="text-gray-900 font-medium">{product.name}</span>
                            <span className="text-gray-500">{product.spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>

          {/* Application Scenarios */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Scenarios</h3>
            <p className="text-gray-600">Covering core industrial vision inspection needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutionData.scenarios.map((scenario) => {
              const ScenarioIcon = scenario.icon;
              return (
                <Card key={scenario.id} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  {/* Scenario Image */}
                  <div className="relative h-40 w-full">
                    <Image
                      src={scenario.image}
                      alt={scenario.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-white/90 flex items-center justify-center">
                          <ScenarioIcon className="w-4 h-4 text-green-600" />
                        </div>
                        <h4 className="text-lg font-bold text-white">{scenario.title}</h4>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 text-sm mb-4">{scenario.desc}</p>
                    
                    <div className="space-y-2 mb-4">
                      {scenario.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <Check className="w-3 h-3 text-green-500" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <div className="text-xs text-gray-500 mb-2">Recommended Products</div>
                      <div className="flex flex-wrap gap-2">
                        {scenario.products.slice(0, 2).map((product, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {product}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Customer Cases</h2>
            <p className="text-gray-600">Real application results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutionData.cases.map((caseItem, idx) => (
              <Card key={idx} className="border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary">{caseItem.industry}</Badge>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {caseItem.company}
                  </h3>
                  
                  <div className="space-y-4 mt-4">
                    <div className="bg-red-50 rounded-lg p-3">
                      <div className="text-red-600 text-xs mb-1">Challenge</div>
                      <div className="text-red-700 text-sm">{caseItem.challenge}</div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-blue-600 text-xs mb-1">Solution</div>
                      <div className="text-blue-700 text-sm">{caseItem.solution}</div>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="text-green-600 text-xs mb-1">Results</div>
                      <ul className="space-y-1">
                        {caseItem.result.map((res, ridx) => (
                          <li key={ridx} className="text-green-700 text-sm flex items-center gap-1">
                            <Check className="w-3 h-3" />
                            {res}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need customized AI vision solutions?
          </h2>
          <p className="text-green-100 mb-8">
            Our technical team can provide free solution design and algorithm training based on your inspection needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-green-600 hover:bg-gray-100 h-12 px-8">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Technical Demo
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 h-12 px-8"
            >
              <Mail className="w-5 h-5 mr-2" />
              Online Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
