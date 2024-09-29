"use client";
import React, { useState } from "react";

// Sample JSON data
const menuData = [
  {
    category: "Items at 189",
    items: [
      {
        id: 1,
        name: "Fiery Sausage & Paprika",
        price: 189,
        originalPrice: 249,
        veg: false,
        image:
          "https://plus.unsplash.com/premium_photo-1664391878396-a72747167869?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        customisable: true,
      },
      {
        id: 2,
        name: "Pepper Barbecue Chicken Pizza",
        price: 189,
        originalPrice: 259,
        veg: false,
        image:
          "https://media.istockphoto.com/id/2118981067/photo/margherita-pizza.webp?a=1&s=612x612&w=0&k=20&c=U5JweC3Tmfkh_R1AyeSSU-ybXWMrNN_jFQOm2qfgYZA=",

        customisable: true,
      },
      {
        id: 3,
        name: "Peppy Paneer Pizza",
        price: 189,
        originalPrice: 269,
        veg: true,
        image:
          "https://images.unsplash.com/photo-1573821663912-569905455b1c?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        customisable: true,
      },
    ],
  },
  {
    category: "Items at 299",
    items: [
      {
        id: 4,
        name: "Margherita Pizza",
        price: 299,
        originalPrice: 349,
        veg: true,
        image:
          "https://media.istockphoto.com/id/692310442/photo/good-food-and-great-drinks.webp?a=1&s=612x612&w=0&k=20&c=Fs8XXHQzP7HAS7flik240JO5d76E6x6awQsRveD-j8I=",
        customisable: true,
      },
      {
        id: 5,
        name: "Chicken Tikka Pizza",
        price: 299,
        originalPrice: 369,
        veg: false,
        image:
          "https://images.unsplash.com/photo-1573821663912-6df460f9c684?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        customisable: true,
      },
      {
        id: 6,
        name: "Veggie Supreme Pizza",
        price: 299,
        originalPrice: 379,
        veg: true,
        image:
          "https://media.istockphoto.com/id/1360802365/photo/pizza.webp?a=1&s=612x612&w=0&k=20&c=1Z_GLSIF4N2kAzCGTZ-uOqAWsb_SbyWWdNJkkns00vQ=",
        customisable: true,
      },
    ],
  },
  {
    category: "Beverages",
    items: [
      {
        id: 7,
        name: "Classic Lemonade",
        price: 79,
        originalPrice: 99,
        veg: true,
        image:
          "https://media.istockphoto.com/id/1141248472/photo/shikanji-nimbu-pani-is-a-popular-cold-drink-from-india.jpg?s=612x612&w=0&k=20&c=1-go7FkmoawKrXdEW2cC2PiouOq1ZuoCDdMlJRCjiac=",
        customisable: false,
      },
      {
        id: 8,
        name: "Iced Tea",
        price: 89,
        originalPrice: 119,
        veg: true,
        image:
          "https://plus.unsplash.com/premium_photo-1664392087859-815b337c3324?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWNlJTIwdGVhfGVufDB8fDB8fHww",
        customisable: false,
      },
      {
        id: 9,
        name: "Chocolate Milkshake",
        price: 129,
        originalPrice: 149,
        veg: true,
        image:
          "https://images.unsplash.com/photo-1586985288810-d89b22db3f05?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlsa3NoYWtlfGVufDB8fDB8fHww",
        customisable: false,
      },
    ],
  },
  {
    category: "Sides",
    items: [
      {
        id: 10,
        name: "Garlic Breadsticks",
        price: 99,
        originalPrice: 129,
        veg: true,
        image:
          "https://images.unsplash.com/photo-1558679582-7fe9071024c9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FybGljJTIwYnJlYWR8ZW58MHx8MHx8fDA%3D",
        customisable: false,
      },
      {
        id: 11,
        name: "Chicken Wings",
        price: 149,
        originalPrice: 199,
        veg: false,
        image:
          "https://plus.unsplash.com/premium_photo-1669742928007-71b99d6ab1dd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3w1fHx8ZW58MHx8fHx8",
        customisable: false,
      },
      {
        id: 12,
        name: "Cheese Dip",
        price: 49,
        originalPrice: 69,
        veg: true,
        image:
          "https://images.unsplash.com/photo-1572040975635-c561ad4f2fd5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZXNlJTIwZGlwfGVufDB8fDB8fHww",
        customisable: false,
      },
    ],
  },
];

const MenuScreen = () => {
  const [currentCategory, setCurrentCategory] = useState("Items at 189");

  return (
    <div className="container mx-auto p-4">
      {/* Search Bar */}
      {/* <div className="sticky top-0 bg-white z-50">
        <div className="flex items-center justify-between py-2">
          <input
            type="text"
            placeholder="Search in Menu..."
            className="border rounded-lg w-full p-2"
          />
        </div> */}
      {/* Filters */}
      {/* <div className="flex justify-between my-2 space-x-2">
          <button className="flex-1 bg-gray-100 p-2 rounded-lg">Veg/Non-Veg</button>
          <button className="flex-1 bg-gray-100 p-2 rounded-lg">Ratings 4.0+</button>
          <button className="flex-1 bg-gray-100 p-2 rounded-lg">Bestseller</button>
        </div>
      </div> */}

      {/* Category Section */}
      {menuData.map((categoryData, index) => (
        <div key={index} className="mt-4">
          <div className="sticky top-0 bg-gray-100 p-2 z-10 shadow-md">
            <h2 className="font-semibold text-lg">
              {categoryData.category} ({categoryData.items.length})
            </h2>
          </div>

          {/* Product Items */}
          <div className="grid grid-cols-1 gap-4 mt-2">
            {categoryData.items.map((item) => (
              <div
                key={item.id}
                className="flex items-start space-x-4 border-b pb-4"
              >
                {/* Item Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />

                {/* Item Details */}
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    {/* Veg/Non-Veg Icon */}
                    {/* <span
                      className={`w-4 h-4 rounded-full ${
                        item.veg ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></span> */}
                    <span
                      className="flex items-center justify-center w-5 h-5 border-2 rounded-sm"
                      style={{ borderColor: item.veg ? "lightgreen" : "red" }}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          item.veg ? "bg-green-500" : "bg-red-500"
                        }`}
                      ></span>
                    </span>
                    <h3 className="text-md font-medium">{item.name}</h3>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center space-x-2 text-sm mt-1">
                    <span className="line-through text-gray-500">
                      ₹{item.originalPrice}
                    </span>
                    <span className="font-bold text-green-600">
                      ₹{item.price}
                    </span>
                  </div>

                  {/* More Details and Add Button */}
                  <div className="flex items-center justify-between mt-2">
                    <button className="text-gray-500 text-sm">
                      More Details
                    </button>
                    <button className="bg-green-500 text-white px-4 py-1 rounded-lg">
                      {"Add"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuScreen;
