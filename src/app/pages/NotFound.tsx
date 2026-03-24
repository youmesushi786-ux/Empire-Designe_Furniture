import { Link } from 'react-router';
import { Button } from '../components/ui/button';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f6f1] px-4">
      <div className="text-center max-w-xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#5b725f]">
          Page Not Found
        </p>

        <h1 className="mb-4 font-serif text-5xl md:text-6xl text-[#1f2d22]">
          404
        </h1>

        <h2 className="mb-4 font-serif text-3xl md:text-4xl text-[#234b34]">
          This page does not exist
        </h2>

        <p className="mb-8 text-lg leading-relaxed text-[#66776a]">
          The page you are looking for may have been moved, removed, or the link
          may be incorrect.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-[#234b34] hover:bg-[#1b3d2a] text-white px-8">
              Back Home
            </Button>
          </Link>

          <Link to="/shop">
            <Button
              variant="outline"
              className="border-[#234b34] text-[#234b34] hover:bg-[#234b34] hover:text-white px-8"
            >
              Browse Furniture
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}