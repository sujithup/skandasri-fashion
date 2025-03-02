'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit() {
    e.preventDefault();

    const val = e.target;
    const search = val.search;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set('q', search.value);
    } else {
      newParams.delete('q');
    }

    router.push(createUrl('/search', newParams));
  }

  return (
    <form onSubmit={onSubmit} className="relative w-full max-w-full lg:w-full xl:w-full">
      <input
        key={searchParams?.get('q')}
        type="text"
        name="search"
        placeholder="Search for products..."
        autoComplete="off"
        defaultValue={searchParams?.get('q') || ''}
        className="w-full rounded-lg border border-purple bg-white/80 px-4 py-2 text-sm outline-none placeholder:text-purple focus-visible:outline"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <FaMagnifyingGlass className="h-4" />
      </div>
    </form>
  );
}