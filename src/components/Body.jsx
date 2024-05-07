import RestaurantCard from "./restaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_CARD_API } from "../utils/constants";
import useRestaurantList from "../utils/useRestaurantList";
import Footer from "./Footer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, filteredRestaurants, setFilterRestaurants] =
    useRestaurantList(RES_CARD_API);
  const onlineStatus = useOnlineStatus();

  //console.log(filteredRestaurants);

  if (onlineStatus === false) {
    return <h1>Looks like your internet connection is not available</h1>;
  }

  //conditional rendering
  if (listOfRestaurants.length === 0) {
    let shimmer = [];
    for (let i = 0; i < 20; i++) {
      shimmer.push(<Shimmer key={i} />);
    }
    return (
      <div className="py-28 mx-10">
        <div className="flex flex-wrap gap-8 justify-start">{shimmer}</div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="max-w-7xl mx-auto ">
        <div className="filter flex items-center sm:  flex-col">
          <div className="search m-4 p-4 sm: flex-col text-center">
            <input
              type="text"
              placeholder="Search your favourite Restaurant...."
              className="search-box border border-solid border-black w-96 h-9 sm: w-44"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="m-3 p-2 bg-green-200 rounded-lg"
              onClick={() => {
                //console.log(searchText);

                const filteredRestaurants = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

                setFilterRestaurants(filteredRestaurants);
              }}
            >
              Search
            </button>
          </div>

          <div>
            <button
              className="filter-btn m-2 p-2 bg-gray-300 rounded-lg"
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilterRestaurants(filteredList);
              }}
            >
              Top Rated Restaurant
            </button>
          </div>
        </div>
        <div className="res-container flex flex-wrap sm: flex-col justify-center items-center  ">
          {filteredRestaurants.map((restaurant) => (
            <Link
              className="res-cards"
              key={restaurant.info.id}
              to={"restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
          ;
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Body;
