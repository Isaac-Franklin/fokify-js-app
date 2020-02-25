# Forkify Project

Forkify website created from [Udemy's The Complete JavaScript Course](https://www.udemy.com/course/the-complete-javascript-course/) by Jonas Schmedtmann. Personal modifications were made to resolve functionality issues and layout concerns. Those are clarified below.

## Getting started

1. Download Node.js **(reminder: adjust specifications of your local machine)** and install: [Download Node.js](https://nodejs.org/en/download/)
    *Note: Includes Node Package Manager (npm)*

2. Download the zip file from this repo: [Download zip](https://github.com/nicoleiocana/forkify/archive/master.zip)

    ![download zip file](https://imgur.com/Ay1QUU8.png)
    
3. The development files are all located in the start_here folder.

4. Open up your terminal/command prompt and navigate to your *start_here* folder. Type in `$ npm run start` to start your webpack server and begin development.

5. Located in the src file, on line 434 in index.html, change `{%NAME%}` with your first and last name.

6. You will need to create a <a name="spoonacular">spoonacular api account</a> to obtain the API key.

    1. [Sign up for a free account at spoonacular API.](https://spoonacular.com/food-api/console#Dashboard)
    
    2. In the API Console, click on Profile.
     
    ![API Console Profile](https://imgur.com/EfS1yB0.png)

    3. Click on the Show/ Hide API Key button. Copy the API Key. Located in the *js* folder, replace the `{%API_KEY%}` in the *config.js* file. [**(The free plan only allows 150 points per day, then no more calls)**](https://spoonacular.com/food-api/pricing)
    
7. In your terminal, type `$ npm run build` to package your production code. Deploy!

## Functionality Modifications

As of February 2020, Jonas has updated his javaScript course. I have not viewed the recent changes so I can neither confirm nor deny that he resolved the issues from the 2018 edition.

| Issue                                                                                                                       | Resolution                                                                                                                                                                                                                                                                                        |
|-----------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [food2fork.com has shut down](https://food2fork.com/api)   | Directions direct user to create a [spoonacular api account](#spoonacular)                                                                                                                                         |
| [Mobile view broken](#broken) | `.container { width: 100%; margin: 0; border-radius: 0; background-color: #fff; overflow: hidden; box-shadow: 0 2rem 6rem 0.5rem rgba(101, 90, 86, 0.2); display: flex; flex-flow: column wrap; } .header { grid-area: head; background-color: #F9F5F3; display: flex; flex-flow: row wrap; justify-content: center; } .header__logo { height: 4.5rem; display: block; } .pic, .search, .likes { margin: 4% 0; } @media only screen and (min-width: 40em) { .header { align-items: center; justify-content: space-between; } .header__logo { margin-left: 4rem; } .container { max-width: 120rem; margin: 4vw auto; border-radius: 6px; display: grid; grid-template-rows: 10rem minmax(100rem, auto); grid-template-columns: 1.1fr 2fr 1.1fr; grid-template-areas: "head head head" "list recipe shopping"; } .pic, .search, .likes { margin: 0; } } @media only screen and (min-width: 68.75em) { html { font-size: 62.5%; } } ` in *style.css* in the *css* folder
| | `<picture class="pic"> <img src="img/logo.png" alt="Logo" class="header__logo"> </picture>` in *index.html*|
| renderRecipe function points to a different URL                                                             |```const renderRecipe = recipe => { const ID = recipe.id; const SIZE = '90x90'; const img = recipe.image; const TYPE = img.slice(img.length - 3); // 'jpg' extension const imagePrefix = 'https://spoonacular.com/recipeImages/'; const markup = `<li> <a class="results__link" href="#${recipe.id}"> <figure class="results__fig"> <img src="${imagePrefix}${ID}-${SIZE}.${TYPE}" alt="${recipe.title}"> </figure> <div class="results__data"> <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4> <p class="results__author">Ready in ${recipe.readyInMinutes} mins!</p>  </div>  </a> </li> `;  //${recipe.publisher} Ready in ${recipe.readyInMinutes} mins! elements.searchResList.insertAdjacentHTML('beforeend', markup); };``` in *searchView.js* in the *views* folder                                                                                                                                                                                                                                                     |
| recipe.publisher is not accessible from    getResults async function                                                                                                | ```await Promise.all(this.result.map(async recipe => { const res = await axios(`${proxy}/https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${key}`); recipe.publisher = res.data.sourceName; }));``` in *Search.js* in the *models* folder. This code is commented out due to 30 calls (points) made per search                                                                                                      |
| calcTime(), calcServings(), and parseIngredients() are no longer needed| the code has been commented out in the *Recipe.js* file. The updated function is `parseIngredients() { const newIngredients = this.ingredients.map(el => { let rObj = {}; rObj.count = el.amount; rObj.unit = el.unit; rObj.ingredient = el.originalName; return rObj; }); this.ingredients = newIngredients; }`. Note, any references to the old functions have been commented out|

---

## Broken Mobile Layout

![broken mobile](https://imgur.com/tZeKerm.png)<a name="broken"></a>

---

## Screenshots

Desktop:

![desktop](https://imgur.com/jFIeycX.png)

Mobile:

![mobile 1](https://imgur.com/DTUe45m.png)

![mobile 2](https://imgur.com/TTlBsch.png)