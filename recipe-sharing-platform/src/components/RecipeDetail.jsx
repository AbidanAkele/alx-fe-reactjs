import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
      });
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mt-4" />
      <p className="text-gray-700 mt-4">{recipe.summary}</p>
      
      {/* Ingredients Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Ingredients</h2>
        <ul className="list-disc list-inside mt-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Instructions Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Instructions</h2>
        <ol className="list-decimal list-inside mt-2">
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
