import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <form
          className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
          action=""
        >
          <Search className="h-5 w-5" />

          <input
            className="flex-1 rounded-full bg-transparent text-sm outline-none"
            placeholder="Buscar produtos..."
          />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-4 w-5" />
          <span className="text-sm">Cart (0)</span>
        </div>

        <div className="w-px h-4 bg-zinc-700" />

        <Link className="flex items-center gap-2 hover:underline" href="/">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/Lzdavi13.png"
            className="w-6 h-6 rounded-full"
            width={24}
            height={24}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
