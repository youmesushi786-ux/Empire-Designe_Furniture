import { Link } from 'react-router';
import { ShoppingCart, Check } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Card className="group overflow-hidden rounded-2xl border border-[#e3e9e2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-[#eef3ec]">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {product.featured && (
            <div className="absolute left-4 top-4 rounded-full bg-[#234b34] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white shadow-sm">
              Featured
            </div>
          )}
        </div>
      </Link>

      <CardContent className="p-5">
        <Link to={`/product/${product.id}`} className="block">
          <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-[#738477]">
            {product.category}
          </p>

          <h3 className="mb-3 font-serif text-2xl leading-snug text-[#1f2d22] transition-colors duration-300 group-hover:text-[#234b34]">
            {product.name}
          </h3>

          <p className="font-serif text-2xl text-[#234b34]">
            KSh {product.price.toLocaleString()}
          </p>
        </Link>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button
          onClick={handleAddToCart}
          className={`w-full h-11 text-base ${
            added
              ? 'bg-[#2f6b47] hover:bg-[#2f6b47] text-white'
              : 'bg-[#234b34] hover:bg-[#1b3d2a] text-white'
          }`}
          variant="default"
        >
          {added ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}