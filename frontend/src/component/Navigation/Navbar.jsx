import React from "react";
import { Wishlist } from "../common/WishList";
import { CartIcon } from "../common/CartIcon";
import { AccountIcon } from "../common/AccountIcon"
import { NavLink } from "react-router";
function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-16 bg-amber-600">
      <div className="flex items-center mr-44">
        {/* Logo*/}
        <NavLink to={"/"} className="text-2xl font-bold">
          ShopEase
        </NavLink>
      </div>
      <div className="flex flex-wrap items-center flex-1">
        {/* nav items*/}
        <ul className="flex gap-14">
          <li >
            <NavLink to={"/"} >Home</NavLink>
          </li>
          <li>
            <NavLink to={"/mens"}>Mens</NavLink>
          </li>
          <li>
            <NavLink to={"/womens"}>Womens</NavLink>
          </li>
          <li>
            <NavLink to={"/kids"}>Kids</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex">
        {/* Search bar */}
        <div className="border rounded flex overflow-hidden">
          <div className="flex items-center px-4">
            <svg
              className="h-4 w-4 text-gray-950"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search here"
            className="px-4 py-2 outline-none w-full"
          />
        </div>
      </div>

      <div className="flex items-center justify-center p-2">
        {/* action items */}
        <ul className="flex items-center justify-center flex-nowrap gap-0.5">
          <li className="">
            <Wishlist />
          </li>
          <li className="">
            <AccountIcon />
          </li>
          <li className="">
            <CartIcon />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
