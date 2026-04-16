"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    tag: "Industrial Inspection",
    title: "Precision Vision Solutions",
    subtitle: "PCB Inspection · Semiconductor · Quality Control",
    desc: "Advanced industrial microscopes and vision systems for electronics manufacturing, PCB inspection, and semiconductor quality assurance",
    cta: "Explore Products",
    ctaSub: "View Solutions",
    gradient: "from-gray-900 via-blue-950 to-indigo-900",
    accent: "#3B82F6",
    badge: "Industry 4.0",
    image: "/images/banner/banner-hero-1.jpg",
    imagePosition: "80% center",
  },
  {
    id: 2,
    tag: "Metallographic Analysis",
    title: "Metallographic Microscopes",
    subtitle: "Material Analysis · Metal Inspection · Research Grade",
    desc: "Professional metallographic microscopes for material science, metal analysis, and quality control with 4K resolution and DIC imaging",
    cta: "View Products",
    ctaSub: "Contact Sales",
    gradient: "from-gray-900 via-teal-950 to-cyan-900",
    accent: "#14B8A6",
    badge: "4K DIC",
    image: "/images/banner/banner-02.jpg",
    imagePosition: "center center",
  },
  {
    id: 3,
    tag: "Smart Vision Inspection",
    title: "AI-Powered Vision Systems",
    subtitle: "AOI Systems · Smart Cameras · Automated Inspection",
    desc: "Intelligent vision inspection systems with AI algorithms for defect detection, measurement, and quality assurance in manufacturing",
    cta: "Explore Solutions",
    ctaSub: "View Products",
    gradient: "from-slate-900 via-blue-950 to-indigo-900",
    accent: "#3B82F6",
    badge: "AI Powered",
    image: "/images/banner/banner-hero-3.jpg",
    imagePosition: "75% center",
  },
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "24+", label: "Microscope Models" },
  { value: "7", label: "Product Categories" },
  { value: "98.6%", label: "Satisfaction Rate" },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
    setProgress(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          nextSlide();
          return 0;
        }
        return p + 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slide = slides[current];

  return (
    <section className="relative min-h-[550px] overflow-hidden">
      {/* Background */}
      {slide.image ? (
        <>
          {/* Image Background */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover transition-all duration-700"
              style={{ objectPosition: slide.imagePosition || 'center center' }}
              priority
            />
            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent" />
          </div>
        </>
      ) : (
        <>
          {/* Gradient Background */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} transition-all duration-700`}
          />
          
          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Glow Effect */}
          <div
            className="absolute inset-0 opacity-30 transition-opacity duration-700"
            style={{
              background: `radial-gradient(ellipse at 60% 50%, ${slide.accent}40 0%, transparent 60%)`,
            }}
          />
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className={`grid grid-cols-1 ${slide.image ? '' : 'lg:grid-cols-2'} gap-12 items-center`}>
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: slide.accent }}
              />
              <span className="text-white/80 text-sm font-medium">{slide.tag}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white leading-tight">
              {slide.title}
            </h1>

            <div
              className="text-lg font-mono font-semibold"
              style={{ color: slide.accent }}
            >
              {slide.subtitle}
            </div>

            <p className="text-gray-300 text-base leading-relaxed max-w-lg">
              {slide.desc}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/products">
                <Button
                  className="px-6 py-3 h-auto rounded-xl text-white font-semibold transition-all hover:scale-105 active:scale-95"
                  style={{
                    background: `linear-gradient(135deg, ${slide.accent}, ${slide.accent}aa)`,
                    boxShadow: `0 8px 32px ${slide.accent}40`,
                  }}
                >
                  Products
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="/solutions">
                <Button
                  variant="outline"
                  className="px-6 py-3 h-auto rounded-xl text-white/80 font-medium border-white/20 hover:border-white/40 hover:bg-white/5 transition-all"
                >
                  Solutions
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-6">
              {stats.slice(0, 2).map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-gray-400 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual - Only show when no background image */}
          {!slide.image && (
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-64">
                <div
                  className="absolute inset-0 rounded-full blur-3xl opacity-20 transition-all duration-700"
                  style={{ background: slide.accent }}
                />
                {/* Camera Illustration Placeholder */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg viewBox="0 0 280 200" className="w-full h-full" style={{ filter: `drop-shadow(0 0 30px ${slide.accent}50)` }}>
                    <defs>
                      <radialGradient id={`glow-${slide.id}`} cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor={slide.accent} stopOpacity="0.3" />
                        <stop offset="100%" stopColor={slide.accent} stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <ellipse cx="140" cy="100" rx="120" ry="90" fill={`url(#glow-${slide.id})`} />
                    <rect x="60" y="55" width="160" height="100" rx="12" fill="#1E3A5F" stroke={slide.accent} strokeWidth="1.5" />
                    <rect x="65" y="60" width="150" height="90" rx="10" fill="#0f172a" />
                    <circle cx="140" cy="105" r="38" fill="none" stroke={slide.accent} strokeWidth="3" opacity="0.8" />
                    <circle cx="140" cy="105" r="32" fill="#0A0F1E" stroke={slide.accent} strokeWidth="1.5" opacity="0.6" />
                    <circle cx="140" cy="105" r="24" fill="#1e293b" stroke={slide.accent} strokeWidth="1" />
                    <circle cx="140" cy="105" r="16" fill="#05080F" />
                    <circle cx="140" cy="105" r="10" fill={slide.accent} opacity="0.9" />
                    <circle cx="135" cy="100" r="3" fill="white" opacity="0.6" />
                    <rect x="90" y="50" width="50" height="10" rx="3" fill="#1E3A5F" stroke={slide.accent} strokeWidth="1" />
                    <rect x="200" y="90" width="22" height="30" rx="4" fill="#1E3A5F" stroke={slide.accent} strokeWidth="1.5" />
                    <circle cx="80" cy="70" r="4" fill="#22C55E" opacity="0.9" />
                  </svg>
                </div>
              </div>

              {/* Floating Badge */}
              <div
                className="absolute top-8 right-4 px-3 py-2 rounded-xl backdrop-blur-sm border text-white text-sm font-bold"
                style={{ borderColor: `${slide.accent}50`, background: `${slide.accent}20` }}
              >
                🏆 {slide.badge}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`transition-all duration-300 rounded-full overflow-hidden ${
              i === current ? "w-12 h-3 bg-white/30" : "w-3 h-3 bg-white/30 hover:bg-white/50"
            }`}
          >
            {i === current && (
              <div
                className="h-full rounded-full transition-none"
                style={{ width: `${progress}%`, background: slide.accent }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-20"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-20"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </section>
  );
}
