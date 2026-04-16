"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Monitor,
  Brain,
  Check,
  ArrowRight,
  Phone,
  Mail,
  Shield,
  Clock,
  Settings,
} from "lucide-react";
import Link from "next/link";

export default function PCBInspectionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <span>/</span>
            <Link href="/solutions" className="hover:text-gray-900">Solutions</Link>
            <span>/</span>
            <Link href="/solutions/electronics" className="hover:text-gray-900">Electronics Inspection</Link>
            <span>/</span>
            <span className="text-gray-900">PCB Solder Joint Inspection</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-700 mb-4">Application Scenario</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                PCB Solder Joint Inspection Solution
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                For SMT production line solder joint quality inspection, providing HDMI real-time observation 
                and AI automatic detection dual-mode solution, effectively identifying cold joints, shorts, 
                and missing solder defects.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>99.5% Detection Accuracy</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>&lt;50ms Detection Speed</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Plug-and-play, No PC Required</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 h-12 px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Quote
                </Button>
                <Button variant="outline" className="h-12 px-8">
                  <Mail className="w-5 h-5 mr-2" />
                  Request Trial
                </Button>
              </div>
            </div>

            {/* 方案示意图 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <div className="text-center text-gray-400">
                  <Monitor className="w-16 h-16 mx-auto mb-4" />
                  <p>PCB 焊点检测示意图</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">99.5%</div>
                  <div className="text-sm text-gray-500">检测准确率</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">&lt;50ms</div>
                  <div className="text-sm text-gray-500">检测延迟</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">60fps</div>
                  <div className="text-sm text-gray-500">实时帧率</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">客户痛点</h2>
            <p className="text-gray-600">PCB 焊点检测面临的挑战</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "人工目检效率低",
                desc: "SMT 产线速度快，人工目检跟不上节拍，易疲劳导致漏检",
              },
              {
                icon: Settings,
                title: "传统系统部署复杂",
                desc: "传统视觉系统需要工控机+相机+软件，部署周期长，成本高",
              },
              {
                icon: Shield,
                title: "缺陷类型多样",
                desc: "虚焊、短路、缺焊、焊球等多种缺陷，规则算法难以覆盖",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="border-red-100 bg-red-50/50">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-bold text-red-700 mb-2">{item.title}</h3>
                    <p className="text-red-600 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">解决方案</h2>
            <p className="text-gray-600">双模检测方案，满足不同需求</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* HDMI 方案 */}
            <Card className="border-blue-200 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">HDMI 实时观察方案</h3>
                    <p className="text-blue-600 text-sm">适合人工目检、教学演示</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    "即插即用，HDMI 直连显示器",
                    "1080P~4K 高清成像",
                    "零延迟，实时观察",
                    "支持鼠标操作、U 盘存储",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <div className="text-sm text-blue-700 font-medium mb-2">推荐产品</div>
                  <div className="flex flex-wrap gap-2">
                    {["Smart-2K", "Smart-4k-80", "Smart-3000"].map((product, idx) => (
                      <Badge key={idx} variant="secondary">{product}</Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  了解产品详情
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* AI 方案 */}
            <Card className="border-green-200 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">AI 自动检测方案</h3>
                    <p className="text-green-600 text-sm">适合自动化产线、无人值守</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    "内置 AI 算法，无需 PC",
                    "自动识别虚焊、短路、缺焊",
                    "实时报警，I/O 联动分拣",
                    "网络接口，远程监控",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-green-50 rounded-lg p-4 mb-6">
                  <div className="text-sm text-green-700 font-medium mb-2">推荐产品</div>
                  <div className="flex flex-wrap gap-2">
                    {["SmartGO-570CPLC", "SmartGO-178CPLC"].map((product, idx) => (
                      <Badge key={idx} variant="secondary">{product}</Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">
                  了解产品详情
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Defect Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">可检测缺陷类型</h2>
            <p className="text-gray-600">覆盖常见 PCB 焊点缺陷</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "虚焊", desc: "焊点与焊盘接触不良" },
              { name: "短路", desc: "相邻焊点间短路" },
              { name: "缺焊", desc: "焊点未形成或缺失" },
              { name: "焊球", desc: "焊料飞溅形成小球" },
              { name: "少锡", desc: "焊料不足" },
              { name: "多锡", desc: "焊料过量" },
              { name: "偏移", desc: "元件位置偏移" },
              { name: "立碑", desc: "元件立起" },
            ].map((defect, idx) => (
              <Card key={idx} className="border-gray-200 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-400">{idx + 1}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{defect.name}</h4>
                  <p className="text-gray-500 text-sm">{defect.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="bg-white/20 text-white mb-4">客户案例</Badge>
              <h2 className="text-3xl font-bold mb-4">
                某电子制造代工厂 SMT 产线改造
              </h2>
              <p className="text-blue-100 mb-6">
                该客户拥有 8 条 SMT 产线，日产 PCB 板 50,000 片，人工目检效率低、漏检率高
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs">1</span>
                  </div>
                  <div>
                    <div className="font-medium">部署方案</div>
                    <div className="text-blue-100 text-sm">20 台 SmartGO-570CPLC 智能相机，覆盖 8 条产线</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs">2</span>
                  </div>
                  <div>
                    <div className="font-medium">检测能力</div>
                    <div className="text-blue-100 text-sm">检测速度 120 片/分钟，准确率 99.7%</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs">3</span>
                  </div>
                  <div>
                    <div className="font-medium">项目收益</div>
                    <div className="text-blue-100 text-sm">节省质检人员 15 人，年节省成本 180 万元</div>
                  </div>
                </div>
              </div>

              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                查看更多案例
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">项目成果</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600">300%</div>
                  <div className="text-gray-600 text-sm">检测效率提升</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600">99.7%</div>
                  <div className="text-gray-600 text-sm">检测准确率</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600">15</div>
                  <div className="text-gray-600 text-sm">节省人工（人）</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600">180万</div>
                  <div className="text-gray-600 text-sm">年节省成本（元）</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            需要 PCB 焊点检测方案？
          </h2>
          <p className="text-gray-600 mb-8">
            我们的技术团队可以根据您的产线特点，提供免费的方案设计与产品试用
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 h-12 px-8">
              <Phone className="w-5 h-5 mr-2" />
              预约技术演示
            </Button>
            <Button variant="outline" className="h-12 px-8">
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
