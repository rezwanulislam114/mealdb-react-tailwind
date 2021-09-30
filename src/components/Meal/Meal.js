import React from 'react';

const Meal = (props) => {
    const {strMeal, strCategory} = props.meal;
    return (
        <div className="text-center bg-purple-300 py-6 px-8 m-6 rounded-lg border-2 border-purple-700 hover:bg-purple-400">
            <h2 className="text-4xl font-semibold mb-6">{strMeal}</h2>
            <p>{strCategory}</p>
        </div>
    );
};

export default Meal;