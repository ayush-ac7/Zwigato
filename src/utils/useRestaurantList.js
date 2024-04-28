import { useState, useEffect } from "react";

const useRestaurantList = (RES_CARD_API) => {

    const[listOfRestaurants, setListOfRestaurants] = useState([]);
    const[filteredRestaurants, setFilterRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RES_CARD_API);
        const json = await data.json();

        //optional chaining for rectifying errors
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return [listOfRestaurants, filteredRestaurants, setFilterRestaurants];
}

export default useRestaurantList;