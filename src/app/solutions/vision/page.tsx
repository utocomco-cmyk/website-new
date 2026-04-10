"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  title: "AI 智能视觉检测方案",
  subtitle: "内置深度学习算法，无需 PC 的嵌入式视觉检测方案",
  desc: "针对工业自动化产线的智能检测需求，提供内置 AI 算法的智能相机，支持缺陷检测、定位识别、尺寸测量，无需外接电脑，即插即用",
  stats: [
    { value: "<50ms", label: "检测速度" },
    { value: "99.5%", label: "检测准确率" },
    { value: "免 PC", label: "嵌入式方案" },
  ],
  scenarios: [
    {
      id: "defect",
      title: "缺陷检测",
      icon: Eye,
      desc: "自动识别产品表面划痕、污渍、裂纹等缺陷",
      benefits: [
        "深度学习算法，自适应多种缺陷",
        "无需编程，样本训练即可使用",
        "实时报警，自动分拣",
      ],
      products: ["SmartGO-570CPLC", "SmartGO-570M", "SmartGO-6MP-BW"],
    },
    {
      id: "positioning",
      title: "定位识别",
      icon: Target,
      desc: "精准定位零件位置，引导机器人装配",
      benefits: [
        "定位精度 ±0.05mm",
        "支持旋转、缩放、遮挡",
        "多目标同时识别",
      ],
      products: ["SmartGO-560M", "SmartGO-178CPLC", "SmartGO-130"],
    },
    {
      id: "measurement",
      title: "尺寸测量",
      icon: Zap,
      desc: "高精度测量产品尺寸、间距、角度",
      benefits: [
        "亚像素级测量精度",
        "自动校准补偿",
        "数据记录追溯",
      ],
      products: ["SmartGO-178CPLC", "Smart-3000M", "SmartGO-3000A"],
    },
  ],
  comparison: [
    {
      type: "彩色智能相机",
      icon: Brain,
      bestFor: "外观检测、颜色识别、复杂场景",
      features: [
        "彩色成像，支持颜色分析",
        "深度学习缺陷检测",
        "HDMI 输出，可视化调试",
        "网络接口，远程监控",
      ],
      products: [
        { name: "SmartGO-570CPLC", spec: "1600×1200, AI 检测" },
        { name: "SmartGO-178CPLC", spec: "3072×1728, 6MP 高清" },
        { name: "SmartGO-560M", spec: "1280×1024, 定位专用" },
      ],
    },
    {
      type: "黑白智能相机",
      icon: Eye,
      bestFor: "尺寸测量、高速检测、低光照",
      features: [
        "黑白成像，对比度更高",
        "全局快门，无运动模糊",
        "高帧率，适合高速产线",
        "低噪声，弱光表现好",
      ],
      products: [
        { name: "SmartGO-570M", spec: "1600×1400, 黑白检测" },
        { name: "SmartGO-6MP-BW", spec: "3072×1728, 6MP 黑白" },
        { name: "SmartGO-560M", spec: "1280×1024, 定位专用" },
      ],
    },
  ],
  cases: [
    {
      company: "某手机零部件供应商",
      industry: "消费电子",
      challenge: "金属外壳外观缺陷检测，缺陷类型多，传统算法难以覆盖",
      solution: "部署 10 台 SmartGO-570CPLC，深度学习缺陷检测",
      result: [
        "检测准确率 99.7%",
        "检测速度 120 件/分钟",
        "节省质检人员 12 人",
      ],
    },
    {
      company: "某汽车零部件厂",
      industry: "汽车制造",
      challenge: "发动机零件装配定位，精度要求高，产线节拍快",
      solution: "SmartGO-560M 定位相机 + 机械手引导系统",
      result: [
        "定位精度 ±0.03mm",
        "装配节拍提升至 8 秒/件",
        "零装配错误",
      ],
    },
    {
      company: "某精密五金企业",
      industry: "精密制造",
      challenge: "小零件尺寸测量，人工测量效率低，误差大",
      solution: "SmartGO-178CPLC 6MP 相机 + 测量软件",
      result: [
        "测量精度 ±0.01mm",
        "测量效率提升 10 倍",
        "CPK 值 > 1.67",
      ],
    },
  ],
};

export default function VisionSolutionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-green-100 text-green-700 border-green-200 mb-6">
              行业解决方案
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
                      <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{item.type}</h3>
                        <p className="text-green-600 text-sm">{item.bestFor}</p>
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
            <p className="text-gray-600">覆盖工业视觉检测核心需求</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutionData.scenarios.map((scenario) => {
              const Icon = scenario.icon;
              return (
                <Card key={scenario.id} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-green-600" />
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
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            需要定制化的 AI 视觉方案？
          </h2>
          <p className="text-green-100 mb-8">
            我们的技术团队可以根据您的检测需求，提供免费的方案设计与算法训练
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-green-600 hover:bg-gray-100 h-12 px-8">
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
