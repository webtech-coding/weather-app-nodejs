const express=require('express') //express framework
const app=express()
const template=require('hbs') //node templating Engine
const path=require('path')

const Weather=require('./weather')

const port=3000 //application port

const publicPath=path.join(__dirname,'../public/')

const viewsPath=path.join(__dirname,'../templates/views')
const partialspath=path.join(__dirname,'../templates/partials')

app.listen(port,()=>{
    console.log('App started')
})

app.set('view engine','hbs')
app.set('views',viewsPath)
template.registerPartials(partialspath)
app.use(express.static(publicPath))


//Page routes
app.get('',(req,res)=>{

    let requestData={
        language:'en',
        city:'helsinki'
    }
    
    if(!(req.query.language) && !(req.query.search)){
        
        getWeatherData(requestData)

    }else if(req.query.search ===''){
        
        return res.render('index',{
            weather:'this is frustating'
        })
    }else{

        requestData.language=req.query.language
        requestData.city=req.query.search
        getWeatherData(requestData)
    }

    async function getWeatherData(data){

        const weather=new Weather(requestData);
        await weather.getWeather()

        if(!weather.error){
            res.render('index',{
                city:weather.weatherData.name,
                country:weather.weatherData.sys.country,
                wind:weather.weatherData.wind.speed,
                temperature:Math.floor(weather.weatherData.main.temp),
                min:Math.floor(weather.weatherData.main.temp_min),
                max:Math.floor(weather.weatherData.main.temp_max),
                cloud:weather.weatherData.clouds.all,
                main:weather.weatherData.weather[0].main,
                humidity:weather.weatherData.main.humidity
            })
        }
    }
})