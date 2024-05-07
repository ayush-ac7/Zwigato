import { useState } from "react";
import logo from "../assets/zwigato-logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PiShoppingCart } from "react-icons/pi";

const Header = () => {
  //console.log("Header component is rendered");

  const [btnNameReact, setBtnNameReact] = useState("Login");

  //Selector from redux
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  return (
    <div className="lg:w-full flex justify-between items-center shadow-lg bg-orange-400 h-20">
      <div className="logo-container">
        <Link className="flex items-center" to={"/"}>
          <img src={logo} alt="zwigato-logo" className="w-12 ml-2 rounded-full" />
          <h2 className="text-4xl italic font-bold cursor-pointer text-white ml-2">
            Zwigato
          </h2>
        </Link>
      </div>
      <div className="nav-container">
        <ul className="flex p-4 m-4 font-semibold text-lg sm: text-sm gap--6">
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
            className="login-btn  w-[4rem] hover:text-white sm: w-[0.25rem] hidden"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
