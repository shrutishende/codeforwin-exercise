const days = 373

const daysToYear = (d)=>{
    const year = d /365
    return year
}

const inYear = daysToYear(days).toFixed()
console.log("year",inYear)

const daysToWeek = (d)=>{
    const week = (d % 365) / 7
    return week
}
const inWeek = daysToWeek(days).toFixed()
console.log("week",inWeek)


const Day = (d)=>{
   const inDay = d - ((inYear * 365) + (inWeek * 7));
    return inDay
}

const daysCount = Day(days)
console.log(daysCount)