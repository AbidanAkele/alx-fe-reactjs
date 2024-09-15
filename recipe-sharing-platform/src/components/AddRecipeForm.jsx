import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !steps) {
      alert('Please fill out all fields!');
      return;
    }
    // Handle form submission logic
    console.log({ title, ingredients, steps });
  };

  return (
    <form className="p-6 max-w-lg mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Recipe Title</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter recipe title"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Ingredients</label>
        <textarea
          className="w-full p-2 border rounded"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients, separated by commas"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Preparation Steps</label>
        <textarea
          className="w-full p-2 border rounded"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          placeholder="Enter the preparation steps"
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
