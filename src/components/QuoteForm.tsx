"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuoteFormProps {
  buttonText?: string;
  buttonVariant?: "default" | "outline" | "secondary";
  buttonClassName?: string;
  source?: string;
}

export function QuoteForm({ 
  buttonText = "Get Quote", 
  buttonVariant = "default",
  buttonClassName = "",
  source = "general"
}: QuoteFormProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    quantity: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 保存到本地文件
    const quoteRequest = {
      ...formData,
      source,
      timestamp: new Date().toISOString(),
      id: `quote_${Date.now()}`,
    };

    try {
      // 发送请求到 API 保存数据
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quoteRequest),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setOpen(false);
          setSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            product: "",
            quantity: "",
            message: "",
          });
        }, 2000);
      }
    } catch (error) {
      console.error("提交失败:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <button
            className={cn(
              "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50",
              buttonVariant === "default" && "bg-blue-600 text-white hover:bg-blue-700",
              buttonVariant === "outline" && "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
              buttonVariant === "secondary" && "bg-gray-100 text-gray-900 hover:bg-gray-200",
              buttonClassName
            )}
          >
            <Phone className="w-4 h-4" />
            {buttonText}
          </button>
        }
      />
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Get a Quote</DialogTitle>
          <DialogDescription>
            Please fill in your contact information and requirements. Our sales team will contact you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Submitted Successfully!</h3>
            <p className="text-gray-600">We will contact you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Contact number"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="product">Product of Interest</Label>
                <Input
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  placeholder="e.g., SmartGO-570CPLC"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Estimated Quantity</Label>
                <Input
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g., 10 units"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Detailed Requirements</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please describe your specific application scenario and requirements..."
                rows={3}
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 h-12 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-white transition-all disabled:pointer-events-none disabled:opacity-50"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Quote Request"
              )}
            </button>

            <p className="text-xs text-gray-500 text-center">
              By submitting, you agree to our Privacy Policy. We are committed to protecting your personal information.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
