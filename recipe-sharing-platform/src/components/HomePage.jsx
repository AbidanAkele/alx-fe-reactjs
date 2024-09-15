import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="p-4 border shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-bold mt-4">{recipe.title}</h2>
            <p className="mt-2 text-gray-600">{recipe.summary}</p>
            <a href={`/recipe/${recipe.id}`} className="text-blue-500 hover:text-blue-700 mt-4 block">View Details</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
