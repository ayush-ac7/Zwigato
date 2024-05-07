import { useState } from "react";
import logo from "../assets/zwigato-logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PiShoppingCart } from "react-icons/pi";
import { FaHamburger } from "react-icons/fa";
import { GiSkullCrossedBones } from "react-icons/gi";

const Header = () => {
  //console.log("Header component is rendered");

  const [btnNameReact, setBtnNameReact] = useState("Login");

  //Selector from redux
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  const handleMenu = () => {};

  return (
    <nav className="w-full flex justify-between items-center shadow-lg bg-orange-400 h-20">
      <div className="logo-container">
        <Link className="flex items-center" to={"/"}>
          <img
            src={logo}
            alt="zwigato-logo"
            className="w-12 ml-2 rounded-full"
          />
          <h2 className="text-4xl italic font-bold cursor-pointer text-white ml-2">
            Zwigato
          </h2>
        </Link>
      </div>
      <div className="nav-container">
        <ul className="hidden md:flex p-4 m-4 font-semibold text-lg">
          <li className="mr-12 hover:text-white">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="mr-12 hover:text-white">
            <Link to={"/about"}>About Us</Link>
          </li>
          {/* <li className="mr-9">
            <Link to={"/grocery"}>Grocery</Link>
          </li> */}
          <li className="mr-12 flex items-center justify-center hover:text-white">
            <PiShoppingCart />
            <Link className="ml-1" to={"/cart"}>
              Cart({cartItems.length})
            </Link>
          </li>
          <button
            className="login-btn  w-[4rem] hover:text-white hidden"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
        <button className="md:hidden" onClick={handleMenu()}>
          <FaHamburger />
        </button>
      </div>
    </nav>
  );
};

export default Header;
