import React, { useState } from "react";
import Mealitem from "./MealItem";
import './meal.css';

export default function Meal () {
    const[search,setSearch]=useState("");
    const[Mymeal,setMeal]=useState();
    const searchMeal=(evt)=>{
        if(evt.key==="Enter")
        {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(res=>res.json()).then(data=> {setMeal(data.meals);setSearch("")})
        }
    }
    return (
        <>
            <div className="main">
                <div className="heading">
                    <h1>Search Your Food Recipe</h1>
                    <h4>Find recipe! Cook! Enjoy!</h4>
                </div>
                <div className="searchBox">
                    <input type="search" className="search-bar" onChange={(e)=>setSearch(e.target.value)} value={search} onKeyPress={searchMeal}/>
                </div>
                <div className="meal-container">
                   {(Mymeal==null)? <p className="tryToSearch">Try To Search!</p> : 
                         Mymeal.map((res)=>{
                             return(<Mealitem data={res}/>)}) }
                </div>
            </div>
        </>
    )
}