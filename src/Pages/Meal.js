import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./Meal.css";

const MealC = () => {
  const [meal, setMeal] = useState({});
  const [load, setLoad] = useState(false);
  const { idMeal } = useParams();

  useEffect(() => {
    getMeal();
  }, [idMeal]);

  const getMeal = async () => {
    try {
      setLoad(true);
      const result = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      setMeal(result.data.meals[0]);
      // console.log(result.data.meals[0]);
      // console.log(result);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {load ? (
        <img
          src="https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg"
          alt="spinner"
        />
      ) : (
        <div className="one_meal">
          <img
            className="onemeal_img"
            src={meal.strMealThumb}
            alt="thumbs"
            width="500px"
            height="500px"
          />
          <div className="meal_desc">
            <h4>Name</h4>
            <h6>{meal.strMeal}</h6>
            <hr />
            <h4>Category</h4>
            <h6>{meal.strCategory}</h6>
            <hr />
            <h4>Origin Country</h4>
            <h6>{meal.strArea}</h6>
            <hr />
            <h4>Ingredients</h4>
            <h6>
              * {meal.strMeasure1}: {meal.strIngredient1}
            </h6>
            <h6>
              * {meal.strMeasure2}: {meal.strIngredient2}
            </h6>
            <h6>
              * {meal.strMeasure3}: {meal.strIngredient3}
            </h6>
            <h6>
              * {meal.strMeasure4}: {meal.strIngredient4}
            </h6>
            <h6>
              * {meal.strMeasure5}: {meal.strIngredient5}
            </h6>
            <h6>
              * {meal.strMeasure6}: {meal.strIngredient6}
            </h6>
            <h6>
              * {meal.strMeasure7}: {meal.strIngredient7}
            </h6>
            <h6>
              * {meal.strMeasure8}: {meal.strIngredient8}
            </h6>
            <h6>
              * {meal.strMeasure9}: {meal.strIngredient9}
            </h6>
            <h6>
              * {meal.strMeasure10}: {meal.strIngredient10}
            </h6>
            <h6>
              * {meal.strMeasure11}: {meal.strIngredient11}
            </h6>
            <h6>
              * {meal.strMeasure12}: {meal.strIngredient12}
            </h6>
            <h6>
              * {meal.strMeasure13}: {meal.strIngredient13}
            </h6>
            <h6>
              * {meal.strMeasure14}: {meal.strIngredient14}
            </h6>
            <h6>
              * {meal.strMeasure15}: {meal.strIngredient15}
            </h6>
            <h6>
              * {meal.strMeasure16}: {meal.strIngredient16}
            </h6>
            <h6>
              * {meal.strMeasure17}: {meal.strIngredient17}
            </h6>
            <h6>
              * {meal.strMeasure18}: {meal.strIngredient18}
            </h6>
            <h6>
              * {meal.strMeasure19}: {meal.strIngredient19}
            </h6>
            <h6>
              * {meal.strMeasure20}: {meal.strIngredient20}
            </h6>
            <hr />
            <h4>Instruction</h4>
            <p>{meal.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealC;
