const character = [
    {
        characterName: 'Igor',        //AUTO 
        arcana: 'Fool',
        time: ['day', 'night'],
        DOW: [1,2,3,4,5,6,7],
        location: ['Velvet Room'],
        rain: true
    },
    {
        characterName: 'Morgana',        //AUTO
        arcana: 'Magician',
        time: ['day','night'],
        DOW: [1,2,3,4,5,6,7],
        location: ['LeBlanc'],
        rain: true
    },
    {
        characterName: 'Sae',       //AUTO
        arcana: 'Judgement',
        time: ['day, night'],
        DOW: [1,2,3,4,5,6,7],
        location: ['Interrogation room'],
        rain: true
    },
    {
        characterName: 'Ryuji',
        arcana: 'Chariot',
        time: ['day'],
        DOW: [1,2,3,4,5,6,7],
        location: ['Shujin Academy', 'Arcade'],
        rain: true
    },
    {
        characterName: 'Ann',
        arcana: 'Lovers',
        time: ['day'],
        DOW: [1,2,3,5,7],
        location: ['Underground Mall'],
        rain: true
    },
    {
        characterName: 'Yusuke',
        arcana: 'Emperor',
        time: ['day'],
        DOW: [1,2,3,4,5,6,7],
        location: ['Underground Walkway'],
        rain: true
    },
    {
        characterName: 'Makoto',
        arcana: 'Priestess',
        time: ['day'],
        DOW:  [2,4,6,7],
        location: ['Shujin Academy'],
        rain: true
    },
    {
        characterName: 'Futaba',
        arcana: 'Hermit',
        time: ['day'],
        DOW: [3,4,6,7],
        location: ['Yongen-Jaya'],
        rain: false
    },
    {
        characterName: 'Haru',
        arcana: 'Empress',
        time: ['day'],
        DOW: [1,2,3,4,5,6],
        location: ['Shujin Academy Rooftop'],
        rain: false
    },
    {
        characterName: 'Akechi',
        arcana: 'Justice',
        time: ['night'],
        DOW: [1,2,3,4,5,6,7],
        location: ['Kichioji'],
        rain: true
    },
    {
        characterName: 'Sumire',
        arcana: 'Chariot',
        time: ['day'],
        DOW: [1,2,3,4,5,6,7],
        location: ['Shujin Academy, Shibuya'],
        rain: true
    },
    {
        characterName: 'Maruki',
        arcana: 'Councillor',
        time: ['day'],
        DOW: [1,2,3,5],
        location: ['Shujin Academy'],
        rain: true
    },
    {
        characterName: 'Chihaya',
        arcana: 'Fortune',
        time: ['night'],
        DOW: [2,4,6,7],
        location: ['Shinjuku'],
        rain: false
    },
    {
        characterName: 'Lavenza',     //SPECIAL
        arcana: 'Strength',
        time: ['day', 'night'],
        DOW: [1,2,3,4,5,6,7],
        location: ['Velvet Room'],
        rain: true
    },
    {
        characterName: 'Iwai',
        arcana: 'Hanged Man',
        time: ['night'],
        DOW: [2,4,7],
        location: ['Untouchable'],
        rain: true
    },
    {
        characterName: 'Takemi',
        arcana: 'Death',
        time: ['day'],
        DOW: [1,2,3,4,5,6,7],
        location: ['Clinic'],
        rain: true
    },
    {
        characterName: 'Kawakami',
        arcana: 'Temperance',
        time: ['night'],
        DOW: [5,6],
        location: ['LeBlanc'],
        rain: true
    },
    {
        characterName: 'Ohya',
        arcana: 'Devil',
        time: ['night'],
        DOW: [1,2,3,4,5,6,7],
        location: ['Crossroads'],
        rain: true
    },
    {
        characterName: 'Hifumi',
        arcana: 'Star',
        time: ['night'],
        DOW: [1,3,6,7],
        location: ['Kanda'],
        rain: true
    },
    {
        characterName: 'Mishima',
        arcana: 'Moon',
        time: ['night'],
        DOW: [1,2,3,4,5,6,7],
        location: ['Shibuya, Shinjuku, Akihabara'],
        rain: true
    },
    {
        characterName: 'Yoshida',
        arcana: 'Sun',
        time: ['night'],
        DOW: [7],
        location: ['Central Square'],
        rain: true
    },
    {
        characterName: 'Sojiro',
        arcana: 'Hierophant',
        time: ['night'],
        DOW: [1,2,4,5,6,7],
        location: ['LeBlanc'],
        rain: true
    },
    {
        characterName: 'Shinya',
        arcana: 'Tower',
        time: ['day'],
        DOW: [1,2,4,6],
        location: ['Arcade'],
        rain: true
    },
]

const timestamp = Date.now()
const current = new Date(timestamp)

let hour = current.getHours()
let dow = current.getDay()

console.log(hour, dow)

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

console.log(currentTime(hour))

character.forEach(char => {
    //compare current dow and time; add weather later ...
    if (char.time.includes(currentTime(hour)) && char.DOW.includes(dow)){
        //check for 1 or more
        console.log(char.characterName)
    }
});