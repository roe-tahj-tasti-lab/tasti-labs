export const getDetails = async (idMeal) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        if(!response.ok) throw new Error("Sorry can't fetch details!")
        const data = await response.json();
        return data 
    }
    catch(error){
        console.error(error.message)
    }
}