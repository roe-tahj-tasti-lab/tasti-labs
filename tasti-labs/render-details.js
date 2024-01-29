import { getDetails } from "./src/fetch-details"

export const renderDetails = async (e) => {
    const dishRecipe = e.target.dataset.id
    const {meals} = await getDetails(dishRecipe);

    document.querySelector('#app').style.display = 'none'
    console.log(renderDetails);

    meals.forEach((meal) => {

        const h1 = document.createElement('h1');
        const div = document.createElement('div');
        const p = document.createElement('p');

        
        p.textContent = `${meal.strInstructions}`;
        h1.textContent = `${meal.strMeal}`;
        div.append(p)



    })

    const ingredientsList = document.createElement('ul')
    for (let i = 1; i <= 20; i++) {
        const ingredient = meals[`strIngredient${i}`];
        const measurement = meals[`strMeasure${i}`];

    
        if (ingredient && ingredient.trim() !== "") {

            const listItem = document.createElement('li');
            listItem.textContent = `${ingredient}: ${measurement || 'N/A'}`;
            ingredientsList.append(listItem);
        }
    }

    
    
    const recipieDetails = document.getElementById('dish-list'); 
    recipieDetails.append(div,h1);

    //?this is all the dom thats getting appened to the Id in the html 


 }


