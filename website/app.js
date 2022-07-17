
/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
//  API Key
const apiKey = "&appid=122f754a6fe6b9a0df9f1df3dcfb3e81&units=imperial";

// Dynamic date generation
let dateElement = new Date();
let newDate = dateElement.getMonth()+1+'.'+ dateElement.getDate()+'.'+ dateElement.getFullYear();

//Listen for click on generate button
document.getElementById('generate').addEventListener('click', onGenerate);
   
    function onGenerate () 
    {const zipCode = document.getElementById('zip').value;
    const feeling = document.getElementById('feeling').value;
   
   //api call
   getWeather(baseURL, zipCode, apiKey)

   /*chain promises*/
   .then((data)=>{
       //Send data to server useing postweather
    postWeather('/add', {temp: data, date: newDate, feeling: feeling})
   })
   .then(()=>updateUI());
};

const catchError = (error) =>console.log("There is a error ",error);
//api call method
const getWeather = async (baseURL, zipCode, Key) => {
   
    //call the api with the url and wait response
    const response = await fetch(`${baseURL + zipCode}${Key}`)
    try{
        //waith response and convert to json
        const dataReceived = await response.json();
        const temp = dataReceived.main.temp;
        const name = dataReceived.name;
        //return temp and city name
        return({temp: temp, name: dataReceived.name}) 
    }
    //catch errors
    catch(error){
        catchError(error);
    }
}

//postWeather method to send to the server
const postWeather = async (url = '', data = {})=>{
    const res = await fetch(url, {
        method : 'POST',
        credentials : 'same-origin',
        headers : {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify(data),
    });

    try{
        const dataReturned = await res.json();
        return(dataReturned);
    }
    
     catch(error){
        catchError(error);
    }
}

//updateing the ui 
const updateUI = async ()=> {
 
    const req = await fetch('/all');
    try{
        const updatedData = await req.json();
        console.log(updatedData);
        //update elements with the received data
        document.getElementById('date').textContent = updatedData.date;
        document.getElementById('temp').textContent = updatedData.temp.temp;
        document.getElementById('city').textContent = updatedData.temp.name;
        document.getElementById('content').textContent = updatedData.feeling;
    }
      
      catch(error){
        catchError(error);
    }
}
