"use client";

import { Microscope, Monitor, Brain, Eye } from "lucide-react";

interface Category {
  id: string;
  name: string;
  count: number;
}

interface ProductFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  microscope: Microscope,
  hdmi: Monitor,
  smart: Brain,
  vga: Monitor,
  "digital-microscope": Microscope,
  "vision-inspection": Eye,
};

export function ProductFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: ProductFilterProps) {
  return (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="text-gray-900 font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryChange(null)}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
              selectedCategory === null
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <span>All Products</span>
            <span className="text-xs opacity-70">
              {categories.reduce((sum, c) => sum + c.count, 0)}
            </span>
          </button>
          {categories.map((category) => {
            const Icon = categoryIcons[category.id];
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-2">
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{category.name}</span>
                </div>
                <span className="text-xs opacity-70">{category.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interface */}
      <div>
        <h3 className="text-gray-900 font-semibold mb-4">Video Interface</h3>
        <div className="space-y-2">
          {["HDMI", "USB", "VGA"].map((iface) => (
            <label
              key={iface}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
            >
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-600 rounded"
              />
              <span className="text-gray-600 text-sm">{iface}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Resolution */}
      <div>
        <h3 className="text-gray-900 font-semibold mb-4">Resolution</h3>
        <div className="space-y-2">
          {[
            "1080P",
            "2K",
            "4K",
            "Others",
          ].map((res) => (
            <label
              key={res}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
            >
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-600 rounded"
              />
              <span className="text-gray-600 text-sm">{res}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
