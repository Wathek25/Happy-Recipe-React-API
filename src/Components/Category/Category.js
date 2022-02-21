import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";

export default function Category({ category }) {
  return (
    <div className="category">
      <img src={category.strCategoryThumb} alt="catThumb" />
      <h4>{category.strCategory}</h4>
      <div>
        <button>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/categories/${category.strCategory}`}
          >
            Check it out
          </Link>
        </button>
      </div>
    </div>
  );
}
