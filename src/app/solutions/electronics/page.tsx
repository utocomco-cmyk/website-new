"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

// 电子产线检测方案数据
const solutionData = {
  title: "电子产线实时检测方案",
  subtitle: "基于 HDMI 高清输出与智能 AI 检测的双模解决方案",
  desc: "针对电子制造产线的高清实时检测需求，提供即插即用的 HDMI 相机与内置 AI 算法的智能相机，支持实时显示、自动检测、数据记录一体化",
  stats: [
    { value: "1080P~4K", label: "输出分辨率" },
    { value: "60fps", label: "实时帧率" },
    { value: "<50ms", label: "检测延迟" },
  ],
  // 应用场景
  scenarios: [
    {
      id: "pcb",
      title: "PCB 焊点检测",
      icon: Monitor,
      desc: "实时检测焊点质量，识别虚焊、短路、缺焊等缺陷",
      painPoints: [
        "人工目检效率低，易疲劳漏检",
        "传统相机需要电脑处理，延迟高",
        "产线空间有限，难以部署复杂系统",
      ],
      solution: "HDMI 相机直连显示器，操作员实时观察；智能相机内置 AI 算法，自动识别缺陷并报警",
      benefits: [
        "即插即用，无需电脑，节省空间",
        "实时显示，零延迟观察",
        "AI 自动检测，减少人工误判",
      ],
      products: ["SmartGO-570CPLC", "Smart-2K", "Smart-4k-80"],
      href: "/solutions/electronics/pcb",
    },
    {
      id: "assembly",
      title: "零件装配检测",
      icon: Settings,
      desc: "检测零件装配位置、方向、完整性",
      painPoints: [
        "零件体积小，人工难以精准判断",
        "装配速度快，需要实时反馈",
        "多种产品混线，需要快速切换检测程序",
      ],
      solution: "智能相机内置定位算法，实时输出坐标；HDMI 相机辅助人工复检",
      benefits: [
        "定位精度达 ±0.05mm",
        "支持多模板切换，适应混线生产",
        "检测速度 >100 件/分钟",
      ],
      products: ["SmartGO-178CPLC", "SmartGO-560M", "Smart-3000"],
      href: "/solutions/electronics/assembly",
    },
    {
      id: "appearance",
      title: "外观缺陷检测",
      icon: Eye,
      desc: "检测产品表面划痕、污渍、色差等外观缺陷",
      painPoints: [
        "缺陷类型多样，规则难以定义",
        "光照条件复杂，影响成像质量",
        "需要保存检测记录，追溯质量问题",
      ],
      solution: "智能相机深度学习算法，自适应多种缺陷；支持 U 盘存储检测图像",
      benefits: [
        "支持 20+ 种缺陷类型识别",
        "自动适应光照变化",
        "本地存储，数据安全",
      ],
      products: ["SmartGO-570M", "SmartGO-6MP-BW", "Smart-3000M"],
      href: "/solutions/electronics/appearance",
    },
  ],
  // 方案对比
  comparison: [
    {
      type: "HDMI 相机方案",
      icon: Monitor,
      bestFor: "人工目检、实时观察、教学演示",
      features: [
        "即插即用，无需电脑",
        "1080P~4K 高清输出",
        "零延迟，实时显示",
        "支持鼠标操作、U 盘存储",
      ],
      products: [
        { name: "Smart-2K", spec: "2560×1440, 2K 输出" },
        { name: "Smart-4k-80", spec: "3840×2160, 4K 显微镜" },
        { name: "Smart-3000", spec: "1920×1080, 通用型" },
      ],
    },
    {
      type: "智能相机方案",
      icon: Brain,
      bestFor: "自动检测、AI 识别、无人值守",
      features: [
        "内置 AI 算法，无需 PC",
        "自动识别缺陷并报警",
        "网络接口，支持远程监控",
        "I/O 接口，联动产线设备",
      ],
      products: [
        { name: "SmartGO-570CPLC", spec: "1600×1200, AI 检测" },
        { name: "SmartGO-178CPLC", spec: "3072×1728, 6MP 高清" },
        { name: "SmartGO-560M", spec: "1280×1024, 定位专用" },
      ],
    },
  ],
  // 客户案例
  cases: [
    {
      company: "某电子制造代工厂",
      industry: "消费电子",
      challenge: "SMT 产线焊点人工目检效率低，漏检率高",
      solution: "部署 20 台 SmartGO-570CPLC 智能相机，检测焊点质量",
      result: [
        "检测效率提升 300%",
        "漏检率从 5% 降至 0.1%",
        "节省人工 15 人",
      ],
    },
    {
      company: "某汽车电子供应商",
      industry: "汽车零部件",
      challenge: "ECU 主板装配检测，零件种类多，换线频繁",
      solution: "HDMI 相机 + 智能相机双模方案，人工+自动检测结合",
      result: [
        "换线时间从 2 小时缩短至 15 分钟",
        "检测准确率 99.5%",
        "产线产能提升 40%",
      ],
    },
    {
      company: "某医疗器械企业",
      industry: "医疗电子",
      challenge: "精密零件外观检测，需要高清成像和数据追溯",
      solution: "Smart-4k-80 高清显微镜相机，4K 成像 + U 盘存储",
      result: [
        "成像清晰度提升 4 倍",
        "检测数据自动保存，可追溯",
        "通过 FDA 认证要求",
      ],
    },
  ],
};

export default function ElectronicsSolutionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-6">
              行业解决方案
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
                获取方案报价
              </Button>
              <Button variant="outline" className="h-12 px-8">
                <Mail className="w-5 h-5 mr-2" />
                技术咨询
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">检测方案</h2>
            <p className="text-gray-600">根据您的需求选择合适的方案</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {solutionData.comparison.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="border-gray-200 shadow-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{item.type}</h3>
                        <p className="text-blue-600 text-sm">{item.bestFor}</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {item.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-center gap-2 text-gray-700">
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-100 pt-6">
                      <h4 className="text-sm font-semibold text-gray-500 mb-3">推荐产品</h4>
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
              );
            })}
          </div>

          {/* Application Scenarios - 放在检测方案下面 */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">应用场景</h3>
            <p className="text-gray-600">覆盖电子产线核心检测环节</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutionData.scenarios.map((scenario) => {
              const Icon = scenario.icon;
              return (
                <Link key={scenario.id} href={scenario.href || "#"}>
                  <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">{scenario.title}</h4>
                      </div>
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
                        <div className="text-xs text-gray-500 mb-2">推荐产品</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">客户案例</h2>
            <p className="text-gray-600">真实的应用效果</p>
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
                      <div className="text-red-600 text-xs mb-1">挑战</div>
                      <div className="text-red-700 text-sm">{caseItem.challenge}</div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-blue-600 text-xs mb-1">方案</div>
                      <div className="text-blue-700 text-sm">{caseItem.solution}</div>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="text-green-600 text-xs mb-1">效果</div>
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
            需要定制化的检测方案？
          </h2>
          <p className="text-blue-100 mb-8">
            我们的技术团队可以根据您的产线特点，提供免费的方案设计与产品试用
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
