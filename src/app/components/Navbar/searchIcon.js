'use client';
import { useRouter } from 'next/navigation';
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search() {
  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmit} className="relative w-full max-w-full lg:w-full xl:w-full">
      <input
        type="text"
        name="search"
        placeholder="Search"
        autoComplete="off"
        className="w-full rounded-lg border border-purple bg-white/80 px-4 py-2 text-sm outline-none placeholder:text-purple focus-visible:outline"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <FaMagnifyingGlass className="h-4" />
      </div>
    </form>
  );
}
