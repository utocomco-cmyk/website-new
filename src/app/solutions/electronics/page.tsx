"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  Monitor,
  Brain,
  Eye,
  Check,
  Phone,
  Mail,
  Settings,
} from "lucide-react";
import Link from "next/link";

// 电子产线Inspection Solutions数据
const solutionData = {
  title: "Electronics Production Line Inspection Solutions",
  subtitle: "HDMI 基于 HDMI 高清输出与智能 AI 检测的双模解决Solution AI Dual-Mode Inspection Solutions",
  desc: "Real-time HD inspection solutions for electronics manufacturing, featuring plug-and-play HDMI cameras and AI-powered smart cameras with real-time display, automated detection, and data logging",
  stats: [
    { value: "1080P~4K", label: "Output Resolution" },
    { value: "60fps", label: "Frame Rate" },
    { value: "<50ms", label: "Detection Latency" },
  ],
  // Application Scenarios
  scenarios: [
    {
      id: "pcb",
      title: "PCB Solder Joint Inspection",
      icon: Monitor,
      image: "/images/scenarios/pcb-inspection.jpg",
      desc: "Real-time solder joint quality inspection, identifying cold joints, shorts, and missing solder defects",
      painPoints: [
        "Manual inspection is inefficient and prone to fatigue-related misses",
        "Traditional cameras require PC processing with high latency",
        "Limited production line space makes complex systems difficult to deploy",
      ],
      solution: "HDMI camera connects directly to monitor for real-time operator viewing; Smart camera with built-in AI algorithms automatically identifies defects and alerts",
      benefits: [
        "Plug-and-play, no PC required, saves space",
        "Real-time display with zero-latency viewing",
        "AI automated detection reduces manual errors",
      ],
      products: ["UT-9218/9118", "UT-600II", "UT-SmartGo"],
      href: "/solutions/electronics/pcb",
    },
    {
      id: "assembly",
      title: "Component Assembly Inspection",
      icon: Settings,
      image: "/images/scenarios/robot-vision.jpg",
      desc: "Inspect component placement position, orientation, and completeness",
      painPoints: [
        "Small component size makes manual precision judgment difficult",
        "Fast assembly speed requires real-time feedback",
        "Mixed product lines require quick switching of inspection programs",
      ],
      solution: "Smart camera with built-in positioning algorithms outputs coordinates in real-time; HDMI camera assists manual re-inspection",
      benefits: [
        "Positioning accuracy up to ±0.05mm",
        "Supports multi-template switching for mixed-line production",
        "检测速度 >100 件/分钟",
      ],
      products: ["UT-Smart-2000M", "UT-SmartGo", "UT-A100"],
      href: "/solutions/electronics/assembly",
    },
    {
      id: "appearance",
      title: "Appearance Defect Inspection",
      icon: Eye,
      image: "/images/industries/01-semiconductor.jpg",
      desc: "Detect surface scratches, stains, color differences and other appearance defects",
      painPoints: [
        "Diverse defect types make rules difficult to define",
        "Complex lighting conditions affect imaging quality",
        "Need to save inspection records for quality traceability",
      ],
      solution: "Smart camera with deep learning algorithms adapts to various defects; Supports USB storage of inspection images",
      benefits: [
        "Supports 20+ defect type recognition",
        "Automatically adapts to lighting changes",
        "Local storage ensures data security",
      ],
      products: ["UT-SmartGo", "UT-A100", "UT-3500AF"],
      href: "/solutions/electronics/appearance",
    },
  ],
  // Solution Comparison
  comparison: [
    {
      type: "HDMI Camera Solution",
      icon: Monitor,
      image: "/images/products/ut-9218/main.jpg",
      bestFor: "Manual inspection, real-time observation, teaching demonstration",
      features: [
        "Plug-and-play, no PC required",
        "1080P~4K HD output",
        "Zero latency, real-time display",
        "Supports mouse operation, USB storage",
      ],
      products: [
        { name: "UT-9218/9118", spec: "1920×1080, HDMI 显微镜" },
        { name: "UT-2K30/4K30", spec: "高清工业相机" },
        { name: "UT-600", spec: "1080P 电子显微镜" },
      ],
    },
    {
      type: "Smart Camera Solution",
      icon: Brain,
      image: "/images/products/ut-smartgo/main.jpg",
      bestFor: "Automated detection, AI recognition, unmanned operation",
      features: [
        "Built-in AI algorithms, no PC required",
        "Automatically identifies defects and alerts",
        "Network interface supports remote monitoring",
        "I/O interface for production line integration",
      ],
      products: [
        { name: "UT-SmartGo", spec: "1600×1400, 智能视觉相机" },
        { name: "UT-A100", spec: "一键式 AOI 检测设备" },
        { name: "UT-Smart-2000M", spec: "机器人视觉相机" },
      ],
    },
  ],
  // Customer Cases
  cases: [
    {
      company: "Electronics Manufacturing OEM",
      industry: "Consumer Electronics",
      challenge: "Manual SMT solder joint inspection is inefficient with high miss rates",
      solution: "Deployed 20 UT-SmartGo smart cameras for solder joint quality inspection",
      result: [
        "Inspection efficiency improved by 300%",
        "Miss rate reduced from 5% to 0.1%",
        "Saved 15 manual inspectors",
      ],
    },
    {
      company: "Automotive Electronics Supplier",
      industry: "Automotive Parts",
      challenge: "ECU board assembly inspection with many component types and frequent line changes",
      solution: "HDMI + Smart camera dual-mode solution combining manual and automated inspection",
      result: [
        "Line change time reduced from 2 hours to 15 minutes",
        "Inspection accuracy 99.5%",
        "Production capacity increased by 40%",
      ],
    },
    {
      company: "Medical Device Company",
      industry: "Medical Electronics",
      challenge: "Precision component appearance inspection requiring HD imaging and data traceability",
      solution: "UT-MT4K80 HD microscope camera with 4K imaging + USB storage",
      result: [
        "Image clarity improved 4x",
        "Inspection data automatically saved and traceable",
        "Passed FDA certification requirements",
      ],
    },
  ],
};

export default function ElectronicsSolutionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/solutions/electronics-smt.png"
            alt="电子产线Inspection Solutions"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 to-blue-50/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-6">
              Industry Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {solutionData.title}
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-4">
              {solutionData.subtitle}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {solutionData.desc}
            </p>
            
            {/* Stats */}
            <div className="flex justify-center gap-8 mb-8">
              {solutionData.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 h-12 px-8">
                <Phone className="w-5 h-5 mr-2" />
                获取Solution报价
              </Button>
              <Button variant="outline" className="h-12 px-8 bg-white/80">
                <Mail className="w-5 h-5 mr-2" />
                Technical Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Comparison */}
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

          {/* Application Scenarios - below Inspection Solutions */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Scenarios</h3>
            <p className="text-gray-600">Covering core electronics production line inspection processes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutionData.scenarios.map((scenario) => {
              const ScenarioIcon = scenario.icon;
              return (
                <Link key={scenario.id} href={scenario.href || "#"}>
                  <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full overflow-hidden">
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
                            <ScenarioIcon className="w-4 h-4 text-blue-600" />
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
                </Link>
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
            <p className="text-gray-600">Real Application Results</p>
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
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            需要定制化的Inspection Solutions？
          </h2>
          <p className="text-blue-100 mb-8">
            我们的技术团队可以根据您的产线特点，提供免费的Solution设计与产品试用
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 h-12 px-8">
              <Phone className="w-5 h-5 mr-2" />
              预约技术演示
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 h-12 px-8"
            >
              <Mail className="w-5 h-5 mr-2" />
              在线咨询
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
