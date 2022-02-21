import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Category from "../Components/Category/Category";
import "./Home.css";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [load, setLoad] = useState(false);
  const [isError, setisEerror] = useState(false);
  const getCategories = async () => {
    try {
      setLoad(true);
      let response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
      setCategories(response.data.categories);
      setLoad(false);
    } catch (error) {
      setisEerror(true);
      console.log(`can't fetch, ${error}`);
      setLoad(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div>
      <div className="home">
        <h1>Welcome To Happy Recipe</h1>
        <h4>
          Each meal category you check will be provided with detailed
          instruction.
        </h4>

        <div className="homeCat">
          {categories.map((el) => (
            <Category category={el} key={el.idCategory} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
