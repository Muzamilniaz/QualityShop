import { NextResponse } from 'next/server';

const stores = [
  "eGrocery",
  "DealShare",
  "DMart",
  "Blinkit",
  "BigBasket",
  "StoreFront",
  "Spencers",
  "Online Grocery",
];

export async function GET() {
  return NextResponse.json(stores);
}