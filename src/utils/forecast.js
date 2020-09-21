const request = require('request')


const forecast = ((latitude,longitude,callback)=>{
    const url ='http://api.weatherstack.com/current?access_key=dff5e6f279a67deaa92e84a4fe62a1dc&query='+longitude+','+latitude+'&units=m'
    request({url,json: true},(error,{body})=>{
        if(error){
            console.log('unable to connect to the weather services ')

        }
        else if(body.error)
        {
            console.log('unable to find the location pls try again')
        }
        else{
            callback(undefined,body.current.weather_descriptions[0]+' temperature currently is '+body.current.temperature+'C however it feels like its '+body.current.feelslike+'C')
                
                
                // weather_desc : response.body.current.weather_descriptions[0],
                // temperature: response.body.current.temperature,
                // feelslike: response.body.current.feelslike
            


    
        }
    })
})

module.exports = forecast