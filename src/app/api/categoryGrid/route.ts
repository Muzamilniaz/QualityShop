import { NextResponse } from 'next/server';


const categories = [
  { id: 1, title: 'Pizza', icon: 'FaPizzaSlice' },
  { id: 2, title: 'Coffee', icon: 'FaCoffee' },
  { id: 3, title: 'Ice Cream', icon: 'FaIceCream' },
  { id: 4, title: 'Seafood', icon: 'FaFish' },
  { id: 5, title: 'Fruits', icon: 'FaAppleAlt' },
  { id: 6, title: 'Burgers', icon: 'FaHamburger' },
];

export async function GET() {
  return NextResponse.json({ data: categories }, { status: 200 });
}