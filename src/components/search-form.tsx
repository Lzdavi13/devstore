"use client";

import { Search } from "lucide-react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export function SearchForm() {
  const router = useRouter();

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data = Object.fromEntries(formData);

    const query = data.q;

    if (!query) {
      return;
    }

    router.push(`/search?q=${query}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
    >
      <Search className="h-5 w-5" />

      <input
        name="q"
        className="flex-1 rounded-full bg-transparent text-sm outline-none"
        placeholder="Buscar produtos..."
        required
      />
    </form>
  );
}
