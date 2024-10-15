import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
      >
        <Image
          src="/moletom-never-stop-learning 1.png"
          width={900}
          height={900}
          quality={100}
          className="group-hover:scale-105 transition-transform duration-500"
          alt=""
        />
        <div className="absolute bottom-28 right-28 h-12 flex items-center max-w-[280px] gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom Never Stop</span>
          <span className="font-semibold flex items-center h-full justify-center rounded-full px-4 bg-violet-500">
            R$128
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
      >
        <Image
          src="/moletom-java.png"
          width={800}
          height={800}
          quality={100}
          className="group-hover:scale-105 transition-transform duration-500"
          alt=""
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center max-w-[280px] gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom Never Stop</span>
          <span className="font-semibold flex items-center h-full justify-center rounded-full px-4 bg-violet-500">
            R$128
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
      >
        <Image
          src="/moletom-ia-p-devs.png"
          width={800}
          height={800}
          quality={100}
          className="group-hover:scale-105 transition-transform duration-500"
          alt=""
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center max-w-[280px] gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom Never Stop</span>
          <span className="font-semibold flex items-center h-full justify-center rounded-full px-4 bg-violet-500">
            R$128
          </span>
        </div>
      </Link>
    </div>
  );
}
