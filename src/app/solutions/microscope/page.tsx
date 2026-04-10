"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Microscope,
  Eye,
  Check,
  Phone,
  Mail,
  Monitor,
} from "lucide-react";

const solutionData = {
  title: "显微镜视觉观测方案",
  subtitle: "4K 高清成像，数字化显微观测解决方案",
  desc: "针对生物医疗、材料分析、工业检测等领域的显微观测需求，提供 4K 高清显微镜相机与电子显微镜，支持实时显示、图像采集、测量分析一体化",
  stats: [
    { value: "4K/1080P", label: "输出分辨率" },
    { value: "60fps", label: "实时帧率" },
    { value: "HDMI/USB", label: "输出接口" },
  ],
  scenarios: [
    {
      id: "biological",
      title: "生物显微观测",
      icon: Microscope,
      desc: "细胞、组织、微生物等生物样本的显微观测与记录",
      benefits: [
        "4K 高清成像，细节清晰可见",
        "实时显示，无延迟观察",
        "支持图像/视频录制存储",
      ],
      products: ["Smart-4k-80", "Smart-6500", "Smart-6500M"],
    },
    {
      id: "material",
      title: "材料金相分析",
      icon: Eye,
      desc: "金属材料、半导体、矿石等样品的金相显微分析",
      benefits: [
        "高对比度成像，晶粒清晰可见",
        "支持偏光、暗场等多种观察模式",
        "测量分析功能，精准定量",
      ],
      products: ["Smart-6000", "Smart-6000M", "HS-3500M"],
    },
    {
      id: "industrial",
      title: "工业显微检测",
      icon: Monitor,
      desc: "精密零件、PCB、焊点等工业产品的显微检测",
      benefits: [
        "大景深成像，三维结构清晰",
        "HDMI 直连显示器，操作便捷",
        "支持多人同时观测",
      ],
      products: ["HS3500", "Smart-100SE", "Smart-4k-80"],
    },
  ],
  comparison: [
    {
      type: "4K 高清显微镜相机",
      icon: Microscope,
      bestFor: "科研教学、医疗诊断、精密检测",
      features: [
        "3840×2160 真 4K 分辨率",
        "HDMI 高清输出，零延迟",
        "支持鼠标操作、U 盘存储",
        "C 接口，适配各类显微镜",
      ],
      products: [
        { name: "Smart-4k-80", spec: "4K 高清显微镜相机" },
        { name: "Smart-6500", spec: "1080P 显微镜相机" },
        { name: "Smart-6500M", spec: "黑白显微镜相机" },
      ],
    },
    {
      type: "电子显微镜",
      icon: Eye,
      bestFor: "便携检测、现场观测、教学演示",
      features: [
        "一体化设计，无需外接显微镜",
        "自带光源，即插即用",
        "支持拍照录像",
        "轻便便携，灵活部署",
      ],
      products: [
        { name: "Smart-6000", spec: "1080P 电子显微镜" },
        { name: "Smart-6000M", spec: "黑白电子显微镜" },
        { name: "HS-3500M", spec: "工业电子显微镜" },
      ],
    },
  ],
  cases: [
    {
      company: "某三甲医院病理科",
      industry: "医疗诊断",
      challenge: "病理切片观测需要多人会诊，传统显微镜难以共享",
      solution: "部署 Smart-4k-80 4K 显微镜相机，连接大屏显示",
      result: [
        "实现多人同时观测讨论",
        "诊断效率提升 50%",
        "支持远程会诊",
      ],
    },
    {
      company: "某高校材料学院",
      industry: "科研教学",
      challenge: "金相实验教学，学生轮流观察效率低",
      solution: "Smart-6500 显微镜相机 + 投影仪，实时投屏",
      result: [
        "全班同步观察，教学效率提升",
        "支持图像采集，实验报告更专业",
        "学生满意度提升 90%",
      ],
    },
    {
      company: "某半导体检测企业",
      industry: "工业检测",
      challenge: "芯片表面缺陷检测，需要高清成像和数据记录",
      solution: "HS-3500M 工业显微镜 + 测量软件",
      result: [
        "缺陷识别率提升至 99.5%",
        "检测数据自动保存追溯",
        "通过 ISO 质量体系认证",
      ],
    },
  ],
};

export default function MicroscopeSolutionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-6">
              行业解决方案
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

      {/* Solution Comparison + Scenarios */}
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
                      <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{item.type}</h3>
                        <p className="text-purple-600 text-sm">{item.bestFor}</p>
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

          {/* Application Scenarios */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">应用场景</h3>
            <p className="text-gray-600">覆盖显微观测核心应用领域</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutionData.scenarios.map((scenario) => {
              const Icon = scenario.icon;
              return (
                <Card key={scenario.id} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-purple-600" />
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
      <section className="py-16 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            需要定制化的显微观测方案？
          </h2>
          <p className="text-purple-100 mb-8">
            我们的技术团队可以根据您的观测需求，提供免费的方案设计与产品试用
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 h-12 px-8">
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
