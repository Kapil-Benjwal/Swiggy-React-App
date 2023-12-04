import React from "react";
import { LOGO_CDN_URL } from "../utils/constant";

const RestaurantCard = (data) => (
  <div className="restaurant-list" key={data.data.id}>
    <img
      alt="img"
      className="img-log"
      src={LOGO_CDN_URL + data.data.cloudinaryImageId}
    />
    <h3>{data.data.name}</h3>
    <h4>{data.data.costForTwo}</h4>
    <h4>{data.data.avgRating} stars</h4>
    <h4>{data.data.cuisines.join(", ")}</h4>
  </div>
);
export default RestaurantCard;
