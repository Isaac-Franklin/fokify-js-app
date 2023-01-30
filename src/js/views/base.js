/** @format */

// export class searchInput {}
export const domNodeController = {
	searchFormSubmit: document.querySelector(".search"),
	searchData: document.querySelector(".search__field"),
	fixSearchResults: document.querySelector(".results__list"),
	resultDiv: document.querySelector(".results"),
	recipe: document.querySelector(".recipe"),
};

export const elementString = {
	loader: "loader",
};

//FXN TO DISPLAY THE LOADER SPINER
// const parent = domNodeController.resultDiv;
export const spinLoader = (parent) => {
	const loader = `<div class = "${elementString.loader}">
		<svg>
			<use href="images/icons.svg#icon-cw"</use>
		<svg>
	</div>`;
	parent.insertAdjacentHTML("afterbegin", loader);
};

//FXN TO DISPLAY THE LOADER SPINER IN RECIPE AREA
// const parent = domNodeController.resultDiv;
export const spinLoaderRecipe = (parent) => {
	const loader = `<div class = "${elementString.loader}">
		<svg>
			<use href="images/icons.svg#icon-cw"</use>
		<svg>
	</div>`;
	parent.insertAdjacentHTML("afterbegin", loader);
};

//DELETE SPIN LOADER
export const delLoader = () => {
	const loader = document.querySelector(`.${elementString.loader}`);
	if (loader) {
		loader.parentElement.removeChild(loader);
	} else {
		console.log("no loader");
	}
};
