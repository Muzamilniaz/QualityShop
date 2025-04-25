/* eslint-disable */
import { NextRequest, NextResponse } from "next/server";
import babyCareImg from "../../../../images/category-baby-care.jpg";
import attaRiceDalImg from "../../../../images/category-atta-rice-dal.jpg";
import bakeryBiscuitsImg from "../../../../images/category-bakery-biscuits.jpg";
import chickenMeatFishImg from "../../../../images/category-chicken-meat-fish.jpg";
import cleaningEssentialsImg from "../../../../images/category-cleaning-essentials.jpg";
import dairyBreadEggsImg from "../../../../images/category-dairy-bread-eggs.jpg";
import instantFoodImg from "../../../../images/category-instant-food.jpg";
import petCareImg from "../../../../images/category-pet-care.jpg";
import snackMunchiesImg from "../../../../images/category-snack-munchies.jpg";
import teaCoffeeDrinksImg from "../../../../images/category-tea-coffee-drinks.jpg";


const productsDetailData = [
  {
    id: 1,
    name: "Haldiram's Sev Bhujia",
    image: babyCareImg.src,
    price: "18.00 $",
    category: "Snack & Munchies",
    description: "Crispy and spicy Indian snack made with besan and spices. Perfect for tea-time munching or topping your favorite dishes.",
    weight: "500 g",
    countryOfOrigin: "India",
    quality: "Premium",
    check: "Spicy",
    minWeight: "100 Kg",
    reviews: [
      {
        reviewerName: "Priya Sharma",
        reviewerImage: "https://randomuser.me/api/portraits/women/21.jpg",
        rating: 5,
        comment: "A classic Indian snack, always my go-to for movie nights!",
        reviewDate: "2024-09-20"
      },
      {
        reviewerName: "John Lee",
        reviewerImage: "https://randomuser.me/api/portraits/men/44.jpg",
        rating: 4,
        comment: "Crunchy and flavorful, just a bit oily.",
        reviewDate: "2024-09-21"
      }
    ]
  },
  {
    id: 2,
    name: "NutriChoice Digestive",
    image: attaRiceDalImg.src,
    price: "24.00 $",
    category: "Bakery & Biscuits",
    description: "Wholesome and fiber-rich digestive biscuits for a healthy and fulfilling snack anytime during the day.",
    weight: "1 kg",
    countryOfOrigin: "India",
    quality: "Organic",
    check: "Healthy",
    minWeight: "250 Kg",
    reviews: [
      {
        reviewerName: "Maya Verma",
        reviewerImage: "https://randomuser.me/api/portraits/women/12.jpg",
        rating: 4,
        comment: "Light and healthy snack. Loved it with green tea!",
        reviewDate: "2024-09-18"
      }
    ]
  },
  {
    id: 3,
    name: "Cadbury 5 Star Chocolate",
    image: bakeryBiscuitsImg.src,
    price: "32.00 $",
    category: "Bakery & Biscuits",
    description: "A chewy chocolate bar filled with caramel and nougat. A delicious treat for all chocolate lovers.",
    weight: "200 g",
    countryOfOrigin: "UK",
    quality: "Premium",
    check: "Sweet",
    minWeight: "80 Kg",
    reviews: [
      {
        reviewerName: "Liam Parker",
        reviewerImage: "https://randomuser.me/api/portraits/men/9.jpg",
        rating: 5,
        comment: "Rich and chewy — perfect sugar rush!",
        reviewDate: "2024-09-19"
      }
    ]
  },
  {
    id: 4,
    name: "Onion Flavour Potato",
    image: chickenMeatFishImg.src,
    price: "3.00 $",
    category: "Snack & Munchies",
    description: "Crunchy potato chips bursting with tangy onion flavor. Ideal for parties, picnics, or a quick snack.",
    weight: "300 g",
    countryOfOrigin: "USA",
    quality: "Crunchy",
    check: "Tangy",
    minWeight: "90 Kg",
    reviews: [
      {
        reviewerName: "Ritika Das",
        reviewerImage: "https://randomuser.me/api/portraits/women/50.jpg",
        rating: 4,
        comment: "Super crispy with a zesty twist!",
        reviewDate: "2024-09-17"
      }
    ]
  },
  {
    id: 5,
    name: "Salted Instant Popcorn",
    image: cleaningEssentialsImg.src,
    price: "13.00 $",
    category: "Instant Food",
    description: "Ready-to-pop salted popcorn for movie nights or quick snacking. Pops perfectly in minutes.",
    weight: "500 g",
    countryOfOrigin: "USA",
    quality: "Classic",
    check: "Salty",
    minWeight: "110 Kg",
    reviews: [
      {
        reviewerName: "Jacob White",
        reviewerImage: "https://randomuser.me/api/portraits/men/31.jpg",
        rating: 5,
        comment: "Exactly what you need for movie night!",
        reviewDate: "2024-09-14"
      }
    ]
  },
  {
    id: 6,
    name: "Blueberry Greek Yogurt",
    image: dairyBreadEggsImg.src,
    price: "18.00 $",
    category: "Dairy, Bread & Eggs",
    description: "Thick and creamy Greek yogurt with real blueberries. High in protein and bursting with fruity flavor.",
    weight: "150 g",
    countryOfOrigin: "Greece",
    quality: "High Protein",
    check: "Fruity",
    minWeight: "60 Kg",
    reviews: [
      {
        reviewerName: "Sophia Malik",
        reviewerImage: "https://randomuser.me/api/portraits/women/36.jpg",
        rating: 5,
        comment: "So creamy and fruity, a breakfast must!",
        reviewDate: "2024-09-22"
      }
    ]
  },
  {
    id: 7,
    name: "Britannia Cheese Slices",
    image: instantFoodImg.src,
    price: "24.00 $",
    category: "Dairy, Bread & Eggs",
    description: "Smooth and tasty cheese slices, perfect for sandwiches, burgers, or as a snack on the go.",
    weight: "200 g",
    countryOfOrigin: "India",
    quality: "Processed",
    check: "Tasty",
    minWeight: "120 Kg",
    reviews: [
      {
        reviewerName: "Neha Kapoor",
        reviewerImage: "https://randomuser.me/api/portraits/women/8.jpg",
        rating: 4,
        comment: "Great for grilled sandwiches. Melts well.",
        reviewDate: "2024-09-23"
      }
    ]
  },
  {
    id: 8,
    name: "Kellogg's Original Cereals",
    image: petCareImg.src,
    price: "32.00 $",
    category: "Instant Food",
    description: "Classic breakfast cereal made with corn and essential nutrients. A healthy start to your day.",
    weight: "750 g",
    countryOfOrigin: "USA",
    quality: "Healthy",
    check: "Nutritious",
    minWeight: "300 Kg",
    reviews: [
      {
        reviewerName: "Aditya Joshi",
        reviewerImage: "https://randomuser.me/api/portraits/men/22.jpg",
        rating: 5,
        comment: "Classic breakfast, never disappoints.",
        reviewDate: "2024-09-15"
      }
    ]
  },
  {
    id: 9,
    name: "Slurrp Millet Chocolate",
    image: snackMunchiesImg.src,
    price: "3.00 $",
    category: "Snack & Munchies",
    description: "Healthy millet-based chocolate snack. Great alternative to regular candy bars for kids and adults.",
    weight: "100 g",
    countryOfOrigin: "India",
    quality: "Millet",
    check: "Kid-friendly",
    minWeight: "90 Kg",
    reviews: [
      {
        reviewerName: "Emma Paul",
        reviewerImage: "https://randomuser.me/api/portraits/women/60.jpg",
        rating: 4,
        comment: "My kids love it and it’s healthy too!",
        reviewDate: "2024-09-12"
      }
    ]
  },
  {
    id: 10,
    name: "Amul Butter - 500 g",
    image: teaCoffeeDrinksImg.src,
    price: "13.00 $",
    category: "Dairy, Bread & Eggs",
    description: "Rich and creamy Amul butter, ideal for cooking, baking, or spreading on toast.",
    weight: "500 g",
    countryOfOrigin: "India",
    quality: "Creamy",
    check: "Rich Flavor",
    minWeight: "150 Kg",
    reviews: [
      {
        reviewerName: "Rohan Desai",
        reviewerImage: "https://randomuser.me/api/portraits/men/30.jpg",
        rating: 5,
        comment: "Nothing beats the taste of Amul butter!",
        reviewDate: "2024-09-16"
      }
    ]
  },
  {
    id: 11,
    name: "Organic Digestive Biscuits",
    image: attaRiceDalImg.src,
    price: "27.00 $",
    category: "Bakery & Biscuits",
    description: "Wholesome and fiber-rich digestive biscuits for a healthy and fulfilling snack anytime during the day.",
    weight: "1 kg",
    countryOfOrigin: "India",
    quality: "Organic",
    check: "Wholesome",
    minWeight: "300 Kg",
    reviews: [
      {
        reviewerName: "Anjali Mehta",
        reviewerImage: "https://randomuser.me/api/portraits/women/28.jpg",
        rating: 5,
        comment: "Perfect healthy biscuit with tea, really satisfying!",
        reviewDate: "2024-09-24"
      }
    ]
  }
];


export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId)) {
    return NextResponse.json({ error: 'Invalid product ID' }, { status: 400 });
  }

  const product = productsDetailData.find((p) => p.id === parsedId);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}

