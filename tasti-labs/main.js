import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

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

const handleClick = (event) => {
  console.log(event.target);
}

const main = () => {
  const ul = document.querySelector("ul"); 
  ul.addEventListener("click", handleClick); 
}

main(); 