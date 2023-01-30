/** @format */
import { domNodeController } from "./base";

//CREATE A FUNCTON THAT COLECTS WHAT USER ENTERS IN SEARCH FIELD
export const getInputData = () => {
	return domNodeController.searchData.value;
};

//CLEAR INPUT
export const cleatInput = () => {
	domNodeController.searchData.value = "";
};

//REEUCE TITLE LENGHT TO ONE LINE
const reduceTitle = (title, numberOfWords = 17) => {
	let newTitle = [];
	if (title.length > numberOfWords) {
		title.split(" ").reduce((total, word) => {
			if (total + word.length <= numberOfWords) {
				newTitle.push(word);
			}
			return (total += word.length);
		}, 0);

		return `${newTitle.join(" ")}...`;
	}
	return title;
};

//UPDATE RECIPE UI
const domView = (recipe) => {
	const markUp = `
    <li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="${recipe.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${reduceTitle(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
    `;
	domNodeController.fixSearchResults.insertAdjacentHTML("beforeend", markUp);
};

//CLEAR UI BEFORE DISPLAYING NEW SEARCH RECIPE
export const clearUI = () => {
	domNodeController.fixSearchResults.innerHTML = "";
};

// const firstPage = (recipes, pageNumber = 1, resOnFullPage = 10) => {
// 	pageOneContent =recipes.slice(pageNumber - 1, resOnFullPage);
// };

//CREATE FUNCTION THAT DISPLAYS DATA
export const displayResult = (recipes) => {
	recipes.forEach(domView);
	// recipes.addEventListener("click", (current) =>
	// 	console.log(current.image_url)
	// );
};
