"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Microscope,
  Eye,
  Check,
  Phone,
  Mail,
  Monitor,
} from "lucide-react";

const solutionData = {
  title: "Microscope Visual Inspection Solutions",
  subtitle: "4K HD Imaging, Digital Microscopy Solutions",
  desc: "For microscopy needs in biomedical, material analysis, and industrial inspection, providing 4K HD microscope cameras and digital microscopes with real-time display, image acquisition, and measurement analysis",
  stats: [
    { value: "4K/1080P", label: "Output Resolution" },
    { value: "60fps", label: "Real-time Frame Rate" },
    { value: "HDMI/USB", label: "Output Interface" },
  ],
  scenarios: [
    {
      id: "biological",
      title: "Biological Microscopy",
      icon: Microscope,
      image: "/images/solutions/microscope-bio.png",
      desc: "Microscopic observation and recording of cells, tissues, and microorganisms",
      benefits: [
        "4K HD imaging with clear details",
        "Real-time display without delay",
        "Support image/video recording",
      ],
      products: ["UT-MT4K80", "UT-600II", "UT-8008_A"],
    },
    {
      id: "material",
      title: "Material Metallographic Analysis",
      icon: Eye,
      image: "/images/solutions/product-metallographic.png",
      desc: "Metallographic microscopy analysis of metal materials, semiconductors, and minerals",
      benefits: [
        "High contrast imaging with clear grains",
        "Support polarized light, dark field modes",
        "Measurement analysis functions",
      ],
      products: ["UT-MT4K80", "UT-MT60_B", "UT-50MINI"],
    },
    {
      id: "industrial",
      title: "Industrial Microscopic Inspection",
      icon: Monitor,
      image: "/images/solutions/product-3d.png",
      desc: "Microscopic inspection of precision parts, PCBs, and solder joints",
      benefits: [
        "Large depth of field imaging",
        "HDMI direct display for easy operation",
        "Support multi-person observation",
      ],
      products: ["UT-360A", "UT-600", "UT-9218/9118"],
    },
  ],
  comparison: [
    {
      type: "4K HD Metallographic Microscope",
      icon: Microscope,
      image: "/images/solutions/product-metallographic.png",
      bestFor: "Scientific research, medical diagnosis, precision inspection",
      features: [
        "3840×2160 true 4K resolution",
        "HDMI HD output, zero delay",
        "Support mouse operation, U-disk storage",
        "C interface, compatible with various microscopes",
      ],
      products: [
        { name: "UT-MT4K80", spec: "4K Digital Metallographic Microscope" },
        { name: "UT-MT60_B", spec: "Multi-mode Metallographic Microscope" },
        { name: "UT-50MINI", spec: "Desktop Measuring Microscope" },
      ],
    },
    {
      type: "3D Digital Microscope",
      icon: Eye,
      image: "/images/solutions/product-ut360a.png",
      bestFor: "Portable inspection, on-site observation, teaching demonstration",
      features: [
        "Integrated design, no external microscope needed",
        "Built-in light source, plug and play",
        "Support photo and video recording",
        "Lightweight and portable, flexible deployment",
      ],
      products: [
        { name: "UT-360A", spec: "3D Digital Microscope" },
        { name: "UT-800+P3D", spec: "3D Microscope System with Screen" },
        { name: "UT-3D9000", spec: "3D Depth Digital Microscope" },
      ],
    },
  ],
  cases: [
    {
      company: "Tertiary Hospital Pathology Department",
      industry: "Medical Diagnosis",
      challenge: "Pathological slide observation requires multi-person consultation, traditional microscopes difficult to share",
      solution: "Deploy UT-MT4K80 4K Metallographic Microscope, connected to large screen display",
      result: [
        "Achieve multi-person simultaneous observation",
        "Diagnosis efficiency improved by 50%",
        "Support remote consultation",
      ],
    },
    {
      company: "University Materials Science College",
      industry: "Scientific Research Education",
      challenge: "Metallographic experiment teaching, students taking turns to observe with low efficiency",
      solution: "UT-MT4K80 Microscope + Projector for real-time screen casting",
      result: [
        "Whole class synchronized observation, teaching efficiency improved",
        "Support image acquisition for more professional experiment reports",
        "Student satisfaction increased by 90%",
      ],
    },
    {
      company: "Semiconductor Inspection Enterprise",
      industry: "Industrial Inspection",
      challenge: "Chip surface defect detection requires HD imaging and data recording",
      solution: "UT-360A 3D Microscope + Measurement Software",
      result: [
        "Defect recognition rate increased to 99.5%",
        "Detection data automatically saved and traceable",
        "Passed ISO quality system certification",
      ],
    },
  ],
};

export default function MicroscopeSolutionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/solutions/microscope-lab.png"
            alt="Microscope Solutions"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 to-purple-50/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-6">
              Industry Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {solutionData.title}
            </h1>
            <p className="text-xl text-purple-600 font-medium mb-4">
              {solutionData.subtitle}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {solutionData.desc}
            </p>
            
            <div className="flex justify-center gap-8 mb-8">
              {solutionData.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-purple-600">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700 h-12 px-8">
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
            <p className="text-gray-600">Covering core microscopy application fields</p>
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
                          <ScenarioIcon className="w-4 h-4 text-purple-600" />
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
      <section className="py-16 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need customized microscopy solutions?
          </h2>
          <p className="text-purple-100 mb-8">
            Our technical team can provide free solution design and product trials based on your observation needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 h-12 px-8">
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
