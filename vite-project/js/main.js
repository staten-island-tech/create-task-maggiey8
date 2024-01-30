import {character} from "./arr"

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