import axios from 'axios';
import { key, proxy } from '../config';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const resNum = 30;
    try {
      const res = await axios(`${proxy}/https://api.spoonacular.com/recipes/search?apiKey=${key}&query=${this.query}&number=${resNum}`);
      this.result = res.data.results;
      // await Promise.all(this.result.map(async recipe => {
      //   const res = await axios(`${proxy}/https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${key}`);
      //   recipe.publisher = res.data.sourceName;
      // }));    
    } catch (error) {
        alert(error);
    }
  }
}
