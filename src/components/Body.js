import React from "react";
import { SIWGGY_API } from "../utils/constant";
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
// import { toBeDisabled } from "@testing-library/jest-dom/matchers";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]); //All restaurants
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); //Filtered restaurants only
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  // console.log("filterddddddddddddd", filteredRestaurant);

  const resData = async () => {
    setLoading(true);
    fetch(SIWGGY_API)
      .then((data) => data.json())
      .then((data) => {
        const topBrands = data?.data?.cards
          ?.map((cardData) => cardData?.card?.card)
          ?.find((x) => x.id === "top_brands_for_you");
        const allRestaurants =
          topBrands?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(allRestaurants);
        setFilteredRestaurant(allRestaurants);
      })
      .catch(() => { })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    resData();
  }, []);

  const handleFiltering = () => {
    if (searchText.trim() === '') {
      alert("Please search by name.");
    } else {
      const filterRes = filteredRestaurant.filter((x) => x?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
      // console.log("filterrrrrrrrrrrrrr", filterRes);
      filterRes.length === "" ? alert("Type correct name") : setFilteredRestaurant(filterRes);
    }
  };


  // const handleFiltering = () => {
  //   const filterRes = filteredRestaurant.filter((x) => {x?.info?.name?.toLowerCase().includes(searchText.toLowerCase())});
  //   console.log("filterrrrrrrrrrrrrr", filterRes);
  //   filterRes.length >= 0 ? alert("Please search by name.") : setFilteredRestaurant(filterRes);
  //   // setLoading(false);
  // };

  const topRatedData = () => {
    const topRated = filteredRestaurant.filter(obj => obj.info.avgRating > 4);
    setFilteredRestaurant(topRated)
  }

  return (
    <>
      <div className="body-container">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              className="search-box"
              value={searchText.trim()}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                handleFiltering();
                // setSearchText("");
              }}
            >
              Search
            </button>
            <button
              onClick={() => {
                setFilteredRestaurant(listOfRestaurant);
                setSearchText("");
                setLoading(false)
              }}
            >
              Clear
            </button>
          </div>
          <div>
            <button
              className="filter-btn"
              onClick={() => {
                topRatedData()
              }}
            >
              Top rated Restaurant
            </button>
          </div>
        </div>
      </div>
      {loading ? (
        <div>
          <img src="/media/swiggy.png" alt="loading" />
          ...Please wait your top restuarants are loading
        </div>
      ) : (
        <div className="res-container">
          {filteredRestaurant?.map((RestaurantCardData) => (
            <RestaurantCard
              key={RestaurantCardData.info.id}
              data={RestaurantCardData.info}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Body;
