const character = [
    {
        characterName: 'Ryuji',
        arcana: 'Chariot',
        number: 'VII',
        time: ['Morning', 'Afternoon'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Ann',
        arcana: 'Lovers',
        number: 'VI',
        time: ['Morning', 'Afternoon'],
        DOW: [1,2,3,5,7],
        rain: true
    },
    {
        characterName: 'Yusuke',
        arcana: 'Emperor',
        number: 'IV',
        time: ['Morning', 'Afternoon'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Makoto',
        arcana: 'Priestess',
        number: 'II',
        time: ['Morning', 'Afternoon'],
        DOW:  [2,4,6,7],
        rain: true
    },
    {
        characterName: 'Futaba',
        arcana: 'Hermit',
        number: 'IX',
        time: ['Morning', 'Afternoon'],
        DOW: [3,4,6,7],
        rain: false
    },
    {
        characterName: 'Haru',
        arcana: 'Empress',
        number: 'III',
        time: ['Morning', 'Afternoon'],
        DOW: [1,2,3,4,5,6],
        rain: false
    },
    {
        characterName: 'Akechi',
        arcana: 'Justice',
        number: 'VIII',
        time: ['Evening', 'Night'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Sumire',
        arcana: 'Faith',
        number: '',
        time: ['Morning', 'Afternoon'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Maruki',
        arcana: 'Councillor',
        number: '1',
        time: ['Morning', 'Afternoon'],
        DOW: [1,2,3,5],
        rain: true
    },
    {
        characterName: 'Caroline & Justine',
        arcana: 'Strength',
        number: 'XI',
        time: ['Morning', 'Afternoon', 'Evening', 'Night'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Mishima',
        arcana: 'Moon',
        number: 'XVIII',
        time: ['Evening', 'Night'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Chihaya',
        arcana: 'Fortune',
        number: 'X',
        time: ['Evening', 'Night'],
        DOW: [2,4,6,7],
        rain: false
    },
    {
        characterName: 'Iwai',
        arcana: 'Hanged Man',
        number: 'XII',
        time: ['Evening', 'Night'],
        DOW: [2,4,7],
        rain: true
    },
    {
        characterName: 'Takemi',
        arcana: 'Death',
        number: 'XIII',
        time: ['Morning', 'Afternoon'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Kawakami',
        arcana: 'Temperance',
        number: 'XIV',
        time: ['Evening', 'Night'],
        DOW: [5,6],
        rain: true
    },
    {
        characterName: 'Ohya',
        arcana: 'Devil',
        number: 'XV',
        time: ['Evening', 'Night'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Hifumi',
        arcana: 'Star',
        number: 'XVII',
        time: ['Evening', 'Night'],
        DOW: [1,3,6,7],
        rain: true
    },
    {
        characterName: 'Yoshida',
        arcana: 'Sun',
        number: 'XIX',
        time: ['Evening', 'Night'],
        DOW: [7],
        rain: true
    },
    {
        characterName: 'Sojiro',
        arcana: 'Hierophant',
        number: 'V',
        time: ['Evening', 'Night'],
        DOW: [1,2,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Shinya',
        arcana: 'Tower',
        number: 'XVI',
        time: ['Morning', 'Afternoon'],
        DOW: [1,2,4,6],
        rain: true
    },
]

const characterAuto = [
    {
        characterName: 'Igor',        //AUTO (available on certain days)
        arcana: 'Fool',
        number: '0',
        time: ['Morning', 'Afternoon', 'Evening', 'Night'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Morgana',        //AUTO (available on certain days)
        arcana: 'Magician',
        number: 'I',
        time: ['Morning', 'Afternoon','Evening', 'Night'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Sae',       //AUTO (available on certain days)
        arcana: 'Judgement',
        number: 'XX',
        time: ['Morning', 'Afternoon', 'Evening', 'Night'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    }
]

const IgorDates = ['4/12', '4/18', '5/5', '6/5', '6/11', '8/21', '8/22', '8/31', '10/11', '12/24']
const MorganaDates = ['4/15', '5/2', '6/5', '6/20', '7/9', '7/25', '8/29', '9/17', '10/11', '12/23']
const SaeDates = ['7/9', '7/24', '8/22', '9/13', '10/12', '10/28', '11/20']

const timestamp = Date.now()
const current = new Date(timestamp)

let hour = current.getHours()
let dow = current.getDay()
let date = `${current.getMonth()+1}/${current.getDate()}`

const dowArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function checkAuto(arr, date, pos) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === date) {
            character.unshift(characterAuto[pos])
        }
    }
}

checkAuto(IgorDates, date, 0)
checkAuto(MorganaDates, date, 1)
checkAuto(SaeDates, date, 2)

function currentTime(hour) {
    if (6 <= hour && hour <= 11) {
        let time = 'Morning'
        return time
    }
    else if ((12 <= hour && hour <= 17)) {
        let time = 'Afternoon'
        return time
    }
    else if ((18 <= hour && hour <= 23)) {
        let time = 'Evening'
        return time
    }
    else if ((0 <= hour && hour <= 5)) {
        let time = 'Night'
        return time
    }
}

document.querySelector('#date').textContent = date + ' ' + dowArr[dow-1] + ' ' + currentTime(hour)

//geocoding city name -> lat, long
async function getCoord(city) {
    try {
        const cityLink = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=a4f12ee62dadd273edfef816d090594d`
        let response = await fetch(cityLink)
        let data = await response.json()
        let lat = data[0].lat
        let lon = data[0].lon
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
        console.log(weatherLink)
        let response = await fetch(weatherLink)
        let data = await response.json()
        document.querySelector('#weather').textContent = (data.weather[0].main)
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

function injectHTML(charAvailable) { 
    charAvailable.forEach(char=> {
      document.querySelector(".container").insertAdjacentHTML(
        'beforeend',
        `<div class="card">
        <h5>${char.number}</h5>
        <h4>${char.characterName}</h4>
        <img src="public/${char.characterName.toLowerCase()}.png" alt="${char.characterName} confidant"></img>
        <h5>${char.arcana}</h5>
        </div>`)  
    });
}

injectHTML(check(false)) //default not raining (only uses time data)

function clear() {
    const orig = document.querySelector(".container")
    orig.innerHTML = ""
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