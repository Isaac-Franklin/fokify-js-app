/** @format */
// const url = "https://forkify-api.herokuapp.com/api/v2/recipes/:";
import axios from "axios";

export default class Recipe {
	constructor(id) {
		this.id = id;
		// this.key = "8d424b20-d007-4708-b1a4-251a7c9960aa";
	}

	// https://forkify-api.herokuapp.com/api/v2/recipes/:${this.id}

	async getRecipe() {
		try {
			const recipeData = await axios(
				`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`
			);
			this.title = recipeData.data.recipe.title;
			this.author = recipeData.data.recipe.publisher;
			this.img = recipeData.data.recipe.image_url;
			this.url = recipeData.data.recipe.source_url;
			this.ingredients = recipeData.data.recipe.ingredients;
			// console.log(recipeData.data.recipe);
			console.log(this.ingredients);
		} catch (error) {
			console.log(error);
		}
	}

	//CALCULATE TIME FOR MAKING INGREDIENT
	calcTime() {
		const makeTime = this.ingredients.length;
		const period = Math.ceil(makeTime / 3);
		this.time = period * 15;
		// console.log(this.time);
	}

	calcServings() {
		this.servings = 4;
	}
	//INGREDENTS SETUP

	handleIngredients() {
		const ingredient = recipeData.data.recipe.ingredients;
		console.log(ingredient);
	}
}

//////
// 	parseIngredients() {
// 		const unitsLong = [
// 			"tablespoons",
// 			"tablespoon",
// 			"ounce",
// 			"ounces",
// 			"teaspoon",
// 			"teaspoons",
// 			"cups",
// 			"pounds",
// 		];
// 		const unitsShort = [
// 			"tbsp",
// 			"tbsp",
// 			"oz",
// 			"oz",
// 			"tsp",
// 			"tsp",
// 			"cup",
// 			"pound",
// 		];

// 		const units = [...unitsLong, "kg", "g"];

// 		const newIngredients = this.ingredients.map((el) => {
// 			// 1) Uniform units
// 			let ingredient = el.toLowerCase();

// 			unitsLong.forEach((unit, i) => {
// 				ingredient = ingredient.replace(unit, unitsShort[i]);
// 			});

// 			// 2) Remove parentheses
// 			ingredient = ingredient.replace(/ *\([^)]*\) /g, "");

// 			// 3) Parse ingredients into count, unit, and ingredient
// 			return ingredient;
// 		});
// 		this.ingredients = newIngredients;
// 	}
// }
