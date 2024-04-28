import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    //console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearItems = () => {
        dispatch(clearCart());
    }


    return (
        <div className="mt-3 p-4 text-center">
            <h1 className="text-4xl p-2 font-semibold border-b-2 border-black w-1/12 mx-auto">Cart</h1>
            <div className="w-6/12 mx-auto">
                <button className="m-2 p-2 bg-black text-white rounded-lg"
                  onClick={handleClearItems}
                >
                    Clear Cart
                </button>
                {cartItems.length === 0 && <h2>Cart is empty, Please add your items.</h2>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;