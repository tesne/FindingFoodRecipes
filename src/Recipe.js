import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h2>{title}</h2>
      <ol>
        {ingredients.map(ingredients => (
          <li>{ingredients.text}</li>
        ))}
      </ol>
      <p>
        {" "}
        calories <br /> {calories}
      </p>
      <img className={style.image} src={image} alt={title} />
    </div>
  );
};

export default Recipe;
