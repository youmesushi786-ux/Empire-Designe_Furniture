import { Outlet, Link } from 'react-router';
import { Header } from './Header';
import { WhatsAppButton } from './WhatsAppButton';
import { Instagram, Phone, MapPin, Music2 } from 'lucide-react';

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f6f1] text-[#1f2d22]">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <WhatsAppButton />

      <footer className="border-t border-[#dbe5da] bg-[#f1f5f0] pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#6d816f]">
                Premium Living
              </p>
              <h3 className="mb-4 font-serif text-3xl text-[#234b34]">
                Empire Design Furniture
              </h3>
              <p className="mb-5 max-w-sm text-sm leading-relaxed text-[#66776a]">
                Kenya&apos;s premium destination for stylish, elegant, and
                quality home and office furniture crafted to elevate every
                space.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/empiredesignfurniture/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d6e1d5] bg-white text-[#234b34] transition-all hover:bg-[#234b34] hover:text-white"
                >
                  <Instagram className="h-4 w-4" />
                </a>

                <a
                  href="https://www.tiktok.com/@empire.design.fur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d6e1d5] bg-white text-[#234b34] transition-all hover:bg-[#234b34] hover:text-white"
                >
                  <Music2 className="h-4 w-4" />
                </a>

                <a
                  href="tel:0702694794"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d6e1d5] bg-white text-[#234b34] transition-all hover:bg-[#234b34] hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-5 font-serif text-2xl text-[#1f2d22]">Shop</h4>
              <ul className="space-y-3 text-sm text-[#66776a]">
                <li>
                  <Link to="/shop" className="transition-colors hover:text-[#234b34]">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="transition-colors hover:text-[#234b34]">
                    Beds
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="transition-colors hover:text-[#234b34]">
                    Sofas
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="transition-colors hover:text-[#234b34]">
                    Dining Tables
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="transition-colors hover:text-[#234b34]">
                    TV Stands
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-5 font-serif text-2xl text-[#1f2d22]">Company</h4>
              <ul className="space-y-3 text-sm text-[#66776a]">
                <li>
                  <Link to="/about" className="transition-colors hover:text-[#234b34]">
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="tel:0702694794" className="transition-colors hover:text-[#234b34]">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/254702694794"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#234b34]"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@empire.design.fur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#234b34]"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-5 font-serif text-2xl text-[#1f2d22]">Contact Us</h4>
              <ul className="space-y-4 text-sm text-[#66776a]">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-white border border-[#d6e1d5] text-[#234b34]">
                    <Phone className="h-4 w-4" />
                  </span>
                  <a
                    href="tel:0702694794"
                    className="transition-colors hover:text-[#234b34]"
                  >
                    0702 694 794
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-white border border-[#d6e1d5] text-[#234b34]">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span>Nairobi, Kenya</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-white border border-[#d6e1d5] text-[#234b34]">
                    <Instagram className="h-4 w-4" />
                  </span>
                  <a
                    href="https://www.instagram.com/empiredesignfurniture/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#234b34]"
                  >
                    @empiredesignfurniture
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-white border border-[#d6e1d5] text-[#234b34]">
                    <Music2 className="h-4 w-4" />
                  </span>
                  <a
                    href="https://www.tiktok.com/@empire.design.fur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#234b34]"
                  >
                    @empire.design.fur
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-[#dbe5da] pt-6 text-center text-sm text-[#7a8b7d]">
            <p>&copy; 2026 Empire Design Furniture. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}