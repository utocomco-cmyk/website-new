import { Metadata } from "next";
import { SupportContent } from "./SupportContent";

export const metadata: Metadata = {
  title: "Technical Support - Industrial Camera SDK, Driver Download, Documentation | Utocom",
  description: "Utocom Technical Support Center provides industrial camera SDK development kits, driver downloads, technical documentation, video tutorials, application cases, and other resources. Professional technical support team to help you solve machine vision application problems.",
  keywords: [
    "industrial camera SDK",
    "industrial camera driver download",
    "machine vision technical documentation",
    "industrial camera technical support",
    "SDK development kit",
    "industrial camera API",
    "technical forum"
  ],
  openGraph: {
    title: "Technical Support - Industrial Camera SDK, Driver Download, Documentation | Utocom",
    description: "Utocom Technical Support Center provides industrial camera SDK development kits, driver downloads, technical documentation, video tutorials, and other resources",
    url: "https://www.utocom.com/support",
    type: "website",
  },
  alternates: {
    canonical: "https://www.utocom.com/support",
  },
};

export default function SupportPage() {
  return <SupportContent />;
}
