import React from 'react';
import { Recipe } from '../App';

// Define the shape of the props that the RecipeList component will receive
interface RecipeListProps {
  recipes: Recipe[];               // Array of Recipe objects
  onDelete: (id: number) => void;   // Function to delete a recipe by its id
  onEdit: (recipe: Recipe) => void; // Function to edit a recipe
}

// The RecipeList component
const RecipeList: React.FC<RecipeListProps> = ({ recipes, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <span>{recipe.name}</span>
            <button onClick={() => onEdit(recipe)}>Edit</button>
            <button onClick={() => onDelete(recipe.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
