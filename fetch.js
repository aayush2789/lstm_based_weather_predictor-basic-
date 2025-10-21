require('dotenv').config();
const {MongoClient}=require("mongodb");
const uri=process.env.MONGO_URI//for connection to the local database server

//API key and the api endpoint to fetch current weather data
const API_key=process.env.WEATHER_API_KEY;
//lat=44.34&lon=10.99
const lat=18.514121;
const lon=73.857527;
const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;

const fetchAPI = async () => {
    console.log('Fetching weather data...');
    const client=new MongoClient(uri);//this server is connected to the local db as a client to the database server
    try {
        let response=await fetch(url);
        console.log('Status:',response.status);
        if(!response.ok){
            throw new Error(`API request failed with status :${response.status}`); 
        }
        const curr=await response.json();
        await client.connect();//connect the client to the database server
        const db=client.db("weather_db");
        const collection=db.collection("current_weather_data");
        await collection.insertOne(curr);
        console.log('data inserted in db successfully->',curr);
        
    } catch (error) {
        console.error('Error fetching data:',error);
    }finally{
        await client.close();//disconnect from the database server
        console.log('disconnected from the server');
    }
};

const intervalFetch=(hours)=>{
    const intervalms=hours*60*60*1000;
    console.log(`fetching data every ${hours} hours`);
    fetchAPI();
    setInterval(fetchAPI,intervalms);
};

intervalFetch(1);
