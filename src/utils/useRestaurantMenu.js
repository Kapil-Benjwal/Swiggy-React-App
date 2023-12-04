// import { useEffect, useState } from "react";

// const useRestaurantMenu = () => {

//     const [listOfRestaurant, setListOfRestaurant] = useState(null);  //local state varible 

//     useEffect(() => {
//         fetchData();
//      // render after component render (render one time)
// }, []);

// const fetchData = async () => {
//     const dataa = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3165461&lng=78.03212769999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//     const json = await dataa.json();
//     const restaurantDetails = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//     setListOfRestaurant(restaurantDetails);
// };

//     return listOfRestaurant;
// }

// export default useRestaurantMenu