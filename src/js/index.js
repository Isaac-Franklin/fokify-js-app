/** @format */
import { Search } from "./models/Search";
import * as searchView from "./views/searchView";
import * as recipeView from "./views/recipeView";
import {
	domNodeController,
	spinLoader,
	delLoader,
	spinLoaderRecipe,
} from "./views/base";
import Recipe from "./models/Recipe";
// import express from "express";
// import cors from "cors";
// const app = express();
// app.use(cors());

//CREATE A STATE OBJECT FOR MY APPLICATION
const state = {};

//CREATE A FUNCTION THAT COLLECTS INPUT FROM THE USER AND CREATE A NEW SEARCH INSTANCE FOR THE ENTRY
const collectSearchEntry = async () => {
	//GET ENTRY
	const query = searchView.getInputData();
	console.log(query);
	if (query) {
		try {
			//CREATE NEW SEARCH INSTANCE FROM SEACH CLASS AND SAVE IN STATE
			state.search = new Search(query);

			// //DISPLAY LOADER
			// const resultDiv = domNodeController.resultDiv;
			spinLoader(domNodeController.resultDiv);

			//CARRY OUT SEARCH AND DISPLAY RESULT
			await state.search.connectApi();
			// console.log(state.search.recipes);

			//CLEAR INPUT
			searchView.cleatInput();

			//CLEAR UI
			searchView.clearUI();

			//DELETE SPIN LOADER
			delLoader();

			//DISPLAY SEARCH RESULT
			searchView.displayResult(state.search.recipes);

			// JOB API CONECT BELOW
			// const newAPI = new JobAPI();
			// const waitTime = await newAPI.connectAPI2();
			// console.log(waitTime);
		} catch (error) {
			console.log(error);
		}
	}
};

domNodeController.searchFormSubmit.addEventListener("submit", (e) => {
	e.preventDefault();
	collectSearchEntry();
	console.log("clicked");
});

//RECIPE CONSTROLLER

// const recipe1 = new Recipe(47746);
// recipe1.getRecipe();
// console.log(recipe1);

// const showHash = () => {

// };

const activateRecipe = async () => {
	//GET ID
	const id = window.location.hash.replace("#", "");
	console.log(id);
	if (id) {
		try {
			//CREATE NEW RECIPE AND SAVE TO STATE
			state.recipe = new Recipe(id);

			// //DISPLAY LOADER
			// const resultDiv = domNodeController.resultDiv;
			spinLoaderRecipe(domNodeController.recipe);

			//GET RECIPE WTH METOD IN CLAS PROPER
			await state.recipe.getRecipe();

			//GET INGREDIENTS PREPARATION TIME
			state.recipe.calcTime();

			//GET SERVERS
			state.recipe.calcServings();

			//DELETE SPIN LOADER
			delLoader();

			//UPDATE RECIPE TO USER
			recipeView.inputRecipe(state.recipe);
			// console.log(state.recipe);

			//GET INGREDIENT
			state.recipe.handleIngredients();
		} catch (error) {
			console.log(error);
		}
	}
};

window.addEventListener("hashchange", activateRecipe);
window.addEventListener("load", activateRecipe);
