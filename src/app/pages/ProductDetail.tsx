import { useParams, Link, useNavigate } from 'react-router';
import { ArrowLeft, ShoppingCart, Check } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { ProductCard } from '../components/ProductCard';
import { useState } from 'react';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f6f1] px-4">
        <div className="text-center">
          <h2 className="mb-4 font-serif text-3xl text-[#1f2d22]">
            Product not found
          </h2>
          <p className="mb-6 text-[#66776a]">
            The product you are looking for does not exist.
          </p>
          <Link to="/shop">
            <Button className="bg-[#234b34] hover:bg-[#1b3d2a] text-white">
              Back to Shop
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f8f6f1] py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8 text-[#234b34] hover:bg-[#eaf1ea] hover:text-[#1b3d2a]"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        {/* Product Details */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mb-20 items-center">
          {/* Image */}
          <div className="overflow-hidden rounded-3xl border border-[#dce6db] bg-white shadow-sm">
            <div className="aspect-square overflow-hidden bg-[#eef3ec]">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#5b725f]">
              {product.category}
            </p>

            <h1 className="mb-4 font-serif text-4xl md:text-5xl leading-tight text-[#1f2d22]">
              {product.name}
            </h1>

            <p className="mb-6 text-3xl md:text-4xl font-serif text-[#234b34]">
              KSh {product.price.toLocaleString()}
            </p>

            <p className="mb-8 text-lg leading-relaxed text-[#5f6f63]">
              {product.description}
            </p>

            {/* Premium Features */}
            <div className="mb-8 rounded-2xl border border-[#dce6db] bg-white p-6 shadow-sm">
              <h3 className="mb-4 font-serif text-2xl text-[#1f2d22]">
                Why You’ll Love It
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#eaf1ea]">
                    <Check className="h-4 w-4 text-[#234b34]" />
                  </span>
                  <p className="text-[#4f6153]">
                    Free shipping on orders over KSh 50,000
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#eaf1ea]">
                    <Check className="h-4 w-4 text-[#234b34]" />
                  </span>
                  <p className="text-[#4f6153]">Quality guarantee</p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#eaf1ea]">
                    <Check className="h-4 w-4 text-[#234b34]" />
                  </span>
                  <p className="text-[#4f6153]">Premium quality materials</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                onClick={handleAddToCart}
                className={`flex-1 h-12 text-base ${
                  added
                    ? 'bg-[#2f6b47] hover:bg-[#2f6b47] text-white'
                    : 'bg-[#234b34] hover:bg-[#1b3d2a] text-white'
                }`}
              >
                {added ? (
                  <>
                    <Check className="mr-2 h-5 w-5" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </>
                )}
              </Button>

              <a
                href={`https://wa.me/254702694794?text=Hello!%20I%20would%20like%20to%20order%20${encodeURIComponent(
                  product.name
                )}%20-%20KSh%20${product.price.toLocaleString()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  size="lg"
                  className="w-full h-12 bg-[#25D366] hover:bg-[#20BD5A] text-white"
                >
                  Order via WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-4">
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#5b725f]">
                More to Explore
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1f2d22]">
                You May Also Like
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="rounded-2xl overflow-hidden bg-white border border-[#e7e2d9] shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <ProductCard product={relatedProduct} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}