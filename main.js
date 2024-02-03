const character = [
    {
        characterName: 'Igor',        //AUTO 
        arcana: 'Fool',
        time: ['Morning', 'Evening'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Morgana',        //AUTO
        arcana: 'Magician',
        time: ['Morning','Evening'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Sae',       //AUTO
        arcana: 'Judgement',
        time: ['Morning', 'Evening'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Caroline & Justine',     //REqUEST
        arcana: 'Strength',
        time: ['Morning', 'Evening'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Mishima',       //REQUEST
        arcana: 'Moon',
        time: ['Evening'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Ryuji',
        arcana: 'Chariot',
        time: ['Morning'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Ann',
        arcana: 'Lovers',
        time: ['Morning'],
        DOW: [1,2,3,5,7],
        rain: true
    },
    {
        characterName: 'Yusuke',
        arcana: 'Emperor',
        time: ['Morning'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Makoto',
        arcana: 'Priestess',
        time: ['Morning'],
        DOW:  [2,4,6,7],
        rain: true
    },
    {
        characterName: 'Futaba',
        arcana: 'Hermit',
        time: ['Morning'],
        DOW: [3,4,6,7],
        rain: false
    },
    {
        characterName: 'Haru',
        arcana: 'Empress',
        time: ['Morning'],
        DOW: [1,2,3,4,5,6],
        rain: false
    },
    {
        characterName: 'Akechi',
        arcana: 'Justice',
        time: ['Evening'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Sumire',
        arcana: 'Faith',
        time: ['Morning'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Maruki',
        arcana: 'Councillor',
        time: ['Morning'],
        DOW: [1,2,3,5],
        rain: true
    },
    {
        characterName: 'Chihaya',
        arcana: 'Fortune',
        time: ['Evening'],
        DOW: [2,4,6,7],
        rain: false
    },
    {
        characterName: 'Iwai',
        arcana: 'Hanged Man',
        time: ['Evening'],
        DOW: [2,4,7],
        rain: true
    },
    {
        characterName: 'Takemi',
        arcana: 'Death',
        time: ['Morning'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Kawakami',
        arcana: 'Temperance',
        time: ['Evening'],
        DOW: [5,6],
        rain: true
    },
    {
        characterName: 'Ohya',
        arcana: 'Devil',
        time: ['Evening'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Hifumi',
        arcana: 'Star',
        time: ['Evening'],
        DOW: [1,3,6,7],
        rain: true
    },
    {
        characterName: 'Yoshida',
        arcana: 'Sun',
        time: ['Evening'],
        DOW: [7],
        rain: true
    },
    {
        characterName: 'Sojiro',
        arcana: 'Hierophant',
        time: ['Evening'],
        DOW: [1,2,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Shinya',
        arcana: 'Tower',
        time: ['Morning'],
        DOW: [1,2,4,6],
        rain: true
    },
]

const timestamp = Date.now()
const current = new Date(timestamp)

let hour = current.getHours()
let dow = current.getDay()
const dowArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


//use this to compare to special dates (ingame auto?)
let date = `${current.getMonth()+1}/${current.getDate()}`

document.querySelector('#date').textContent = date + ' ' + dowArr[dow-1] + ' ' + currentTime(hour)

//console.log(hour, dow)

function currentTime(hour) {
    //Morning
    if (5 <= hour && hour <= 16) {
        let time = 'Morning'
        return time
    }
    //Evening
    else if ((0 <= hour && hour <= 4)|| (17 <= hour && hour <= 23)){
        let time = 'Evening'
        return time
    }
}

//geocoding city name -> lat, long
async function getCoord(city) {
    try {
        const cityLink = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=a4f12ee62dadd273edfef816d090594d`
        let response = await fetch(cityLink)
        let data = await response.json()
        let lat = data[0].lat
        let lon = data[0].lon
        console.log(lat, lon)
        return [lat, lon]
    }
    catch(error) {
        console.error(error)
        document.querySelector('#input').value = 'Could not get location data'
    }
}

async function getWeather(city) {
    try {
        const arr = await getCoord(city)
        const weatherLink = `https://api.openweathermap.org/data/2.5/weather?lat=${arr[0]}&lon=${arr[1]}&appid=a4f12ee62dadd273edfef816d090594d`
        let response = await fetch(weatherLink)
        let data = await response.json()
        document.querySelector('#weather').textContent = (data.weather[0].main)
        /* if (data.weather[0].main === ('Rain') || data.weather[0].main === ('Snow')|| data.weather[0].main === ('Drizzle') || data.weather[0].main === ('Thunderstorm')) {
            return true
        }
        */
       if (200 <= data.weather[0].id && data.weather[0].id <=622) { //all precipitation ids range from these numbers
           return true
       }
        else {
            return false
        }
    }
    catch(error) {
        console.error(error)
        document.querySelector('#input').value = 'Could not get weather data'
    }
}

function injectHTML(charAvailable) { 
    charAvailable.forEach(char=> {
      document.querySelector(".container").insertAdjacentHTML(
        'beforeend',
        `<div class="card">
        <h4>${char.characterName}</h4>
        <img src="public/${char.characterName.toLowerCase()}.png" alt="${char.characterName} confidant"></img>
        <h5>${char.arcana}</h5>
        </div>`)  
    });
  }

injectHTML(check(true))

  function clear() {
    const orig = document.querySelector(".container")
    orig.innerHTML = ""
  }

function check(rain) {
    if (rain === true) {    //only if it is raining
        const charAvailable = character.filter(char => char.rain === true && char.time.includes(currentTime(hour)) && char.DOW.includes(dow))
        return charAvailable
    }
    else {
        const charAvailable = character.filter(char => char.time.includes(currentTime(hour)) && char.DOW.includes(dow))
        return charAvailable
    }
}

document.querySelector('#submit').addEventListener('click', async function(event) {
    event.preventDefault()

    //if there is a space in the input, changes to -
    let city = document.querySelector('#input').value
    if (city.includes(' ')) {
        city = city.replace(' ', '-')
    }

    clear()

    let rain = await getWeather(city)
    injectHTML(check(rain))    
    }
    );

    