const character = [
    {
        characterName: 'Igor',        //AUTO 
        arcana: 'Fool',
        time: ['day', 'night'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Morgana',        //AUTO
        arcana: 'Magician',
        time: ['day','night'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Sae',       //AUTO
        arcana: 'Judgement',
        time: ['day, night'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Lavenza',     //SPECIAL
        arcana: 'Strength',
        time: ['day', 'night'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Ryuji',
        arcana: 'Chariot',
        time: ['day'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Ann',
        arcana: 'Lovers',
        time: ['day'],
        DOW: [1,2,3,5,7],
        rain: true
    },
    {
        characterName: 'Yusuke',
        arcana: 'Emperor',
        time: ['day'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Makoto',
        arcana: 'Priestess',
        time: ['day'],
        DOW:  [2,4,6,7],
        rain: true
    },
    {
        characterName: 'Futaba',
        arcana: 'Hermit',
        time: ['day'],
        DOW: [3,4,6,7],
        rain: false
    },
    {
        characterName: 'Haru',
        arcana: 'Empress',
        time: ['day'],
        DOW: [1,2,3,4,5,6],
        rain: false
    },
    {
        characterName: 'Akechi',
        arcana: 'Justice',
        time: ['night'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Sumire',
        arcana: 'Faith',
        time: ['day'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Maruki',
        arcana: 'Councillor',
        time: ['day'],
        DOW: [1,2,3,5],
        rain: true
    },
    {
        characterName: 'Chihaya',
        arcana: 'Fortune',
        time: ['night'],
        DOW: [2,4,6,7],
        rain: false
    },
    {
        characterName: 'Iwai',
        arcana: 'Hanged Man',
        time: ['night'],
        DOW: [2,4,7],
        rain: true
    },
    {
        characterName: 'Takemi',
        arcana: 'Death',
        time: ['day'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Kawakami',
        arcana: 'Temperance',
        time: ['night'],
        DOW: [5,6],
        rain: true
    },
    {
        characterName: 'Ohya',
        arcana: 'Devil',
        time: ['night'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Hifumi',
        arcana: 'Star',
        time: ['night'],
        DOW: [1,3,6,7],
        rain: true
    },
    {
        characterName: 'Mishima',
        arcana: 'Moon',
        time: ['night'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Yoshida',
        arcana: 'Sun',
        time: ['night'],
        DOW: [7],
        rain: true
    },
    {
        characterName: 'Sojiro',
        arcana: 'Hierophant',
        time: ['night'],
        DOW: [1,2,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Shinya',
        arcana: 'Tower',
        time: ['day'],
        DOW: [1,2,4,6],
        rain: true
    },
]

const timestamp = Date.now()
const current = new Date(timestamp)

let hour = current.getHours()
let dow = current.getDay()

//use this to compare to special dates (ingame auto?)
let date = `${current.getMonth()+1}/${current.getDate()}`
console.log(date)

//console.log(hour, dow)

function currentTime(hour) {
    //Day
    if (5 <= hour && hour <= 16) {
        let time = 'day'
        return time
    }
    //Night
    else if ((0 <= hour && hour <= 4)|| (17 <= hour && hour <= 23)){
        let time = 'night'
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
        console.log(error)
        document.querySelector('#input').value = 'Could not get Geocoding data'
    }
}


async function getWeather(city) {
    try {
        const arr = await getCoord(city)
        const weatherLink = `https://api.openweathermap.org/data/2.5/weather?lat=${arr[0]}&lon=${arr[1]}&appid=a4f12ee62dadd273edfef816d090594d`
        console.log(weatherLink)
        let response = await fetch(weatherLink)
        let data = await response.json()
        console.log(data.weather[0].main)
        if (data.weather[0].main === ('Rain') || data.weather[0].main === ('Snow')) {
            return true
        }
        else {
            return false
        }
    }
    catch(error) {
        console.log(error)
        document.querySelector('#input').value = 'Could not get Weather data'
    }
}

document.querySelector('#submit').addEventListener('click', function(event) {
    event.preventDefault()

    //if there is a space in the input, changes to - 
    let city = document.querySelector('#input').value
    if (city.includes(' ')) {
        city = city.replace(' ', '-')
    }

    console.log(getWeather(city))

    character.forEach(char => {
        //compare current dow and time; add weather later ...
        if (char.time.includes(currentTime(hour)) && char.DOW.includes(dow)){
            console.log(char.characterName, char.arcana)
            //make a function to inject html (images in public? is there even a public folder)
        }
    });
})

