import React from "react";
import './meal.css';

const Mealitem=(getMeal)=>{
    return(
        <div className="meal-item">
             <div className="recipe-card">
                        <img src={getMeal.data.strMealThumb} alt="meal"/>
                        <div className ="info">
                        <h2>{getMeal.data.strMeal}</h2>
                        <p>{getMeal.data.strArea} food</p>
                        </div>
                        <div className ="recipe">
                            <h2>Recipe</h2>
                            <p>{getMeal.data.strInstructions}</p>
                            <img src={getMeal.data.strMealThumb} alt=''/>
                            <a className="watch-video" href={getMeal.data.strSource} target='_blank' rel="noreferrer">Watch video</a>
                        </div>
            </div>  
        </div>
    )
}
export default Mealitem;