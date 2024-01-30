const character = [
    {
        characterName: 'Igor',        //AUTO 
        arcana: 'Fool',
        time: ['day', 'night'],
        DOW: ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'],
        location: ['Velvet Room'],
        rain: true
    },
    {
        characterName: 'Morgana',        //AUTO
        arcana: 'Magician',
        time: ['day','night'],
        DOW: ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'],
        location: ['LeBlanc'],
        rain: true
    },
    {
        characterName: 'Sae',       //AUTO
        arcana: 'Judgement',
        time: ['day, night'],
        DOW: ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'],
        location: ['Interrogation room'],
        rain: true
    },
    {
        characterName: 'Ryuji',
        arcana: 'Chariot',
        time: ['day'],
        DOW: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        location: ['Shujin Academy', 'Arcade'],
        rain: true
    },
    {
        characterName: 'Ann',
        arcana: 'Lovers',
        time: ['day'],
        DOW: ['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Sunday'],
        location: ['Underground Mall'],
        rain: true
    },
    {
        characterName: 'Yusuke',
        arcana: 'Emperor',
        time: ['day'],
        DOW: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        location: ['Underground Walkway'],
        rain: true
    },
    {
        characterName: 'Makoto',
        arcana: 'Priestess',
        time: ['day'],
        DOW:  ['Tuesday', 'Thursday', 'Saturday', 'Sunday'],
        location: ['Shujin Academy'],
        rain: true
    },
    {
        characterName: 'Futaba',
        arcana: 'Hermit',
        time: ['day'],
        DOW: ['Wednesday', 'Thursday', 'Saturday', 'Sunday'],
        location: ['Yongen-Jaya'],
        rain: false
    },
    {
        characterName: 'Haru',
        arcana: 'Empress',
        time: ['day'],
        DOW: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        location: ['Shujin Academy Rooftop'],
        rain: false
    },
    {
        characterName: 'Akechi',
        arcana: 'Justice',
        time: ['night'],
        DOW: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        location: ['Kichioji'],
        rain: true
    },
    {
        characterName: ['Kasumi', 'Sumire'],
        arcana: 'Chariot',
        time: ['day'],
        DOW: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        location: ['Shujin Academy, Shibuya'],
        rain: true
    },
    {
        characterName: 'Maruki',
        arcana: 'Councillor',
        time: ['day'],
        DOW: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
        location: ['Shujin Academy'],
        rain: true
    },
    {
        characterName: 'Chihaya',
        arcana: 'Fortune',
        time: ['night'],
        DOW: ['Tuesday', 'Thursday', 'Saturday', 'Sunday'],
        location: ['Shinjuku'],
        rain: false
    },
    {
        characterName: ['Caroline and Justine', 'Lavenza'],     //SPECIAL
        arcana: 'Strength',
        time: ['day', 'night'],
        DOW: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        location: ['Velvet Room'],
        rain: true
    },
    {
        characterName: 'Iwai',
        arcana: 'Hanged Man',
        time: ['night'],
        DOW: ['Tuesday', 'Thursday', 'Sunday'],
        location: ['Untouchable'],
        rain: true
    },
    {
        characterName: 'Takemi',
        arcana: 'Death',
        time: ['day'],
        DOW: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        location: ['Clinic'],
        rain: true
    },
    {
        characterName: 'Kawakami',
        arcana: 'Temperance',
        time: ['night'],
        DOW: ['Friday', 'Saturday'],
        location: ['LeBlanc'],
        rain: true
    },
    {
        characterName: 'Ohya',
        arcana: 'Devil',
        time: ['night'],
        DOW: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        location: ['Crossroads'],
        rain: true
    },
    {
        characterName: 'Hifumi',
        arcana: 'Star',
        time: ['night'],
        DOW: ['Monday', 'Wednesday', 'Saturday', 'Sunday'],
        location: ['Kanda'],
        rain: true
    },
    {
        characterName: 'Mishima',
        arcana: 'Moon',
        time: ['night'],
        DOW: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        location: ['Shibuya, Shinjuku, Akihabara'],
        rain: true
    },
    {
        characterName: 'Yoshida',
        arcana: 'Sun',
        time: ['night'],
        DOW: ['Sunday'],
        location: ['Central Square'],
        rain: true
    },
    {
        characterName: 'Sojiro',
        arcana: 'Hierophant',
        time: ['night'],
        DOW: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        location: ['LeBlanc'],
        rain: true
    },
    {
        characterName: 'Shinya',
        arcana: 'Tower',
        time: ['day'],
        DOW: ['Monday', 'Tuesday', 'Thursday', 'Saturday'],
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
        console.log(char.characterName)
    }
});