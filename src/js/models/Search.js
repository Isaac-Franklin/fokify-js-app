/** @format */
// import { searchInput } from "../views/base";
import axios from "axios";
// import cors from "cors";

export class Search {
	constructor(query) {
		this.query = query;
	}

	async connectApi() {
		try {
			const res = await axios(
				`https://forkify-api.herokuapp.com/api/search?q=${this.query}`
			);
			this.recipes = res.data.recipes;
		} catch (error) {
			alert(error);
		}
	}
}

// export class JobAPI {
// 	constructor() {}

// 	async connectAPI2() {
// 		const proxy = "https://cors-anywhere.herokuapp.com/";
// 		try {
// 			const connectProper = await axios(
// 				`${proxy}http://arbeitnow.com/api/job-board-api`
// 			);
// 			console.log(connectProper.data.data);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}
// }
