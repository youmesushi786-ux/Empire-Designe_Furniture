import { useState } from 'react';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/ui/button';

export function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f8f6f1] py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#5b725f]">
            Curated Collection
          </p>
          <h1 className="mb-4 font-serif text-4xl md:text-5xl lg:text-6xl text-[#1f2d22]">
            Shop All Furniture
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[#66776a] leading-relaxed">
            Browse our complete collection of premium furniture pieces designed
            to bring comfort, elegance, and timeless beauty to your home.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <Button
                key={category}
                variant="outline"
                onClick={() => setSelectedCategory(category)}
                className={
                  isActive
                    ? 'bg-[#234b34] text-white border-[#234b34] hover:bg-[#1b3d2a] hover:text-white px-5'
                    : 'bg-white text-[#234b34] border-[#d7e2d6] hover:bg-[#eaf1ea] hover:text-[#1b3d2a] px-5'
                }
              >
                {category}
              </Button>
            );
          })}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* No Results */
          <div className="py-16 text-center">
            <div className="mx-auto max-w-md rounded-2xl border border-[#dde6dc] bg-white p-10 shadow-sm">
              <h3 className="mb-3 font-serif text-3xl text-[#1f2d22]">
                No products found
              </h3>
              <p className="text-[#66776a] leading-relaxed">
                There are currently no products in this category. Please try
                another collection.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}