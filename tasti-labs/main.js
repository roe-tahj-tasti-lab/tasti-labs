import './style.css'
import {getCategoryDishes} from './src/fetch-category'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Tasti Labs</h2>
    <h2>Are you craving...</h2>
    <ul id="categories">
      <li><button><img src="./index-images/chicken.png" alt="Chicken" title="Chicken"/></button></li>
      <li><button><img src="./index-images/seafood.png" alt="Seafood" title="Seafood"/></button></li>
      <li><button><img src="./index-images/pasta.png" alt="Pasta" title="Pasta"/></button></li>
      <li><button><img src="./index-images/vegan.png" alt="Vegan" title="Vegan"/></button></li>
      <li><button><img src="./index-images/dessert.png" alt="Dessert" title="Dessert"/></button></li>
    </ul> 
  </div>
`
//need to add eventListeners to the buttons
//when a category button gets clicked
//a fetch (defined in fetcher.js) will be made for the dishes of that category in category.js
//and then category.html will render all the relevant data/properties for all those category 
//dishes.

const handleClick = async e => {
  const category = e.target.title; 
  const { meals } = await getCategoryDishes(category)

  document.querySelector('#app').style.display = 'none' //clears

  const mealList = document.getElementById('meal-list')





  meals.forEach((dish) => {
    const li = document.createElement('li');
    const h3 = document.createElement('h3')
    const div = document.createElement('div')
    const img = document.createElement('img');
    const button = document.createElement('button')

    button.textContent = 'Recipe'
    h3.textContent =  dish.strMeal
    img.src = dish.strMealThumb
    
    li.append(div)
    div.append(h3, img, button)

    const dishList = document.querySelector("#dish-list")
    dishList.append(li)

    img.addEventListener('click', handleDishClick);
  })

}

const handleDishClick = (e) => {
  e.target.strMealThumb; 
  
}

const main = () => {
  const categoriesList = document.getElementById('categories'); 
  categoriesList.addEventListener("click", handleClick)


  

}

main(); 
