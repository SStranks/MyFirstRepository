import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js'
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime'


// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;    //Guard Clause for no recipe hash
    recipeView.renderSpinner();

    // 0. Update Results View to Mark Selected Search Result
    resultsView.update(model.getSearchResultsPage());

    // 1. Updating bookmarks view
    bookmarksView.update(model.state.bookmarks);
    
    // 2. Loading Recipe
    await model.loadRecipe(id);
    
    // 3. Rendering Recipe
    recipeView.render(model.state.recipe);

  } catch (err) {
    recipeView.renderError()
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1. Get Search Query
    const query = searchView.getQuery();
    if (!query) return;

    // 2. Load Search
    await model.loadSearchResults(query);

    // 3. Render results
    resultsView.render(model.getSearchResultsPage());

    // 4. Render Pagination
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  };
};

const controlPagination = function (goToPage) {
  // 3. Render new results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 4. Render new pagination
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in the state)
  model.updateServings(newServings);

  // Update the view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);    // Only updates text and attributes, not the entire view - DOM Algorithm
};

const controlAddBookmark = function () {
  // 1. Add/Remove Bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2. Update Recipe View
  recipeView.update(model.state.recipe);

  // 3. Render Bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // Show Loading Spinner
    addRecipeView.renderSpinner();

    // Upload New Recipe Data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // Render Recipe
    recipeView.render(model.state.recipe);

    // Success Message
    addRecipeView.renderMessage();

    // Render Bookmark View
    bookmarksView.render(model.state.bookmarks);

    // Change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);    // Changes page URL without reloading the page

    // Close Form Window
    setTimeout(function () {
        addRecipeView.closeWindow();
      }, MODAL_CLOSE_SEC * 1000);

    // Reset Form Markup
    setTimeout(function () {
      addRecipeView.resetForm();
    }, (MODAL_CLOSE_SEC + 1) * 1000);

  } catch(err) {
    console.error(err);
    addRecipeView.renderError(err.message);

    // Close Form Window
    setTimeout(function () {
      addRecipeView.closeWindow();
    }, MODAL_CLOSE_SEC * 1000);
    // Reset Form Markup
    setTimeout(function () {
      addRecipeView.resetForm();
    }, (MODAL_CLOSE_SEC + 1) * 1000);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
