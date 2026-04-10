"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FileText,
  Download,
  Video,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  Search,
  ExternalLink,
  HelpCircle,
} from "lucide-react";

const downloads = [
  {
    category: "Drivers",
    items: [
      { name: "GigE Vision Driver (Windows)", version: "v3.2.1", size: "45 MB", date: "2024-03-15" },
      { name: "GigE Vision Driver (Linux)", version: "v3.2.0", size: "38 MB", date: "2024-03-10" },
      { name: "USB3 Vision Driver", version: "v2.1.5", size: "28 MB", date: "2024-02-28" },
      { name: "Camera Link Frame Grabber Driver", version: "v1.8.3", size: "52 MB", date: "2024-02-20" },
    ],
  },
  {
    category: "SDK Packages",
    items: [
      { name: "Utocom SDK (C++)", version: "v4.5.0", size: "156 MB", date: "2024-03-20" },
      { name: "Utocom SDK (C#)", version: "v4.5.0", size: "142 MB", date: "2024-03-20" },
      { name: "Python Interface Package", version: "v2.3.1", size: "25 MB", date: "2024-03-18" },
      { name: "Halcon Interface", version: "v3.1.0", size: "18 MB", date: "2024-03-05" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Utocom Viewer", version: "v2.8.0", size: "85 MB", date: "2024-03-22" },
      { name: "IP Configuration Tool", version: "v1.5.2", size: "12 MB", date: "2024-02-15" },
      { name: "Firmware Upgrade Tool", version: "v2.0.1", size: "22 MB", date: "2024-01-28" },
      { name: "Lens Selection Tool", version: "v1.2.0", size: "35 MB", date: "2024-01-10" },
    ],
  },
];

const documents = [
  { title: "VisionPro Series User Manual", type: "User Manual", size: "5.2 MB", updated: "2024-03-15" },
  { title: "LineScan Series User Manual", type: "User Manual", size: "4.8 MB", updated: "2024-03-10" },
  { title: "SmartEye Series User Manual", type: "User Manual", size: "6.1 MB", updated: "2024-03-08" },
  { title: "Vision3D Series User Manual", type: "User Manual", size: "7.3 MB", updated: "2024-02-28" },
  { title: "GigE Vision Interface Programming Guide", type: "Development Doc", size: "3.5 MB", updated: "2024-03-20" },
  { title: "SDK API Reference Manual", type: "Development Doc", size: "8.2 MB", updated: "2024-03-18" },
  { title: "Industrial Camera Selection Guide", type: "Application Guide", size: "12.5 MB", updated: "2024-03-01" },
  { title: "Machine Vision System Setup Guide", type: "Application Guide", size: "15.8 MB", updated: "2024-02-20" },
];

const videos = [
  { title: "Industrial Camera Basics", duration: "15:30", views: "12.5K", level: "Beginner" },
  { title: "SDK Development Environment Setup", duration: "08:45", views: "8.2K", level: "Beginner" },
  { title: "GigE Camera Network Configuration", duration: "12:20", views: "6.8K", level: "Intermediate" },
  { title: "Image Acquisition & Parameter Adjustment", duration: "18:15", views: "5.4K", level: "Intermediate" },
  { title: "Vision Detection Algorithm Applications", duration: "25:40", views: "4.1K", level: "Advanced" },
  { title: "Multi-Camera Synchronized Acquisition", duration: "14:50", views: "3.2K", level: "Advanced" },
];

const faqs = [
  {
    question: "How to install GigE Vision camera driver?",
    answer: "1. Download the driver for your system; 2. Disable antivirus software; 3. Run the installer as administrator; 4. Follow the wizard to complete installation; 5. Restart your computer; 6. Connect the camera, the system will recognize it automatically.",
  },
  {
    question: "What to do if the camera is not recognized by software?",
    answer: "Please troubleshoot in the following steps: 1. Check if the network cable is properly connected; 2. Confirm if the camera power is on; 3. Check if the IP address is in the same subnet; 4. Disable firewall for testing; 5. Try replacing the network cable or port; 6. Contact technical support.",
  },
  {
    question: "How to optimize image acquisition frame rate?",
    answer: "Methods to increase frame rate: 1. Reduce ROI (Region of Interest); 2. Decrease exposure time; 3. Use faster interface (e.g., 10GigE); 4. Optimize network settings (jumbo frames, interrupt coalescing); 5. Use high-performance frame grabber.",
  },
  {
    question: "Which programming languages does the SDK support?",
    answer: "Utocom SDK supports multiple programming languages: C++, C#, Python, and also provides interfaces for third-party software such as Halcon, LabVIEW, and Matlab. All interfaces come with complete sample code and API documentation.",
  },
  {
    question: "What is the warranty period for cameras?",
    answer: "Utocom industrial cameras come with a standard 2-year warranty from the date of purchase. Free repair or replacement is provided for non-human damage during the warranty period. Extended warranty services are also available, up to 5 years.",
  },
  {
    question: "How to get technical support?",
    answer: "You can get technical support through the following methods: 1. Technical Hotline: +86 13127063821; 2. Online Customer Service: Weekdays 9:00-18:00; 3. Technical Email: utocomco@gmail.com; 4. Technical Forum: bbs.utocom.com",
  },
];

const contactMethods = [
  {
    icon: Phone,
    title: "Technical Hotline",
    content: "+86 13127063821",
    subContent: "Weekdays 9:00-18:00",
  },
  {
    icon: Mail,
    title: "Technical Email",
    content: "utocomco@gmail.com",
    subContent: "Response within 24 hours",
  },
  {
    icon: MessageCircle,
    title: "Online Customer Service",
    content: "Contact Now",
    subContent: "Weekdays 9:00-18:00",
  },
  {
    icon: BookOpen,
    title: "Technical Forum",
    content: "bbs.utocom.com",
    subContent: "Developer Community",
  },
];

export function SupportContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-6">
            Technical Support
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Technical Support
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Providing complete product documentation, SDK development kits, drivers, video tutorials, and online technical support to help you get started quickly and solve problems
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search documentation, drivers, FAQs..."
              className="w-full h-14 pl-12 pr-4 bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Download, title: "Download Center", desc: "Drivers, SDK, Tools" },
              { icon: FileText, title: "Documentation", desc: "Manuals, Guides, API" },
              { icon: Video, title: "Video Tutorials", desc: "Beginner to Advanced" },
              { icon: HelpCircle, title: "FAQ", desc: "FAQ Answers" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="border-gray-200 hover:border-blue-300 cursor-pointer transition-all hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-gray-900 font-bold mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Tabs defaultValue="downloads" className="w-full">
            <TabsList className="w-full justify-start bg-white border border-gray-200 rounded-xl p-2 flex-wrap h-auto gap-2 mb-8">
              <TabsTrigger
                value="downloads"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg px-6 py-3 text-gray-600 hover:text-gray-900"
              >
                <Download className="w-4 h-4 mr-2" />
                Downloads
              </TabsTrigger>
              <TabsTrigger
                value="documents"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg px-6 py-3 text-gray-600 hover:text-gray-900"
              >
                <FileText className="w-4 h-4 mr-2" />
                Documentation
              </TabsTrigger>
              <TabsTrigger
                value="videos"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg px-6 py-3 text-gray-600 hover:text-gray-900"
              >
                <Video className="w-4 h-4 mr-2" />
                Videos
              </TabsTrigger>
              <TabsTrigger
                value="faq"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg px-6 py-3 text-gray-600 hover:text-gray-900"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                FAQ
              </TabsTrigger>
            </TabsList>

            {/* Downloads */}
            <TabsContent value="downloads" className="mt-0">
              <div className="space-y-8">
                {downloads.map((category) => (
                  <Card key={category.category} className="bg-white border-gray-200">
                    <CardContent className="p-6">
                      <h3 className="text-gray-900 font-bold text-lg mb-6">
                        {category.category}
                      </h3>
                      <div className="space-y-3">
                        {category.items.map((item) => (
                          <div
                            key={item.name}
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                <Download className="w-5 h-5 text-blue-600" />
                              </div>
                              <div>
                                <div className="text-gray-900 font-medium">
                                  {item.name}
                                </div>
                                <div className="text-gray-500 text-sm">
                                  Version: {item.version} | Updated: {item.date}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-gray-500 text-sm">{item.size}</span>
                              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                Download
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Documents */}
            <TabsContent value="documents" className="mt-0">
              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <div className="grid gap-3">
                    {documents.map((doc) => (
                      <div
                        key={doc.title}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                            <FileText className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
                              {doc.title}
                            </div>
                            <div className="text-gray-500 text-sm">
                              {doc.type} | Updated: {doc.updated}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-gray-500 text-sm">{doc.size}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-blue-600 hover:text-blue-700"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Videos */}
            <TabsContent value="videos" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <Card
                    key={video.title}
                    className="bg-white border-gray-200 overflow-hidden group cursor-pointer"
                  >
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                      <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Video className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 rounded text-white text-xs">
                        {video.duration}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-gray-900 font-bold mb-2 group-hover:text-blue-600 transition-colors">
                        {video.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">{video.views} views</span>
                        <Badge
                          variant="outline"
                          className={`${
                            video.level === "Beginner"
                              ? "border-green-500/30 text-green-600"
                              : video.level === "Intermediate"
                              ? "border-yellow-500/30 text-yellow-600"
                              : "border-red-500/30 text-red-600"
                          }`}
                        >
                          {video.level}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* FAQ */}
            <TabsContent value="faq" className="mt-0">
              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <Accordion className="w-full">
                    {faqs.map((faq, idx) => (
                      <AccordionItem
                        key={idx}
                        value={`item-${idx}`}
                        className="border-b border-gray-100"
                      >
                        <AccordionTrigger className="text-gray-900 hover:text-blue-600 py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-700 border-green-200 mb-4">
              Contact Us
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Technical Support</h2>
            <p className="text-gray-600">Our technical team is ready to answer your questions</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Card
                  key={method.title}
                  className="bg-white border-gray-200 text-center hover:border-blue-300 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-gray-900 font-bold text-lg mb-2">
                      {method.title}
                    </h3>
                    <div className="text-blue-600 font-medium mb-1">
                      {method.content}
                    </div>
                    <div className="text-gray-500 text-sm">{method.subContent}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Service Hours */}
          <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-100">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-gray-500 text-sm mb-2">Phone Support</div>
                  <div className="text-gray-900 font-bold">Weekdays 9:00-18:00</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm mb-2">Online Support</div>
                  <div className="text-gray-900 font-bold">Weekdays 9:00-18:00</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm mb-2">Email Support</div>
                  <div className="text-gray-900 font-bold">Response within 24 hours</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
