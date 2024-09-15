import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!title) {
      newErrors.title = 'Title is required';
    }

    if (!ingredients) {
      newErrors.ingredients = 'Ingredients are required';
    } else if (ingredients.split(',').length < 2) {
      newErrors.ingredients = 'Please include at least two ingredients';
    }

    if (!steps) {
      newErrors.steps = 'Steps are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log({ title, ingredients, steps });
      alert('Recipe added successfully!');

      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({});
    }
  };

  return (
    <form
      className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md mt-8"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Recipe Title</label>
        <input
          type="text"
          className={`w-full p-2 border rounded shadow-sm ${
            errors.title ? 'border-red-500' : ''
          }`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter recipe title"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Ingredients</label>
        <textarea
          className={`w-full p-2 border rounded shadow-sm ${
            errors.ingredients ? 'border-red-500' : ''
          }`}
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients, separated by commas"
        />
        {errors.ingredients && (
          <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Preparation Steps</label>
        <textarea
          className={`w-full p-2 border rounded shadow-sm ${
            errors.steps ? 'border-red-500' : ''
          }`}
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          placeholder="Enter the preparation steps"
        />
        {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-700 transition duration-200"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
