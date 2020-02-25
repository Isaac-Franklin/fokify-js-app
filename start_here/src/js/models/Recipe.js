import axios from 'axios';
import { key, proxy } from '../config';

export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    try {
      const res = await axios(`${proxy}/https://api.spoonacular.com/recipes/${this.id}/information?apiKey=${key}`);
      this.title = res.data.title;
      this.author = res.data.sourceName;
      this.img = res.data.image;
      this.url = res.data.sourceUrl;
      this.ingredients = res.data.extendedIngredients;
      this.time = res.data.readyInMinutes;
      this.servings = res.data.servings;
    } catch (error) {
      alert('Something went wrong :(');
    }
  }

  parseIngredients() {
    const newIngredients = this.ingredients.map(el => {
      let rObj = {};
      rObj.count = el.amount;
      rObj.unit = el.unit;
      rObj.ingredient = el.originalName;
      return rObj;
    });
    this.ingredients = newIngredients;
  }

  updateServings(type) {

    // Servings
    const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1;

    // Ingredients
    this.ingredients.forEach(ing => {
      ing.count *= (newServings / this.servings);
    });

    this.servings = newServings;
  }
}  
 
// Did not need calcTime() and calcServings() because data was privded by Spoonacular API

  /* Spoonacular's API already parsed the info below

  parseIngredients() {
    const unitsLong = ['tablespoons', 'tablespoon', 'ounce', 'ounces', 'teaspoon', 'teaspoons', 'cups', 'pounds'];
    const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound']

    const newIngredients = this.ingredients.map(el => {

      // 1) Uniform units
      let ingredient = el.toLowerCase();

      unitsLong.forEach((unit, i) => {
        ingredient = ingredient.replace(unit, unitsShort[i]);
      });

      // 2) Remove parentheses
      ingredient = ingredient.replace(/ *\([^)]*\) /g, '');

      // 3) Parse ingredients into count, unit, and ingredient
      return ingredient;
    });
    this.ingredients = newIngredients;
  }

  */