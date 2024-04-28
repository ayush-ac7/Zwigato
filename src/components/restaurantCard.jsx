import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
    } = resData?.info;

    const isRatingGreater = (avgRating > 4) ? (true) : (false);

    return (
      <div className="m-4 p-4 w-[230px] h-[390px] bg-gray-100 rounded-lg hover:bg-gray-200">
        <div>
          <img className="w-full h-full rounded-lg" alt="res-logo" src={IMG_URL + resData?.info?.cloudinaryImageId}/>
          <h3 className="font-semibold py-2">{name}</h3>
          <p className="text-sm text-slate-500 break-words">{cuisines.join(", ")}</p>
          <div className="flex justify-between items-center mt-2">
            <span className= {`text-sm text-white px-1 py-1 ${(isRatingGreater)? ('bg-green-500'):('bg-[#F9A630]')}`}>&#9733;{avgRating} </span>
            <span className='text-lg text-slate-500'>&middot;</span>
            <span className="text-sm">{costForTwo}</span>
            <span className='text-lg text-slate-500'>&middot;</span>
            <span className="text-sm">{resData?.info?.sla?.deliveryTime} minutes</span>
          </div>
          
        </div>

      </div>
        
    );
};

export default RestaurantCard;

