import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import MealscardC from "../Components/Mealscards/Mealscard";

export default function Category({ match }) {
  const [meals, setMeals] = useState([]);
  const [load, setLoad] = useState(false);
  const [isError, setisEerror] = useState(false);
  const [searchTerm, setSearchTerm] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMeals = async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      setMeals(result.data.meals ? result.data.meals : []);
      console.log(result);
      // console.log(result.data);
      // window.alert(JSON.stringify(meals));
    } catch (error) {
      console.log(error);
    }
  };

  const getMeal = async () => {
    try {
      setLoad(true);
      let response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${match.params.category}`
      );
      console.log(match.params);
      setMeals(response.data.meals);
      console.log(response.data);
      console.log(meals);
      setLoad(false);
    } catch (error) {
      setisEerror(true);
      console.log(`can't fetch, ${error}`);
      setLoad(false);
    }
  };

  console.log(meals);
  useEffect(() => {
    getMeal();
    getMeals();
  }, [match.params.category, searchTerm]);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <div className="search">
        <input
          type="text"
          placeholder="Search for meal..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {meals.length === 0 ? (
        <h2>"Sorry, There is no meal with this category name"</h2>
      ) : (
        meals.map((el) => <MealscardC meal={el} key={el.idMeal} />)
      )}
    </div>
  );
}
