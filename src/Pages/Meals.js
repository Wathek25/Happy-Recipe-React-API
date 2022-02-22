import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import MealscardC from "../Components/Mealscards/Mealscard";
import MealC from "./Meal";
import "./Meals.css";

const MealsC = () => {
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getMeals();
  }, [searchTerm]);

  const getMeals = async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      setMeals(result.data);
      console.log(result);
      // console.log(result.data);
      // window.alert(JSON.stringify(meals));
    } catch (error) {
      console.log(error);
    }
  };

  // const searchMealHandler = useEffect(() => {
  //   getMeals(searchTerm);
  // }, [searchTerm, getMeals]);

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Search for meal..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="meals_list">
        {meals.meals ? (
          meals.meals.map((meal) => (
            <MealscardC meal={meal} key={meal.idMeal} />
          ))
        ) : (
          <h1>Data not found</h1>
        )}
      </div>
    </div>
  );
};

export default MealsC;
