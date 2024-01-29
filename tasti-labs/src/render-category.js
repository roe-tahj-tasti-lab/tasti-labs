import { getCategoryDishes } from "./fetch-category";    
    
    
  export const renderDishes = async(e) => {
      const category = e.target.title; 
      const { meals } = await getCategoryDishes(category)
    
      document.querySelector('#meal-list').style.display = 'none' 
      //!clears the page once recipie is clicked on 
    
      const dishList = document.getElementById('meal-list')  
      //! appending to the dishes of the chosen category to meal list 
    
    meals.forEach((dish) => {
      const li = document.createElement('li');
  
      const divContainer = document.createElement("div")
      divContainer.setAttribute("class", "container")
  
      const divCard = document.createElement("div")
      divCard.setAttribute("class", "card")
  
      const img = document.createElement("img")
      img.src = dish.strMealThumb
      img.width = "214px"
  
      const divDetails = document.createElement("div")
      divDetails.setAttribute("class", "details")
  
      const divName = document.createElement("div")
      divName.setAttribute("class", "name")
      divName.textContent = dish.strMeal
  
      const recipeButton = document.createElement("button")
      recipeButton.setAttribute("id", "recipe")
      recipeButton.textContent = "Recipe"
      recipeButton.dataset.id = dish.idMeal
  
      divDetails.append(divName, recipeButton)
      divCard.append(img, divDetails)
      divContainer.append(divCard)

  
      li.append(divContainer)
      const dishList = document.querySelector("#dish-list")
      dishList.append(li)
  
     
     
    
    })
  }