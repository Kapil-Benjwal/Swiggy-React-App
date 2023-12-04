import React, { useEffect, useState, useCallback } from "react";
import { RESTAURANT_MENU } from "../utils/constant";
import { useParams } from "react-router-dom";
import Shimmar from "./Shimmar";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const { resId } = useParams();

  const fetchData = useCallback(async () => {
    const data = await fetch(RESTAURANT_MENU + resId);
    const json = await data.json();
    // console.log("json::::::", json);
    setRestaurantMenu(json);
  }, [resId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (restaurantMenu === null) return <Shimmar />;

  const { name, cuisines, costForTwoMessage } =
    restaurantMenu?.data?.cards[0]?.card?.card?.info;
  const itemsCard =
    restaurantMenu?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.itemCards;
  // console.log("itemsssssss==========>>>>>",itemsCard);

  return (
    <div className="res-menu">
      <h1>{name}</h1>
      <p>
        <b>
          {cuisines.join(", ")}-{costForTwoMessage}
        </b>
      </p>
      {itemsCard?.map((item) => (
        <ul key={item.card.info.id}>
          <li>
            {item.card.info.name}Rs - {item.card.info.price / 100}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default RestaurantMenu;
