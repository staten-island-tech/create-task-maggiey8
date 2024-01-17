const timestamp = Date.now()
const current = new Date(timestamp)

let hour = current.getHours()
let dow = current.getDay()

console.log(hour, dow)

function currentTime(hour) {
    //Day
    if (5 <= hour <= 16) {
        let time = 'morning'
        return time
    }
    //Night
    else if (0 <= hour <= 4 || 17 <= hour <= 23){
        let time = 'night'
        return time
    }
    }

console.log(currentTime(hour))