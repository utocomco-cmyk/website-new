"use client";

import { useState } from "react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { ProductCard } from "./ProductCard";
import { ProductFilter } from "./ProductFilter";
import { products, categories } from "./data";
import { SlidersHorizontal, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/components/LanguageSwitcher";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function ProductsContent() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<string>("featured");

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.priceNum - b.priceNum;
      case "price-desc":
        return b.priceNum - a.priceNum;
      case "newest":
        return b.id - a.id;
      default:
        return 0;
    }
  });

  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <div className="pt-24 pb-8 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {t.products || "Products"}
              </h1>
              <p className="text-blue-100">
                {sortedProducts.length} {t.products || "products"} {t.coveringAll || "covering all machine vision applications"}
              </p>
            </div>

            {/* Mobile Filter Button */}
            <Sheet>
              <SheetTrigger>
                <Button
                  variant="outline"
                  className="md:hidden border-white/30 text-white hover:bg-white/10"
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  {t.filter || "Filter"}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-white border-gray-200 w-[300px]">
                <SheetHeader>
                  <SheetTitle className="text-gray-900">{t.filterProducts || "Filter Products"}</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <ProductFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filter - Desktop */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <ProductFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <span className="text-gray-500 text-sm">
                  Showing {sortedProducts.length} results
                </span>
                {selectedCategory && (
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    Clear filter ×
                  </button>
                )}
              </div>

              <div className="flex items-center gap-4">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>

                {/* View Mode */}
                <div className="hidden sm:flex items-center gap-1 border border-gray-200 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded ${
                      viewMode === "grid"
                        ? "bg-blue-600 text-white"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded ${
                      viewMode === "list"
                        ? "bg-blue-600 text-white"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products */}
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                  : "space-y-4"
              }
            >
              {sortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  viewMode={viewMode}
                />
              ))}
            </div>

            {/* Empty State */}
            {sortedProducts.length === 0 && (
              <div className="text-center py-20">
                <div className="text-gray-600 text-lg mb-2">No products found</div>
                <p className="text-gray-500 text-sm">
                  Try adjusting your filters
                </p>
              </div>
            )}

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">
              <Button
                variant="outline"
                className="border-gray-200 text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                disabled
              >
                Previous
              </Button>
              <Button className="bg-blue-600 text-white">1</Button>
              <Button
                variant="outline"
                className="border-gray-200 text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              >
                2
              </Button>
              <Button
                variant="outline"
                className="border-gray-200 text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              >
                3
              </Button>
              <span className="text-gray-400">...</span>
              <Button
                variant="outline"
                className="border-gray-200 text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              >
                Next
              </Button>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
