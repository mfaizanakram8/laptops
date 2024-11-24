import Image from 'next/image';
import React from 'react';

const products = [
  {
    id: 1,
    title: "TCL Full HD Smart Android LED TV, 49 Inch 49S6500",
    category: "SMART TVS",
    price: "PKR 699,000",
    originalPrice: "PKR 999,000",
    discount: "33% OFF",
    image: "/sav1.jpg",
  },
  {
    id: 2,
    title: "SAMSUNG 65'' Q60B QLED 4K Smart TV",
    category: "4K RESOLUTION SMART TVS",
    price: "PKR 1,899,000",
    originalPrice: "PKR 2,499,000",
    discount: "25% OFF",
    image: "/sav1.jpg",
  },
  {
    id: 3,
    title: "HP Pavilion Gaming Laptop, 15.6'' FHD",
    category: "GAMING LAPTOPS",
    price: "PKR 459,000",
    originalPrice: "PKR 599,000",
    discount: "23% OFF",
    image: "/sav1.jpg",
  },
  {
    id: 4,
    title: "Dell XPS 13 Plus, 13.4'' 4K OLED Touch",
    category: "PREMIUM LAPTOPS",
    price: "PKR 859,000",
    originalPrice: "PKR 999,000",
    discount: "15% OFF",
    image: "/sav1.jpg",
  },
  {
    id: 5,
    title: "Lenovo Chromebook Flex 5, 13.3'' FHD",
    category: "CHROMEBOOKS",
    price: "PKR 259,000",
    originalPrice: "PKR 359,000",
    discount: "28% OFF",
    image: "/sav1.jpg",
  },
  {
    id: 6,
    title: "MacBook Air M2, 13.6'' Liquid Retina",
    category: "APPLE LAPTOPS",
    price: "PKR 959,000",
    originalPrice: "PKR 1,199,000",
    discount: "20% OFF",
    image: "/sav1.jpg",
  },
  {
    id: 7,
    title: "LG 55'' C2 4K OLED evo Smart TV",
    category: "OLED TVS",
    price: "PKR 1,299,000",
    originalPrice: "PKR 1,799,000",
    discount: "27% OFF",
    image: "/sav1.jpg",
  },
  {
    id: 8,
    title: "ASUS ROG Strix G15 Gaming Laptop",
    category: "GAMING LAPTOPS",
    price: "PKR 759,000",
    originalPrice: "PKR 959,000",
    discount: "21% OFF",
    image: "/sav1.jpg",
  },
  {
    id: 9,
    title: "Sony X90K 65'' 4K HDR LED Smart TV",
    category: "SMART TVS",
    price: "PKR 1,599,000",
    originalPrice: "PKR 1,999,000",
    discount: "20% OFF",
    image: "/sav1.jpg",
  },
  {
    id: 10,
    title: "Acer Chromebook Spin 713, 13.5'' 2K",
    category: "CHROMEBOOKS",
    price: "PKR 329,000",
    originalPrice: "PKR 459,000",
    discount: "28% OFF",
    image: "/sav1.jpg",
  },
  {
    id: 11,
    title: "Microsoft Surface Laptop 5, 13.5''",
    category: "PREMIUM LAPTOPS",
    price: "PKR 659,000",
    originalPrice: "PKR 859,000",
    discount: "23% OFF",
    image: "/sav1.jpg",
  },
  {
    id: 12,
    title: "Samsung Galaxy Book3 Pro 360",
    category: "2-IN-1 LAPTOPS",
    price: "PKR 559,000",
    originalPrice: "PKR 699,000",
    discount: "20% OFF",
    image: "/sav1.jpg",
  }
];

const Home = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-center text-3xl font-bold mb-8">Our Latest Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1"
          >
            <div className="relative overflow-hidden rounded-t-2xl">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                  {product.discount}
                </span>
              </div>
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                  New Arrival
                </span>
              </div>
              <Image
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                width={192}
                height={192}
              />
            </div>
            <div className="p-5">
              <div className="flex flex-col h-full">
                <p className="text-xs text-blue-500 font-semibold uppercase tracking-wider mb-2">
                  {product.category}
                </p>
                <h3 className="text-lg font-medium text-gray-800 mb-3 line-clamp-2 min-h-[56px] group-hover:text-blue-500 transition-colors">
                  {product.title}
                </h3>
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex flex-col">
                      <p className="text-blue-600 font-bold text-xl">{product.price}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 line-through text-sm">
                          {product.originalPrice}
                        </span>
                        <span className="text-red-500 text-sm font-semibold">
                          {product.discount}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-1">★★★★</span>
                      <span className="text-gray-400">★</span>
                    </div>
                  </div>
                  <button className="w-full bg-blue-500 text-white py-3 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-600 transform translate-y-2 group-hover:translate-y-0 font-medium">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
