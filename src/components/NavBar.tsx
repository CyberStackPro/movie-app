import React, { useState } from "react";
import { Products } from "./ProductCard";
import { navItems } from "../data/constants";
import { BsMenuApp, BsShop } from "react-icons/bs";

interface Props {
  selectedProducts: Products[];
}

const NavBar = ({ selectedProducts }: Props) => {
  const [navMenu, setNavMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <nav className=" w-full p-3 flex justify-between">
      <div className=" font-bold">Agriculture E-commerce</div>

      <ul className="hidden  md:flex justify-end">
        {navItems.map((item, index) => (
          <>
            <li className="m-2" key={item.id}>
              {item.name}
            </li>
          </>
        ))}
        <div className="relative">
          {/* <button className="btn relative   btn-warning"> */}
          <BsShop className="bg-yellow-400 p-1 rounded-lg  text-4xl text-black " />
          <span className="absolute bg-orange-500 text-white rounded-full p-2 bottom-2  z-[1] ">
            {selectedProducts.length}
          </span>
          {/* </button> */}
        </div>
      </ul>

      <div className=" flex md:hidden justify-end items-center">
        <BsMenuApp
          onClick={() => setNavMenu(!navMenu)}
          className="text-3xl text-green-500"
        />

        <div
          className={`${!navMenu ? "hidden" : "flex"}
        p-6 bg-orange-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl
        `}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navItems.map((item, index) => (
              <>
                <li className="m-2" key={item.id}>
                  {item.name}
                </li>
              </>
            ))}
            <div className="relative">
              {/* <button className="btn relative   btn-warning"> */}
              <BsShop className="bg-yellow-400 p-1 rounded-lg  text-4xl text-black " />
              <span className="absolute bg-orange-500 text-white rounded-full p-2 bottom-2  z-[1] ">
                {selectedProducts.length}
              </span>
              {/* </button> */}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
