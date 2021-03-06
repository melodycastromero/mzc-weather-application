const request = require('request') //request is nmp library
const forecast = (latitude ,longitude, callback) =>{
const url = 'https://api.darksky.net/forecast/46c9392f45cb8ee69a2bf2dd27c27c48/' + latitude + ',' + longitude

    request({url, json: true}, (error, { body }) =>{
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Undetermine location!', undefined)
        } else {
            callback( undefined, body.daily.data[0].summary + ' It is currently ' +  
            body.currently.temperature  + " degrees out. There is a " + 
            body.currently.precipProbability + "% chance of rain. With the temperature high of " + 
            body.daily.data[0].temperatureHigh + " with the low of " +
            body.daily.data[1].temperatureLow 
            )
        }
    })
}


module.exports = forecast
