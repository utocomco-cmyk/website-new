"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Thermometer,
  Wifi,
  Monitor,
  Check,
  Phone,
  Mail,
  Zap,
} from "lucide-react";

const solutionData = {
  title: "Thermal Imaging Solutions",
  subtitle: "Infrared Temperature Measurement · Wireless Transmission · Industrial Applications",
  desc: "Professional thermal imaging solutions including handheld wireless thermal cameras and online thermal imaging systems for electrical inspection, equipment monitoring, HVAC leak detection, and industrial automation applications",
  stats: [
    { value: "256×192", label: "Thermal Resolution" },
    { value: "±2°C", label: "Temperature Accuracy" },
    { value: "30m", label: "Wireless Range" },
  ],
  scenarios: [
    {
      id: "electrical",
      title: "Electrical Equipment Inspection",
      icon: Zap,
      image: "/images/products/ut-ix2-pro/main.jpg",
      desc: "Detect overheating in electrical panels, circuit breakers, and power distribution systems",
      benefits: [
        "Identify hot spots before failure",
        "Non-contact safe measurement",
        "Prevent electrical fires",
      ],
      products: ["UT-IX2 Pro", "UT-460TC"],
    },
    {
      id: "industrial",
      title: "Industrial Equipment Monitoring",
      icon: Monitor,
      image: "/images/products/ut-460tc/main.jpg",
      desc: "Continuous temperature monitoring for machinery, motors, and production equipment",
      benefits: [
        "24/7 automated monitoring",
        "Early warning of abnormal temperatures",
        "Remote monitoring via network",
      ],
      products: ["UT-460TC", "UT-IX2 Pro"],
    },
    {
      id: "hvac",
      title: "HVAC & Building Inspection",
      icon: Thermometer,
      image: "/images/products/ut-ix2-pro/detail1.jpg",
      desc: "Detect insulation defects, air leaks, and heating/cooling system issues",
      benefits: [
        "Find energy loss points",
        "Detect moisture and insulation issues",
        "Improve building efficiency",
      ],
      products: ["UT-IX2 Pro"],
    },
  ],
  comparison: [
    {
      type: "Handheld Wireless Thermal Camera",
      icon: Wifi,
      image: "/images/products/ut-ix2-pro/main.jpg",
      bestFor: "Mobile inspection, field service, portable applications",
      features: [
        "Wireless connection to smartphone",
        "256×192 thermal resolution",
        "7mm adjustable focus lens",
        "AI voice interaction",
      ],
      products: [
        { name: "UT-IX2 Pro", spec: "Wireless Thermal Camera for Mobile" },
      ],
    },
    {
      type: "Online Thermal Imaging System",
      icon: Monitor,
      image: "/images/products/ut-460tc/main.jpg",
      bestFor: "Fixed installation, continuous monitoring, automation",
      features: [
        "Network-based thermal monitoring",
        "Modbus TCP, ONVIF, GB28181 support",
        "Professional temperature analysis software",
        "SDK for system integration",
      ],
      products: [
        { name: "UT-460TC", spec: "Network Thermal Imager" },
      ],
    },
  ],
  cases: [
    {
      company: "Power Distribution Company",
      industry: "Power & Utilities",
      challenge: "Transformer stations require regular temperature monitoring to prevent failures",
      solution: "Deployed UT-IX2 Pro thermal cameras for routine inspection rounds",
      result: [
        "Identified 15 potential failures early",
        "Reduced unplanned downtime by 80%",
        "Inspection time reduced by 60%",
      ],
    },
    {
      company: "Manufacturing Plant",
      industry: "Industrial Manufacturing",
      challenge: "Motor bearings overheating causing production line stops",
      solution: "Installed UT-460TC online thermal monitoring system",
      result: [
        "Real-time temperature alerts",
        "Zero unexpected motor failures",
        "Maintenance costs reduced by 40%",
      ],
    },
    {
      company: "Property Management",
      industry: "Building Services",
      challenge: "High energy costs due to poor insulation in commercial buildings",
      solution: "UT-IX2 Pro thermal inspection for energy audit",
      result: [
        "Identified major heat loss areas",
        "Energy costs reduced by 25%",
        "Improved tenant comfort",
      ],
    },
  ],
};

export default function ThermalSolutionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/solutions/thermal-hero.png"
            alt="Thermal Imaging Solutions"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 to-orange-50/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-6">
              Industry Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {solutionData.title}
            </h1>
            <p className="text-xl text-orange-600 font-medium mb-4">
              {solutionData.subtitle}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {solutionData.desc}
            </p>
            
            <div className="flex justify-center gap-8 mb-8">
              {solutionData.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-orange-600">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-orange-600 hover:bg-orange-700 h-12 px-8">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thermal Solutions</h2>
            <p className="text-gray-600">Choose the right thermal imaging solution for your needs</p>
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
            <p className="text-gray-600">Covering core thermal imaging applications</p>
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
                          <ScenarioIcon className="w-4 h-4 text-orange-600" />
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
      <section className="py-16 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need customized thermal imaging solutions?
          </h2>
          <p className="text-orange-100 mb-8">
            Our technical team can provide free solution design and product trials based on your temperature monitoring needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-orange-600 hover:bg-gray-100 h-12 px-8">
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
