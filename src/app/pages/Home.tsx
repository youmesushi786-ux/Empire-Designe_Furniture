import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/ui/button';

export function Home() {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-[#f8f6f1] text-[#1e2a22]">
      {/* Hero Section */}
      <section
        className="relative h-[650px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(18, 45, 30, 0.68), rgba(18, 45, 30, 0.52)), url('https://images.unsplash.com/photo-1687180498602-5a1046defaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwZnVybml0dXJlfGVufDF8fHx8MTc3NDI5MjUxNnww&ixlib=rb-4.1.0&q=80&w=1600')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/10" />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d8e7da]">
            Empire Design Furniture
          </p>

          <h1 className="mb-6 font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight text-white leading-tight">
            Premium Furniture
            <br />
            for Elegant Living
          </h1>

          <p className="mb-8 max-w-2xl mx-auto text-lg md:text-xl text-[#edf5ee] leading-relaxed">
            Discover our curated collection of stylish, modern, and luxurious
            furniture designed to bring comfort, beauty, and timeless elegance
            to your home in Kenya.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button
                size="lg"
                className="group bg-[#234b34] hover:bg-[#1b3d2a] text-white px-8 py-6 text-base shadow-xl border border-[#234b34]"
              >
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <a
              href="https://wa.me/254702694794?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20furniture."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[#234b34]"
              >
                Order via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-[#f8f6f1]">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#3f6148]">
              Featured Pieces
            </p>
            <h2 className="mb-4 font-serif text-3xl md:text-5xl text-[#1f2d22]">
              Featured Collection
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-[#5d6d61]">
              Handpicked furniture pieces that define refined and contemporary
              living.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl overflow-hidden bg-white border border-[#e7e2d9] shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/shop">
              <Button
                variant="outline"
                size="lg"
                className="border-[#234b34] text-[#234b34] hover:bg-[#234b34] hover:text-white px-8"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-[#eaf1ea]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#3f6148]">
                About Us
              </p>
              <h2 className="mb-4 font-serif text-3xl md:text-5xl text-[#1f2d22]">
                Crafted with Care
              </h2>
              <p className="mb-6 text-lg text-[#506154] leading-relaxed">
                At Empire Design Furniture, we believe furniture should be more
                than functional — it should inspire. Each piece in our
                collection is carefully selected for its quality, design, and
                ability to transform your living space.
              </p>
              <p className="text-lg text-[#506154] leading-relaxed">
                From timeless classics to contemporary statement pieces, we
                offer furniture that reflects your style and elevates everyday
                living with comfort and sophistication.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#d9e4d8] bg-white p-6 shadow-sm">
                <p className="mb-2 font-serif text-3xl text-[#234b34]">500+</p>
                <p className="text-sm text-[#66776a]">Products</p>
              </div>

              <div className="rounded-2xl border border-[#d9e4d8] bg-white p-6 shadow-sm">
                <p className="mb-2 font-serif text-3xl text-[#234b34]">98%</p>
                <p className="text-sm text-[#66776a]">Satisfaction</p>
              </div>

              <div className="rounded-2xl border border-[#d9e4d8] bg-white p-6 shadow-sm">
                <p className="mb-2 font-serif text-3xl text-[#234b34]">Nairobi</p>
                <p className="text-sm text-[#66776a]">Based in Kenya</p>
              </div>

              <div className="rounded-2xl border border-[#d9e4d8] bg-white p-6 shadow-sm">
                <p className="mb-2 font-serif text-3xl text-[#234b34]">24/7</p>
                <p className="text-sm text-[#66776a]">WhatsApp Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-16 md:py-24 bg-[#1f3a2a]">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#b8cbbd]">
            Bring Luxury Home
          </p>
          <h2 className="mb-6 font-serif text-3xl md:text-5xl text-white">
            Transform Your Space with Timeless Furniture
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-[#d7e3da] leading-relaxed">
            Explore elegant furniture pieces designed to add warmth, beauty, and
            premium comfort to every room in your home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button
                size="lg"
                className="bg-white text-[#234b34] hover:bg-[#ecf3ed] px-8"
              >
                Explore Collection
              </Button>
            </Link>

            <a
              href="https://wa.me/254702694794?text=Hello!%20I%20am%20interested%20in%20your%20premium%20furniture%20collection."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#234b34] px-8"
              >
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}