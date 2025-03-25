import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function WomenCategories() {
  return (
    <div className="relative w-full h-[736px]">
      <Image
        alt="this is a header"
        src="/images/categoriesBG.jpeg"
        layout='fill'
        objectFit='cover'
        quality={100}
      />

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40" />

      {/* Text and Button Container */}
      <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 text-center text-white bg-crimson w-11/12 sm:w-2/3 md:w-1/2 bg-red-600">
        <p className="mb-4">
          Discover elegance redefined with our latest Women's Kurtha Collection, designed exclusively to celebrate your individuality.
        </p>
        
        <Link href="/women"  className="btn max-w-52">
        
            View All
        </Link>
      </div>
    </div>
  );
}

export default WomenCategories;
