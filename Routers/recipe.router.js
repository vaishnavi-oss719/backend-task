import express from 'express';
import { createRecipe, getRecipeDetails,RecipeById,updateRecipeById,deleteRecipeById} from '../Controllers/recipe.controller.js';



const router = express.Router();

router.post("/create-recipe",createRecipe);
router.get("/get-recidetails",getRecipeDetails);
router.get("/get-recidetails/:id",RecipeById);
router.put("/edit-recipe/:id",updateRecipeById);
router.delete("/delete-recipe/:id", deleteRecipeById);

export default router;
