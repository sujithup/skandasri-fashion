import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function WomenCategories() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '736px' }}>
      <Image
        alt="this is a header"
        src="/images/categoriesBG.jpeg"
        layout='fill'
        objectFit='cover'
        quality={100}
      />

      {/* Black Overlay */}
      <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)', 
        }}
      />

      <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '1rem 2rem',
          color: '#fff',  
          textAlign: 'center',
          backgroundColor: "crimson"
        }}
      >
        <div style={{ marginBottom: '2rem' }}>
        Discover elegance redefined with our latest Women's Kurtha Collection, designed exclusively to celebrate your individuality. Each piece is crafted with precision, blending traditional styles with contemporary fashion to create perfect outfits for any occasion. Immerse yourself in a range of vibrant colors, exquisite patterns, and luxurious fabrics that promise both comfort and style.
        </div>
        
        <div className="btn" style={{width: "60%"}}
        >
          <Link href="/women">
          Explore the Collection
          </Link>
        </div>
        
        
      </div>
    </div>
  );
}

export default WomenCategories;
