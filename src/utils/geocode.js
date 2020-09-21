const request = require('request')

const geocode =(address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibGVhcm5lcjk5IiwiYSI6ImNrZjJtd2swcDEzdDQyd2xueWZvbDA3eXoifQ.zNTxsUowXDD7PeZyVMiA-w&limit=1'
    request({url,json:true}, (error,{body})=>{
        if(error){
            callback('unable to connect to location services',undefined)
        }
        else if(body.features.length===0)
        {
            callback('unable to find location pls try again')
        }
        else{
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location : body.features[0].place_name
            })
        }
    })
}


module.exports = geocode