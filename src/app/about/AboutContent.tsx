"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Users,
  Globe,
  Zap,
  Target,
  Heart,
  TrendingUp,
  Shield,
  Clock,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const milestones = [
  { year: "2004", title: "Company Founded", desc: "Utocom established in Qingdao, focusing on industrial camera R&D" },
  { year: "2008", title: "First Product", desc: "Launched first domestic GigE industrial camera" },
  { year: "2012", title: "Tech Breakthrough", desc: "Independently developed 20MP high-resolution camera" },
  { year: "2016", title: "Smart Camera", desc: "Released first embedded smart camera" },
  { year: "2020", title: "3D Vision", desc: "Launched structured light and ToF 3D camera series" },
  { year: "2024", title: "Industry Leader", desc: "Serving 50,000+ enterprise customers worldwide", },
];

const values = [
  {
    icon: Target,
    title: "Focus",
    desc: "20 years focused on industrial vision, continuous innovation",
  },
  {
    icon: Zap,
    title: "Efficiency",
    desc: "Quick response to customer needs, efficient delivery",
  },
  {
    icon: Shield,
    title: "Reliability",
    desc: "Industrial-grade quality, stable and reliable",
  },
  {
    icon: Heart,
    title: "Service",
    desc: "Customer-centric, dedicated service",
  },
];

const stats = [
  { value: "20+", label: "Years Experience", icon: Clock },
  { value: "3000+", label: "Product Models", icon: Zap },
  { value: "50,000+", label: "Enterprise Clients", icon: Users },
  { value: "200+", label: "Tech Patents", icon: Award },
  { value: "30+", label: "Countries/Regions", icon: Globe },
  { value: "98.6%", label: "Customer Satisfaction", icon: TrendingUp },
];

const team = [
  {
    name: "Mr. Zhang",
    title: "Founder & CEO",
    desc: "Ph.D. from Tsinghua University, 20 years machine vision industry experience",
  },
  {
    name: "Mr. Li",
    title: "CTO",
    desc: "Former Huawei senior engineer, image algorithm expert",
  },
  {
    name: "Mr. Wang",
    title: "Sales Director",
    desc: "15 years industrial automation industry sales experience",
  },
  {
    name: "Mr. Chen",
    title: "R&D Director",
    desc: "Led development of multiple star products",
  },
];

export function AboutContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-6">
            About Us
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Empowering Smart Manufacturing, <span className="text-blue-600">Seeing the Future</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Qingdao Utocom Technology Co., Ltd. was founded in 2004, specializing in industrial cameras, machine vision systems, and intelligent vision solutions. We are committed to providing high-performance, high-reliability vision products and technical services for global manufacturing.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={stat.label}
                  className="bg-white border-gray-200 text-center"
                >
                  <CardContent className="p-6">
                    <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-100">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  Empower smart manufacturing with leading vision technology, helping global enterprises improve product quality, increase production efficiency, reduce manufacturing costs, and promote the development of Industry 4.0 and smart manufacturing.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-100">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  Become a world-leading industrial vision solution provider, giving every manufacturing machine intelligent &quot;eyes&quot; and making smart manufacturing within reach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
              Core Values
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">Our Commitment</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="bg-white border-gray-200 hover:border-blue-300 transition-colors"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-gray-900 font-bold text-lg mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{value.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-teal-100 text-teal-700 border-teal-200 mb-4">
              Our Journey
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">20 Years of Innovation</h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div
                  key={milestone.year}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <Card className="bg-white border-gray-200 inline-block">
                      <CardContent className="p-6">
                        <div className="text-blue-600 font-bold text-xl mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-gray-900 font-bold text-lg mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-500">{milestone.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-white z-10 hidden md:block" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
              Core Team
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">Professional Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card
                key={member.name}
                className="bg-white border-gray-200 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-3xl font-bold text-blue-600">
                      {member.name[0]}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-gray-900 font-bold text-lg">{member.name}</h3>
                  <div className="text-blue-600 text-sm mb-3">{member.title}</div>
                  <p className="text-gray-500 text-sm">{member.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
              Contact Us
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">Looking Forward to Working with You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: MapPin,
                title: "Headquarters",
                content: "Qingdao, Shandong Province, China",
              },
              {
                icon: Phone,
                title: "Phone",
                content: "+86 13127063821",
              },
              {
                icon: Mail,
                title: "Email",
                content: "utocomco@gmail.com",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="bg-white border-gray-200 text-center"
                >
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-gray-900 font-bold text-lg mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 whitespace-pre-line">
                      {item.content}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
