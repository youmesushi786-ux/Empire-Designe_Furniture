import { Phone, MapPin, Instagram, CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-[#f8f6f1] py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero / Intro */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#5b725f]">
            About Our Brand
          </p>
          <h1 className="mb-5 font-serif text-4xl md:text-5xl lg:text-6xl text-[#1f2d22] leading-tight">
            About Empire Design Furniture
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#66776a]">
            We bring together elegant design, premium craftsmanship, and
            timeless comfort to help transform homes and offices across Kenya.
          </p>
        </div>

        <div className="space-y-10">
          {/* Our Story */}
          <section className="rounded-3xl border border-[#dde6dc] bg-white p-8 md:p-10 shadow-sm">
            <h2 className="mb-5 font-serif text-3xl md:text-4xl text-[#1f2d22]">
              Our Story
            </h2>
            <p className="text-[#5f6f63] leading-relaxed text-lg">
              Empire Design Furniture is Kenya&apos;s premium destination for
              stylish home and office furniture. Based in Nairobi, we serve
              customers across Kenya with a mission to make beautiful,
              high-quality furniture accessible to those who value comfort,
              elegance, and lasting quality.
            </p>
            <p className="mt-5 text-[#5f6f63] leading-relaxed text-lg">
              We believe your home should be a sanctuary — a place where you can
              relax, create, entertain, and truly feel at ease. That is why we
              carefully curate every piece in our collection to meet high
              standards of design, craftsmanship, and functionality.
            </p>
          </section>

          {/* Our Philosophy */}
          <section className="rounded-3xl border border-[#dde6dc] bg-[#eef4ee] p-8 md:p-10 shadow-sm">
            <h2 className="mb-5 font-serif text-3xl md:text-4xl text-[#1f2d22]">
              Our Philosophy
            </h2>
            <p className="mb-5 text-[#506154] leading-relaxed text-lg">
              At Empire Design Furniture, we believe in timeless design over
              short-lived trends. Our furniture is selected not only for how it
              looks today, but for how well it will continue to serve and inspire
              for years to come.
            </p>
            <p className="text-[#506154] leading-relaxed text-lg">
              We work with trusted makers and suppliers who share our commitment
              to quality, ensuring that every piece reflects excellence in both
              style and durability. We also aim to offer competitive prices
              without compromising on the premium finish our customers expect.
            </p>
          </section>

          {/* Why Choose Us */}
          <section className="rounded-3xl border border-[#dde6dc] bg-white p-8 md:p-10 shadow-sm">
            <div className="text-center mb-10">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#5b725f]">
                Why Choose Us
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1f2d22]">
                The Empire Design Difference
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-[#dde6dc] bg-[#f8fbf8] p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#e3eee4]">
                  <CheckCircle2 className="h-5 w-5 text-[#234b34]" />
                </div>
                <h3 className="mb-2 font-serif text-2xl text-[#1f2d22]">
                  Quality Craftsmanship
                </h3>
                <p className="text-sm leading-relaxed text-[#66776a]">
                  Every piece is carefully selected for its premium materials,
                  lasting durability, and excellent craftsmanship.
                </p>
              </div>

              <div className="rounded-2xl border border-[#dde6dc] bg-[#f8fbf8] p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#e3eee4]">
                  <CheckCircle2 className="h-5 w-5 text-[#234b34]" />
                </div>
                <h3 className="mb-2 font-serif text-2xl text-[#1f2d22]">
                  Timeless Design
                </h3>
                <p className="text-sm leading-relaxed text-[#66776a]">
                  Our furniture combines elegance and practicality, with designs
                  that remain stylish through every season.
                </p>
              </div>

              <div className="rounded-2xl border border-[#dde6dc] bg-[#f8fbf8] p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#e3eee4]">
                  <CheckCircle2 className="h-5 w-5 text-[#234b34]" />
                </div>
                <h3 className="mb-2 font-serif text-2xl text-[#1f2d22]">
                  Delivery Convenience
                </h3>
                <p className="text-sm leading-relaxed text-[#66776a]">
                  Enjoy reliable delivery in Nairobi and surrounding areas, with
                  free delivery on qualifying orders over KSh 50,000.
                </p>
              </div>

              <div className="rounded-2xl border border-[#dde6dc] bg-[#f8fbf8] p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#e3eee4]">
                  <CheckCircle2 className="h-5 w-5 text-[#234b34]" />
                </div>
                <h3 className="mb-2 font-serif text-2xl text-[#1f2d22]">
                  WhatsApp Support
                </h3>
                <p className="text-sm leading-relaxed text-[#66776a]">
                  Reach us quickly, ask questions, and place your orders with
                  ease through our WhatsApp support.
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="rounded-3xl bg-[#1f3a2a] px-8 py-10 md:px-12 md:py-14 text-center shadow-sm">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#b8cbbd]">
              Get in Touch
            </p>
            <h2 className="mb-5 font-serif text-3xl md:text-4xl text-white">
              We’d Love to Hear From You
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-[#dbe7dd]">
              Have a question about our furniture, delivery, or custom orders?
              Our team is always ready to help you create a beautiful space.
            </p>

            <div className="grid gap-4 md:grid-cols-3 text-left">
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm border border-white/10">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <p className="mb-1 text-sm uppercase tracking-[0.18em] text-[#bfd0c2]">
                  Call / WhatsApp
                </p>
                <a
                  href="tel:0702694794"
                  className="text-white hover:text-[#dce9df] transition-colors"
                >
                  0702 694 794
                </a>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm border border-white/10">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                  <Instagram className="h-5 w-5" />
                </div>
                <p className="mb-1 text-sm uppercase tracking-[0.18em] text-[#bfd0c2]">
                  Instagram
                </p>
                <a
                  href="https://www.instagram.com/empiredesignfurniture/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#dce9df] transition-colors"
                >
                  @empiredesignfurniture
                </a>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm border border-white/10">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <p className="mb-1 text-sm uppercase tracking-[0.18em] text-[#bfd0c2]">
                  Location
                </p>
                <p className="text-white">Nairobi, Kenya</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}