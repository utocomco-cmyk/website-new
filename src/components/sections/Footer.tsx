"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/components/LanguageSwitcher";

export function Footer() {
  const { t } = useTranslation();
  
  const footerLinks = {
    products: {
      title: t.products || "Products",
      links: [
        { name: "3D Microscopes", href: "/products?category=3d-microscopes" },
        { name: "Metallographic Microscopes", href: "/products?category=metallographic-microscopes" },
        { name: "Measuring Microscopes", href: "/products?category=measuring-microscopes" },
        { name: "Electronic Microscopes", href: "/products?category=electronic-microscopes" },
        { name: "Vision Inspection", href: "/products?category=vision-inspection" },
        { name: "Thermal Cameras", href: "/products?category=thermal-cameras" },
      ],
    },
    solutions: {
      title: t.solutions || "Solutions",
      links: [
        { name: "Microscope Vision", href: "/solutions/microscope" },
        { name: "Electronics Inspection", href: "/solutions/electronics" },
        { name: "AI Vision Inspection", href: "/solutions/vision" },
        { name: "Thermal Imaging", href: "/solutions/thermal" },
      ],
    },
    support: {
      title: t.support || "Support",
      links: [
        { name: "Documentation", href: "#" },
        { name: "SDK Download", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Video Tutorials", href: "#" },
        { name: "FAQ", href: "#" },
        { name: t.contactUs || "Contact Us", href: "/about" },
      ],
    },
    company: {
      title: t.about || "Company",
      links: [
        { name: t.about || "About Us", href: "/about" },
        { name: "News", href: "#" },
        { name: "Careers", href: "#" },
        { name: t.contactUs || "Contact", href: "/about" },
        { name: "Partners", href: "#" },
      ],
    },
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">UC</span>
              </div>
              <div>
                <div className="text-gray-900 font-bold text-lg">Utocom</div>
                <div className="text-blue-600 text-xs">Industrial Vision</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t.description || "20 years of expertise in industrial vision, providing high-performance industrial cameras, vision algorithms, and intelligent solutions for smart manufacturing."}
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-gray-900 font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-600" />
              <div>
                <div className="text-gray-400 text-xs">Sales Hotline</div>
                <div className="text-gray-700 text-sm font-medium">+86 13127063821</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <div>
                <div className="text-gray-400 text-xs">Email</div>
                <div className="text-gray-700 text-sm font-medium">utocomco@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-600" />
              <div>
                <div className="text-gray-400 text-xs">Headquarters</div>
                <div className="text-gray-700 text-sm font-medium">Qingdao, Shandong, China</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Qingdao Utocom Co., Ltd. All Rights Reserved
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service", "Cookie Settings", "Legal"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
