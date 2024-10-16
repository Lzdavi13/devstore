"use client";

import { useCart } from "@/contexts/cart-context";

interface AddToCartButtonProps {
  productId: number;
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  function handleAddProductToCart() {
    addToCart(productId);
  }

  return (
    <button
      className="mt-8 flex h-12 w-full items-center justify-center rounded-full bg-emerald-500 font-semibold px-5"
      onClick={handleAddProductToCart}
      type="button"
    >
      Adicionar ao carrinho
    </button>
  );
}
