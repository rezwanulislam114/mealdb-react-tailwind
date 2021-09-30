import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    const searchHandler = e => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue)
    }

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

        fetch (url)
        .then (res => res.json())
        .then (data => setMeals(data.meals));
    }, [searchText])


    return (
        <div className="text-center">
            <h2>this is Restaurant section</h2>
            <input onChange={searchHandler} className="border-2 border-purple-700 w-2/4 p-2 rounded-full" placeholder="Search Here for Meals" type="text" />
            <div className="grid grid-cols-3">
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Restaurant;