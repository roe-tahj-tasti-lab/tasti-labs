import { getDetails } from "./src/fetch-details"

export const renderDetails = async () => {
    const meals = await getDetails(idMeal);


  meals.forEach((meal) => {

    const h1 = document.createElement('h1');
    const div = document.createElement('div');
    const p = document.createElement('p');

    p.textContent = `${meal.strInstructions}`;
    h1.textContent = `${meal.strMeal}`;
    div.append(p)

  }
    const ingredientsList = document.createElement('ul')
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measurement = meal[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== "") {

            const listItem = document.createElement('li');
            listItem.textContent = `${ingredient}: ${measurement || 'N/A'}`;
            ingredientsList.append(listItem);
        }


    
    
    const recipieDetails = document.getElementById('recipie-Details');
    recipieDetails.append(div);


    }
}

