const request = require('request')

const geocode = (address , callback) => {
    const url = 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?address=' + encodeURIComponent(address) + '&f=json&token=AAPKe8ac8a612b00470ca6d51cd315765b21I5asGI3b31ESkBzgJmVfEiRZNy2P8ZESEUV1sKs46_2EsdjvPo41ZS8Z-QbZrGqO'
    request({url , json:true} , (error , {body}) =>{
        if(error){
            callback('Unable to connect with weather services' , undefined)
        }else if(body.candidates.length === 0){
            callback('Unable to find coordinates' , undefined)
        }else{
            callback(undefined , {
                longitude : body.candidates[0].location.x ,
                latitude : body.candidates[0].location.y ,
                location : body.candidates[0].address
            })
        }
    })
}

module.exports = geocode