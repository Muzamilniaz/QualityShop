import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

interface SidebarImageProps {
  img: StaticImageData;
}

const sidebar_image = ({ img }: SidebarImageProps) => {
  return (
    <div className="py-6 relative">
    <Image
      src={img}
      alt="Fresh Fruits"
      width={200}
      height={200}
      className="rounded-lg w-full"
    />
    <div className="absolute top-3 p-6">
      <h3 className="text-xl font-bold text-black">
        Fresh Fruits
      </h3>
      <p className="text-black">Get Up to 25% Off</p>
      <Link
        href="/shop"
        className="mt-2 inline-block bg-black text-white px-4 py-2 rounded-lg"
      >
        Shop Now
        <svg
          className="inline-block h-4 w-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  </div>
  )
}

export default sidebar_image
