import React, { useState } from "react";

export default function Home() {
  const [lien, setLien] = useState([
    "Holiday Gifting",
    "New Arrivals",
    "Best-Sellers",
    "Clothing",
    "Tops & Sweaters",
    "Pants & Jeans",
    "Outerwear",
    "Shoes & Bags",
  ]);
  return (
    <section>
      <div
        className="w-full h-[23.85px] flex flex-row justify-between px-[120px]  items-center 
      "
      >
        {lien.map((item) => (
          <a href="/" className="text-[5.5px] space-x-[10px] hover:underline ">
            {item}
          </a>
        ))}
        <div className="flex items-center">
          <a className="text-Red font-[400] text-[6px]" href="/">
            Sale
          </a>
        </div>
      </div>
      <img src="/src/assets/Section 01.png" alt="section" className="w-full" />
    </section>
  );
}
