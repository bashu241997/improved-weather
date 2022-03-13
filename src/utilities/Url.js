const key = process.env.NEXT_PUBLIC_API_KEY
export const api = {
    daily_city:(lat,lon) => {return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${key}`},
    Airpollution:(lat,lang)=>{ return `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lang}&appid=${key}`},
    location:(dat) => { return `http://api.openweathermap.org/geo/1.0/direct?q=${dat}&limit=5&appid=${key}`},
    historical:(lat,lon) =>{ `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${key}`}
}