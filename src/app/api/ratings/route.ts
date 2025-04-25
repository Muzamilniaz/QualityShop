import { NextResponse } from "next/server";

export async function GET() {
  const ratingOptions = [
    { id: "ratingFive", stars: 5, label: "★★★★★" },
    { id: "ratingFour", stars: 4, label: "★★★★☆" },
    { id: "ratingThree", stars: 3, label: "★★★☆☆" },
    { id: "ratingTwo", stars: 2, label: "★★☆☆☆" },
    { id: "ratingOne", stars: 1, label: "★☆☆☆☆" }
  ];

  return NextResponse.json(ratingOptions);
}
