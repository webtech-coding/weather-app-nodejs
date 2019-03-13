const axios=require('axios')

class Weather{
    constructor({language,city}){
        this.language=language
        this.city=city
        this.error=false
    }

    async getWeather(){
        const apiKey="ba33787c7eac54f7d7cf5138a7ad7adb"
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=${apiKey}`

        try{            
            const response=await axios.get(url)
            this.weatherData=response.data
            console.log(this.weatherData)
            
        }catch(e){
           this.error=true
        }
    }
}

module.exports=Weather
