#!/usr/bin/env node

const weather = require('forkeepweather')

if(process.argv[2]==='--help' || process.argv[2]==='-H'){
    console.log(`
        功能: 获取某地天气
        用法: lzsWeather 北京
    `)
}else{
    let city = process.argv[2]
    weather(city).then(data=>{
        console.log(data)
        console.log(`当前城市:${data.results[0].currentCity}`)
        console.log(`PM 2.5:${data.results[0].pm25}`)
        console.log(`**********天气状况*********`)
        console.log(`日    期:${data.results[0].weather_data[0].date}`)
        console.log(`温    度:${data.results[0].weather_data[0].temperature}`)
        console.log(`风    向:${data.results[0].weather_data[0].wind}`)
        console.log(`气    候:${data.results[0].weather_data[0].weather}`)

    }).catch((err)=>{
        console.log(err)
    })    
}

