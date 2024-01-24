const getCatergory = async (idCategory) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/${idCategory}.php`);
        if(!response.ok) throw new Error("Sorry can't fetch food!")
        const data = await response.json();
        console.log(data);

    }
    catch(error){
        console.error(error.message)
    }
}
// When a user selects a category, you can then fetch the meals for that specific category.

const getCatergoryDishes = async (idMeal) => {
    try {
        const response = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${idMeal}`);
        if(!response.ok) throw new Error("Sorry can't fetch food!")
        const data = await response.json();
        console.log(data);

    }
    catch(error){
        console.error(error.message)
    }
}