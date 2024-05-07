import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {

    const [isOpen, setIsOpen] = useState(false);

    // const handleClick = () => {
    //     setShowIndex();
    // }

    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={() => {setIsOpen(!isOpen)}} >
            <span className="font-bold " >{data?.title} ({data?.itemCards?.length})</span>
            <span>⏬</span>
            </div>
    
            {isOpen && <ItemList items={data?.itemCards}/>}
        </div>
    )
}

export default RestaurantCategory;