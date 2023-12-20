import React, { useState } from "react";

export default function Header() {
  const [link, setLinks] = useState([
    "Women",
    "Men",
    "About",
    "EverworldStories",
  ]);
  return (
    <header>
      <section className="container flex">
        <div className="bg-[#000000] w-full h-[12.9px] ">
          <p className=" text-center  pt-[3px]  italic font-[600] text-[5.06px] leading-[6.74px] text-white ">
            Get early access on launches and offers.
            <a href="/">
              <spna className="underline font-[400] text-[5.06px] leading-[6.74px] text-center ">
                Sign Up For Texts
              </spna>
            </a>
          </p>
        </div>
      </section>
      <section className="mx-[23.86px] border-0 border-b-[0.42px] flex flex-row justify-between h-[23.86px] ">
        <div className=" w-[125.44px] flex items-center">
          {link.map((links) => (
            <a
              href="/"
              className="font-[400] text-[5.06px] leading-[6.74px] mx-[5.5px] hover:underline"
            >
              {links}
            </a>
          ))}
        </div>
        <div>
          <a href="/">
            <img src="/src/assets/Logo.svg" className="pt-[7px]" />
          </a>
        </div>
        <div className="flex items-center  w-[50.58px] h-[16.86px] mt-[3px] gap-[4.21px] ">
          <img
            src="/src/assets/MagnifyingGlass.svg"
            alt="Magni"
            className="w-[6.74px] h-[6.74px]"
          ></img>
          <img
            src="/src/assets/User.svg"
            alt="User"
            className="w-[6.74px] h-[6.74px]"
          ></img>
          <img
            src="/src/assets/ShoppingCartSimple.svg"
            alt="Shop"
            className="w-[6.74px] h-[6.74px]"
          ></img>
        </div>
      </section>
    </header>
  );
}
