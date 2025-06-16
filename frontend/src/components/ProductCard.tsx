import { ShoppingCart, Star } from "lucide-react";
import toast from "react-hot-toast";
import { useCartStore } from "../stores/useCartStore";
import { useUserStore } from "../stores/useUserStore";


import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProductCard({ product }: any) {
	const { user }: any = useUserStore();
  const { addToCart } = useCartStore();
  const handleAddToCart = () => {
    if (!user) {
      toast.error("Please login to add products to cart", { id: "login" });
      return;
    } else {
      // add to cart
      addToCart(product);
    }
  };


  return (
    
   <Card
        className="w-full max-w-sm overflow-hidden shadow-lg"
        style={{
          backgroundColor: "var(--color-first)",
          border: `1px solid var(--color-third)`,
        }}
      >
        <CardContent className="p-0">
          {/* Image Section */}
          <div className="relative group">
            <div
              className="aspect-square overflow-hidden"
              style={{
                backgroundColor: "var(--color-second)",
              }}
            >
              <img
                src={product.image}
                alt="image"
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Wishlist Icon */}
            {/* <button
              className="absolute top-3 right-3 p-2 rounded-full transition-colors duration-200 hover:bg-opacity-80"
              style={{
                backgroundColor: "var(--color-first)",
                color: "var(--color-fourth)",
              }}
            >
              <Heart className="w-4 h-4" />
            </button> */}
          </div>

          {/* Content Section */}
          <div className="p-4 space-y-3">
            {/* Add to Cart Button */}
            <Button
              className="w-full flex items-center justify-center gap-2 font-medium transition-colors duration-200"
              style={{
                backgroundColor: "var(--color-five)",
                color: "var(--color-first)",
              }}
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-4 h-4" />
              Add To Cart
            </Button>

            {/* Product Title */}
            <h3
              className="text-lg font-medium leading-tight"
              style={{ color: "var(--color-five)" }}
            >
              {product.name}
            </h3>

            {/* Price */}
            <div
              className="text-2xl font-bold"
              style={{ color: "var(--color-fourth)" }}
            >
              {product.price}$
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-current"
                    style={{ color: "#FFB400" }}
                  />
                ))}
              </div>
              <span className="text-sm" style={{ color: "var(--color-third)" }}>
                (65)
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    
  );
}
