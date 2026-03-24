import { Link } from 'react-router';
import { ShoppingCart, Menu, Instagram, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export function Header() {
  const { totalItems } = useCart();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#dbe5da] bg-[#f8f6f1]/95 backdrop-blur supports-[backdrop-filter]:bg-[#f8f6f1]/80">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="leading-tight">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#718574]">
                Premium Living
              </p>
              <h1 className="font-serif text-2xl md:text-3xl text-[#234b34] leading-none">
                Empire Design
              </h1>
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#718574] mt-1">
                Furniture
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm uppercase tracking-[0.18em] text-[#4e5f52] transition-colors hover:text-[#234b34]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-2 md:space-x-3">
            {/* Social Links - Desktop */}
            <a
              href="https://www.instagram.com/empiredesignfurniture/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-[#234b34] hover:bg-[#eaf1ea] hover:text-[#1b3d2a]"
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </a>

            <a href="tel:0702694794" className="hidden md:block">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-[#234b34] hover:bg-[#eaf1ea] hover:text-[#1b3d2a]"
              >
                <Phone className="h-5 w-5" />
              </Button>
            </a>

            {/* Cart */}
            <Link to="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="relative rounded-full text-[#234b34] hover:bg-[#eaf1ea] hover:text-[#1b3d2a]"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#234b34] px-1 text-[10px] font-medium text-white shadow-sm">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden rounded-full text-[#234b34] hover:bg-[#eaf1ea] hover:text-[#1b3d2a]"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[300px] border-l border-[#dbe5da] bg-[#f8f6f1]"
              >
                <div className="mt-8">
                  <div className="mb-8 border-b border-[#dbe5da] pb-6">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-[#718574]">
                      Premium Living
                    </p>
                    <h2 className="mt-2 font-serif text-3xl text-[#234b34]">
                      Empire Design
                    </h2>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.35em] text-[#718574]">
                      Furniture
                    </p>
                  </div>

                  <nav className="flex flex-col space-y-5">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-base uppercase tracking-[0.18em] text-[#445347] transition-colors hover:text-[#234b34]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-8 border-t border-[#dbe5da] pt-6 space-y-4">
                    <a
                      href="https://www.instagram.com/empiredesignfurniture/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-[#445347] hover:text-[#234b34] transition-colors"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d6e1d5] bg-white text-[#234b34]">
                        <Instagram className="h-4 w-4" />
                      </span>
                      <span>Instagram</span>
                    </a>

                    <a
                      href="tel:0702694794"
                      className="flex items-center space-x-3 text-[#445347] hover:text-[#234b34] transition-colors"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d6e1d5] bg-white text-[#234b34]">
                        <Phone className="h-4 w-4" />
                      </span>
                      <span>0702 694 794</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}