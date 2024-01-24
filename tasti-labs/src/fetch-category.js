
export const getCategoryDishes = async (category) => {
    try {
        const response = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        if(!response.ok) throw new Error("Sorry can't fetch food!")
        const data = await response.json();
        return data 
    }
    catch(error){
        console.error(error.message)
    }
}