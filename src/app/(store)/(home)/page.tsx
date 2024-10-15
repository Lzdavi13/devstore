import { api } from "@/data/api";
import { Product } from "@/data/types/products";
import Image from "next/image";
import Link from "next/link";

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api("/products/featured", {
    cache: "no-store",
  });

  const products = await response.json();

  return products;
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts();

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
      >
        <Image
          src={highlightedProduct.image}
          width={900}
          height={900}
          quality={100}
          className="group-hover:scale-105 transition-transform duration-500"
          alt=""
        />
        <div className="absolute bottom-28 right-28 h-12 flex items-center max-w-[280px] gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">{highlightedProduct.title}</span>
          <span className="font-semibold flex items-center h-full justify-center rounded-full px-4 bg-violet-500">
            {highlightedProduct.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
          >
            <Image
              src={product.image}
              width={800}
              height={800}
              quality={100}
              className="group-hover:scale-105 transition-transform duration-500"
              alt=""
            />

            <div className="absolute bottom-10 right-10 h-12 flex items-center max-w-[280px] gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">{product.title}</span>
              <span className="font-semibold flex items-center h-full justify-center rounded-full px-4 bg-violet-500">
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
