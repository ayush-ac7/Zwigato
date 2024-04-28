import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  console.log(items);

  const handleAddItem = (item) => {
    //dispatching the item
    dispatch(addItem(item));
  };

//   const handleRemoveItem = (item) => {
//     dispatch(removeItem(item));
//   };


  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                {" "}
                - ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-2/12">
            <div className="absolute">
              <button
                onClick={() => handleAddItem(item)}
                className="p-1 bg-black text-white text-sm"
              >
                {" "}
                <FaPlus />
              </button>
              {/* <button
                onClick={() => handleRemoveItem(item)}
                className=" p-1  ml-14 bg-black text-white text-sm"
              >
                {" "}
                <FaMinus />
              </button> */}
            </div>
            <img className="w-32" src={IMG_URL + item?.card?.info?.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
