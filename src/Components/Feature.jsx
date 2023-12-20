import { useState } from "react";
import FeatureBox from "./FeatureBox";

function Features() {
  const [items, setItems] = useState([
    {
      id: 1,
      icon: "image-1.svg",
      name: "SHIRTS",
    },
    {
      id: 2,
      icon: "image-2.svg",
      name: "DENIM",
    },
    {
      id: 3,
      icon: "image-3.svg",
      name: "TEES",
    },
    {
      id: 4,
      icon: "image-4.svg",
      name: "PANTS",
    },
    {
      id: 5,
      icon: "image-5.svg",
      name: "SWEATERS",
    },
    {
      id: 6,
      icon: "image-6.svg",
      name: "OUTERWEAR",
    },
  ]);
  return (
    <section>
      <div className="pt-[40px]">
        <div className="text-center">
          <p className="text-[10px] font-[400]">Shop by Category</p>
        </div>
        <div className="flex flex-row justify-center pt-[10.5px] text-[6px] font-[400] underline text-center">
          {items.map((item) => (
            <FeatureBox key={item.id} icon={item.icon} name={item.name} />
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-center pt-[40px] ">
        <img src="/src/assets/Frame 1.svg" />
        <img src="/src/assets/Frame 2.svg" />
        <img src="/src/assets/Frame 3.svg" />
      </div>
    </section>
  );
}
export default Features;
