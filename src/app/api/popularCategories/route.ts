import { NextResponse } from 'next/server';


const categories = [
  { img: '/images/dairy-bread-eggs.png', label: 'Dairy, Bread & Eggs' },
  { img: '/images/fruits-vegetables.png', label: 'Fruits & Vegetables' },
  { img: '/images/snack-munchies.png', label: 'Snack & Munchies' },
  { img: '/images/bakery-biscuits.png', label: 'Bakery & Biscuits' },
  { img: '/images/instant-food.png', label: 'Instant Food' },
  { img: '/images/tea-coffee-drinks.png', label: 'Tea, Coffee & Drinks' },
  { img: '/images/cold-drinks-juices.png', label: 'Cold Drinks & Juices' },
  { img: '/images/chicken-meat-fish.png', label: 'Chicken, Meat & Fish' },
  { img: '/images/baby-care.png', label: 'Baby Care' },
  { img: '/images/cleaning-essentials.png', label: 'Cleaning Essentials' },
  { img: '/images/pet-care.png', label: 'Pet Care' },
  { img: '/images/atta-rice-dal.png', label: 'Atta, Rice & Dal' },
];

export async function GET() {
  return NextResponse.json({ data: categories }, { status: 200 });
}