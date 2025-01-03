import React, { useState } from 'react';

// Define the shape of the recipe object
interface Recipe {
  id: number;
  name: string;
  ingredients: string;
  instructions: string;
}

// Define the type for the props of the AddRecipeForm component
interface AddRecipeFormProps {
  onAdd: (recipe: Recipe) => void; // The onAdd function expects a Recipe as argument
}

const AddRecipeForm: React.FC<AddRecipeFormProps> = ({ onAdd }) => {
  // Local state for the form inputs
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newRecipe: Recipe = {
      id: Date.now(), // Use the current timestamp as a unique ID for the new recipe
      name,
      ingredients,
      instructions,
    };

    // Call the onAdd function passed from the parent component
    onAdd(newRecipe);

    // Reset the form after adding the recipe
    setName('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div>
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe Name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update the name state
        />
        <textarea
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)} // Update the ingredients state
        />
        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)} // Update the instructions state
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
