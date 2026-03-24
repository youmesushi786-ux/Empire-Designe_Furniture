import { Link } from 'react-router';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';

export function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCart();

  const deliveryFee = totalPrice > 50000 ? 0 : 1500;
  const finalTotal = totalPrice + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f6f1] px-4">
        <div className="text-center max-w-md">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#eaf1ea]">
            <ShoppingBag className="h-10 w-10 text-[#234b34]" />
          </div>
          <h2 className="mb-3 font-serif text-3xl text-[#1f2d22]">
            Your cart is empty
          </h2>
          <p className="mb-6 text-[#66776a] leading-relaxed">
            Add some beautiful furniture to your cart and start creating a more
            elegant living space.
          </p>
          <Link to="/shop">
            <Button
              size="lg"
              className="bg-[#234b34] hover:bg-[#1b3d2a] text-white px-8"
            >
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f6f1] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#5b725f]">
            Your Selection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1f2d22]">
            Shopping Cart
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-5">
            {items.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden rounded-2xl border border-[#dde6dc] bg-white shadow-sm"
              >
                <CardContent className="p-5">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                    {/* Image */}
                    <Link
                      to={`/product/${item.id}`}
                      className="flex-shrink-0"
                    >
                      <div className="h-28 w-full sm:w-28 rounded-xl overflow-hidden bg-[#eef3ec]">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </Link>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <Link to={`/product/${item.id}`}>
                        <h3 className="mb-1 font-serif text-2xl text-[#1f2d22] hover:text-[#234b34] transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="mb-2 text-sm uppercase tracking-[0.15em] text-[#758579]">
                        {item.category}
                      </p>
                      <p className="text-lg font-semibold text-[#234b34]">
                        KSh {item.price.toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity + Remove */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between gap-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                        className="h-9 w-9 text-[#7d8f81] hover:text-[#b42318] hover:bg-[#f8eaea]"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>

                      <div className="flex items-center gap-2 rounded-full border border-[#d8e3d7] bg-[#f7faf6] px-2 py-1">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="h-8 w-8 rounded-full border-[#d8e3d7] bg-white text-[#234b34] hover:bg-[#eaf1ea]"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>

                        <span className="w-8 text-center font-medium text-[#1f2d22]">
                          {item.quantity}
                        </span>

                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="h-8 w-8 rounded-full border-[#d8e3d7] bg-white text-[#234b34] hover:bg-[#eaf1ea]"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button
              variant="outline"
              onClick={clearCart}
              className="w-full border-[#234b34] text-[#234b34] hover:bg-[#234b34] hover:text-white"
            >
              Clear Cart
            </Button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20 rounded-2xl border border-[#dde6dc] bg-white shadow-sm">
              <CardContent className="p-6">
                <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#5b725f]">
                  Summary
                </p>
                <h2 className="mb-4 font-serif text-3xl text-[#1f2d22]">
                  Order Summary
                </h2>

                <Separator className="mb-5" />

                <div className="space-y-4 mb-5">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#6f8073]">Subtotal</span>
                    <span className="text-[#1f2d22] font-medium">
                      KSh {totalPrice.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-[#6f8073]">Delivery (Nairobi)</span>
                    <span className="text-[#1f2d22] font-medium">
                      {deliveryFee === 0 ? 'Free' : `KSh ${deliveryFee.toLocaleString()}`}
                    </span>
                  </div>
                </div>

                <Separator className="mb-5" />

                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-medium text-[#1f2d22]">Total</span>
                  <span className="font-serif text-2xl text-[#234b34]">
                    KSh {finalTotal.toLocaleString()}
                  </span>
                </div>

                <a
                  href={`https://wa.me/254702694794?text=Hello!%20I%20would%20like%20to%20place%20an%20order.%20My%20cart%20total%20is%20KSh%20${finalTotal.toLocaleString()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="w-full mb-3 bg-[#25D366] hover:bg-[#20BD5A] text-white"
                    size="lg"
                  >
                    Complete Order via WhatsApp
                  </Button>
                </a>

                <Link to="/shop">
                  <Button
                    variant="outline"
                    className="w-full border-[#234b34] text-[#234b34] hover:bg-[#234b34] hover:text-white"
                  >
                    Continue Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}