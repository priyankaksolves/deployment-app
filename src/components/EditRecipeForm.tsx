import React, { useState, useEffect } from 'react';

// Define the shape of the Recipe object
interface Recipe {
  id: number;
  name: string;
  ingredients: string;
  instructions: string;
}

// Define the type for the props of the EditRecipeForm component
interface EditRecipeFormProps {
  recipe: Recipe;      // The recipe that needs to be edited
  onSave: (updatedRecipe: Recipe) => void;  // The function to save the updated recipe
}

// EditRecipeForm Component
const EditRecipeForm: React.FC<EditRecipeFormProps> = ({ recipe, onSave }) => {
  const [name, setName] = useState(recipe.name);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [instructions, setInstructions] = useState(recipe.instructions);

  useEffect(() => {
    setName(recipe.name);
    setIngredients(recipe.ingredients);
    setInstructions(recipe.instructions);
  }, [recipe]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedRecipe = { ...recipe, name, ingredients, instructions };
    onSave(updatedRecipe);  // Call onSave to update the recipe
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;
