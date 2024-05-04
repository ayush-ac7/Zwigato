import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import cart_IMG from "../assets/cartIMG.png";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearItems = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center max-w-lg mx-auto">
        <img src={cart_IMG} className="mx-auto p-2 rounded-full" />
        <h2 className=" font-mono font-bold text-xl pt-5" >Cart is empty, Please add your items.</h2>
        <p className="text-md py-5 font-light">You can go to home page to view more restaurants</p>
      </div>
    );
  }

  return (
    <div className="mt-3 p-4 text-center">
      <h1 className="text-4xl p-2 font-semibold border-b-2 border-black w-1/12 mx-auto">
        Cart
      </h1>
      <div className="w-6/12 mx-auto">
        <button
          className="m-2 p-2 bg-black text-white rounded-lg"
          onClick={handleClearItems}
        >
          Clear Cart
        </button>
        {/* {cartItems.length === 0 && <h2>Cart is empty, Please add your items.</h2>} */}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
