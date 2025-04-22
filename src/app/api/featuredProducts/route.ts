import { NextResponse } from 'next/server';

// Products data with static image paths
const products = [
  {
    image: '/images/category-baby-care.jpg',
    title: 'Baby Care',
    price: '$7.99',
    category: 'Essentials',
  },
  {
    image: '/images/category-atta-rice-dal.jpg',
    title: 'Atta, Rice & Dal',
    price: '$11.49',
    category: 'Groceries',
  },
  {
    image: '/images/category-bakery-biscuits.jpg',
    title: 'Bakery & Biscuits',
    price: '$6.25',
    category: 'Bakery',
  },
  {
    image: '/images/category-chicken-meat-fish.jpg',
    title: 'Chicken, Meat & Fish',
    price: '$14.99',
    category: 'Non-Veg',
  },
  {
    image: '/images/category-cleaning-essentials.jpg',
    title: 'Cleaning Essentials',
    price: '$9.75',
    category: 'Household',
  },
  {
    image: '/images/category-dairy-bread-eggs.jpg',
    title: 'Dairy, Bread & Eggs',
    price: '$8.50',
    category: 'Dairy',
  },
  {
    image: '/images/category-instant-food.jpg',
    title: 'Instant Food',
    price: '$5.99',
    category: 'Snacks',
  },
  {
    image: '/images/category-pet-care.jpg',
    title: 'Pet Care',
    price: '$13.00',
    category: 'Pets',
  },
  {
    image: '/images/category-snack-munchies.jpg',
    title: 'Snack & Munchies',
    price: '$4.95',
    category: 'Snacks',
  },
  {
    image: '/images/category-tea-coffee-drinks.jpg',
    title: 'Tea, Coffee & Drinks',
    price: '$6.99',
    category: 'Beverages',
  },
  {
    image: '/images/product-img-11.jpg',
    title: 'Premium Atta Pack',
    price: '$10.99',
    category: 'Groceries',
  },
  {
    image: '/images/product-img-12.jpg',
    title: 'Biscuits Variety Pack',
    price: '$7.25',
    category: 'Bakery',
  },
];

export async function GET() {
  return NextResponse.json({ data: products }, { status: 200 });
}