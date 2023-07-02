import { headers } from "next/dist/client/components/headers";

const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6ce07d6bb8msh21bc1c189f8d247p1d2fc5jsn5a86065d39c4',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

export async function fetchCars(){
   const headers =  {
		'X-RapidAPI-Key': '6ce07d6bb8msh21bc1c189f8d247p1d2fc5jsn5a86065d39c4',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
         headers: headers,
    });
    
}
