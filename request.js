const key = '8b23cea909af0d4b87fc395102767ede';

// const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=8b23cea909af0d4b87fc395102767ede';


// fetch(baseURL)
// .then((data) => {console.log('response',data.json())})
// .catch((error) => {
//   console.log(error);
//    });

const requestCity = async (city) => {
    
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'

    const query = `?q=${city}&appid=${key}`;
    
   

    //make fetch call (promise call)
    const response = await fetch(baseURL + query);
   

    //promise data
    const data = await response.json();
    return data;


}
