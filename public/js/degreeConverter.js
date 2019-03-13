var checkBox=document.querySelector('.check')
var min=document.querySelector('#min')
var max=document.querySelector('#max')
var temperature=document.querySelector('#temperature')

var originalTemperature={
    min:min.innerHTML,
    max:max.innerHTML,
    temperature:temperature.innerHTML
}

var switchKey=document.querySelector('#switch')



switchKey.addEventListener('click', ConvertDegree)

function getCelcius(value){
   
    return Math.floor((value-32)*5/9)
}

function getFahrenheight(value){
   
    return Math.floor((9*value+160)/5)
}

function ConvertDegree(){
    
    if(checkBox.checked){
        min.innerHTML=getFahrenheight(originalTemperature.min)+'&deg;F'
        max.innerHTML=getFahrenheight(originalTemperature.max)+'&deg;F'
        temperature.innerHTML=getFahrenheight(originalTemperature.temperature)+'&deg;F'
    }else{
        min.innerHTML=Math.floor(originalTemperature.min)+'&deg;C'
        max.innerHTML=Math.floor(originalTemperature.max)+'&deg;C'
        temperature.innerHTML=Math.floor(originalTemperature.temperature)+'&deg;C'
    }
}



