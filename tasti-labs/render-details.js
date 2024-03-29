import { getDetails} from "./src/fetch-details"

export const renderDetails = async (e) => {
    const dishRecipe = e.target.dataset.id
    const { meals } = await getDetails(dishRecipe);
    // console.log(meals)
    document.querySelector('#dish-list').style.display = 'none'
    
    // const videoData = await getVideo(dish.strYoutube);
    
    const dish = meals[0]
    const h1 = document.createElement('h1');
    const div = document.createElement('div');
    const div2 = document.createElement('div2');
    const p = document.createElement('p');
    const img = document.createElement('img');
    // const img2 = document.createElement('img')

    h1.textContent = `${dish.strMeal}`;
    img.src = dish.strMealThumb;
    // img2.src = dish.strYoutube;
    div.append(img)

    // console.log(dish.strInstructions)

    const ingredientsList = document.createElement('ul')
    ingredientsList.setAttribute('id', 'recipe-list');
    for (let i = 1; i <= 20; i++) {
        const ingredient = dish[`strIngredient${i}`];
        const measurement = dish[`strMeasure${i}`];

  
        if (ingredient && ingredient.trim() !== "") {
            const listItem = document.createElement('li');
            listItem.textContent = `${ingredient}: ${measurement || 'N/A'} `;
            ingredientsList.append(listItem);
        }
    }

    p.textContent = `${dish.strInstructions}`;
    div2.append(p)
    div2.setAttribute("id", "instructions")
    
    
    const recipeDetails = document.getElementById('recipe-details'); 
    recipeDetails.append(div, h1, ingredientsList, div2);

    //?this is all the dom thats getting appened to the Id in the html 
 }


