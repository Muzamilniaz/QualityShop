import { NextResponse } from 'next/server';

const navbarItems = [
  { id: 1, img: '/images/dairy-bread-eggs.png', label: 'Electronics' },
  { id: 2, img: '/images/fruits-vegetables.png', label: 'Fashion' },
  { id: 3, img: '/images/snack-munchies.png', label: 'Home & Garden' },
  { id: 4, img: '/images/bakery-biscuits.png', label: 'Beauty' },
  { id: 5, img: '/images/instant-food.png', label: 'Toys' },
  { id: 6, img: '/images/tea-coffee-drinks.png', label: 'Sports' },
  { id: 7, img: '/images/cold-drinks-juices.png', label: 'Automotive' },
  { id: 8, img: '/images/chicken-meat-fish.png', label: 'Books' },
  { id: 9, img: '/images/baby-care.png', label: 'Grocery' },
  { id: 10, img: '/images/cleaning-essentials.png', label: 'Health' },
];

export async function GET() {
  return NextResponse.json({ data: navbarItems }, { status: 200 });
}