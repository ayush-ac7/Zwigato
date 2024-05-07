import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
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
    <div className="w-full flex justify-between items-center shadow-lg bg-orange-400 h-20">
      <div className="logo-container">
        <img className="logo w-20 rounded-full mt-1 ml-3 shadow-md shadow-slate-100  animate-bounce" src={LOGO_URL} />
      </div>
      <div className="nav-container">
        <ul className="flex p-4 m-4 font-semibold text-lg">
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
            className="login-btn  w-[4rem] hover:text-white"
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
