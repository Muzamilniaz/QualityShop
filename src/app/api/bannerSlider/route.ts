import { NextResponse } from 'next/server';

// Banner slides data
const bannerSlides = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=1200&q=80',
    title: 'SuperMarket Daily Fresh Grocery',
    subtitle: 'Opening Sale Discount 50%',
    description:
      'Introduced a new model for online grocery shopping and convenient home delivery.',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80',
    title: 'Free Shipping on Orders Over $100',
    subtitle: 'Free Shipping - orders over $100',
    description:
      'Free Shipping to First-Time Customers Only, After promotions and discounts are applied.',
  },
];

export async function GET() {
  return NextResponse.json({ data: bannerSlides }, { status: 200 });
}