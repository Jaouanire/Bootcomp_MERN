const cities = require('./cities.js');
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);

const url = "https://api.open-meteo.com/v1/forecast"
const path = "./input.txt";


async function getWeather(path) {
    try{
        const cityName = await new Promise((resolve, reject) => {
            rl.question(`write name of city\n`,(userInput)=> {
                    resolve(userInput);
            });
        })
        const city = cities.find(obj => obj.name === cityName);
        const query = `?latitude=${city.lat}&longitude=${city.lng}&current_weather=true`;
        const response = await fetch(url+query);
        const data = await response.json();
        fs.writeFileSync(`./${city.name}.txt`, `in ${city.name} it is ${data.current_weather.temperature}${data.current_weather_units.temperature}`, 'utf8')
    } catch (err) {
        console.log(err);
    }
}

getWeather(path) 