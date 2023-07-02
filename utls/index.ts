export async function fetchCars(){
   const headers =  {
		'X-RapidAPI-Key': '6ce07d6bb8msh21bc1c189f8d247p1d2fc5jsn5a86065d39c4',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
         headers: headers,
    });
    const result = await response.json();
	return result;
}
