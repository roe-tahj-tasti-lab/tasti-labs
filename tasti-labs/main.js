import './style.css'
import {getCategoryDishes} from './src/fetch-category'
import { getDetails } from './src/fetch-details';
import { renderDishes } from './src/render-category';
import { renderDetails } from './render-details';

//*need to add eventListeners to the buttons
//!when a category button gets clicked
//?a fetch (defined in fetcher.js) will be made for the dishes of that category in category.js
//and then category.html will render all the relevant data/properties for all those category 
//dishes.

//when you press category 
const handleClick = async e => {
  renderDishes(e);

}

const handleDishClick = async (e) => {
  renderDetails(e)
}

const main = () => {

  const categoriesList = document.getElementById('categories'); 
  categoriesList.addEventListener("click", handleClick)

  const eachDishDetails = document.getElementById('dish-list'); 
  eachDishDetails.addEventListener("click", handleDishClick );

  getCategoryDishes()
  getDetails()

}

main(); 
