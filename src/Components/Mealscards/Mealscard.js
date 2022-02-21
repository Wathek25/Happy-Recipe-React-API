import React from "react";
import "./Mealscard.css";
import { Link } from "react-router-dom";

const MealscardC = ({ meal }) => {
  return (
    <div className="meals_card">
      <Link to={{ pathname: `/meals/meal/${meal.idMeal}`, state: meal }}>
        <h4>{meal.strMeal.substring(0, 20)}</h4>
        <img
          src={meal.strMealThumb}
          alt="thumbs"
          width="250px"
          height="250px"
        />
        <br />
        <button className="button">Details</button>
      </Link>
    </div>
  );
};

export default MealscardC;
