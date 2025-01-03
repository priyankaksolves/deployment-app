import { useState } from 'react';
import './App.css';
import EditRecipeForm from './components/EditRecipeForm';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

// Define the shape of a Recipe object
export interface Recipe {
  id: number;
  name: string;
  ingredients: string;
  instructions: string;
}

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]); // Use Recipe[] to type the state
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null); // editingRecipe can be a Recipe or null

  // Add a new recipe
  const addRecipe = (recipe: Recipe) => {
    setRecipes([...recipes, recipe]);
  };

  // Delete a recipe
  const deleteRecipe = (id: number) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  // Start editing a recipe
  const startEditing = (recipe: Recipe) => {
    setEditingRecipe(recipe);
  };

  // Save the edited recipe
  const saveEditedRecipe = (updatedRecipe: Recipe) => {
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    );
    setEditingRecipe(null);
  };

  return (
    <div className="App">
      <h1>Recipe Management App</h1>
      {editingRecipe ? (
        <EditRecipeForm
          recipe={editingRecipe}
          onSave={saveEditedRecipe}
        />
      ) : (
        <AddRecipeForm onAdd={addRecipe} />
      )}
      <RecipeList
        recipes={recipes}
        onDelete={deleteRecipe}
        onEdit={startEditing}
      />
    </div>
  );
}

export default App;
