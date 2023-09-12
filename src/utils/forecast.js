const request = require('request')

const forecast = (longitude , latitude , callback) => {
    const url = 'https://api.tomorrow.io/v4/weather/forecast?location=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) +'&apikey=HYXUNWq0dvHf74gMOX6c2PnzIjiaJ4Ls'
    request({url , json:true} , (error  , {body}) => {
        if(error){
            callback('Unable to connect with weather services' , undefined)
        }else if(body.code){
            callback('Unable to find location' , undefined)
        }else{
            callback(undefined , 'It is currently ' + body.timelines.daily[0].values.temperatureApparentAvg + ' degree temperature and ' + body.timelines.daily[0].values.precipitationProbabilityAvg + ' percent chance for rain' )
        }
    })
}

module.exports = forecast