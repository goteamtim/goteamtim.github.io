var openWeatherAK = '6f2d1baf6970f631301c86937b93c441';
var weatherData = {},//.weather[0].description
locationInfo = {},
tempUnits = "F";

$.getJSON("http://ipinfo.io",(json)=>{locationInfo = json;});

function startCurrTime(){
var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector('#currentTime').innerHTML = h + ":" + m;
    //changeBackground();
    var t = setTimeout(startCurrTime, 3000);
};

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
};

function changeBackground(){
    var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var r = parseInt(255/24*hour);
    var g = parseInt(255/60*min);
    var b = parseInt(255/60*sec);
    document.body.style.backgroundColor = "rgb("+b + "," + r + "," + b + ")";
};

function loadWeatherData(){
	if (locationInfo.hasOwnProperty("postal")) {
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + locationInfo.postal + ",us&appid="+openWeatherAK+'&units=Imperial', function(json){
		//Gather weather here as object first then use it later in broken out functuions?
			weatherData = json;
            weatherData.celsius = {};
            weatherData.celsius.temp = ((weatherData.main.temp-32)*5/9);
            weatherData.celsius.temp_min =((weatherData.main.temp_min-32)*5/9);
            weatherData.celsius.temp_max =((weatherData.main.temp_max-32)*5/9); 
            document.querySelector("#locationName").innerHTML = json.name;
            document.querySelector("#currentTemp").innerHTML = Math.round(json["main"].temp);
            document.querySelector("#range").innerHTML = Math.round(json.main.temp_min) + " - " + Math.round(json.main.temp_max);
            document.querySelector(".owf").classList.add("owf-" + json.weather[0].id);
            document.querySelector("#loadingText").style.visibility = "hidden";
            document.querySelector("#weatherContent").style.visibility = "visible";
            
            
	});
    }else{
        $.getJSON("http://ipinfo.io",(json)=>{locationInfo = json;});
        setTimeout(loadWeatherData,3000);
    }
}

function fade() {

    //$('#currentTime').delay(500).fadeIn(800).delay(500).fadeOut(fade);
}
fade();
startCurrTime();
loadWeatherData();

function swapTempUnits(){
    if(tempUnits == "F"){
        document.querySelector("#currentTemp").innerHTML = Math.round(weatherData.celsius.temp);
        document.querySelector("#range").innerHTML = Math.round(weatherData.celsius.temp_min) + " - " + Math.round(weatherData.celsius.temp_max);
        var unitSymbols = document.querySelectorAll(".unitSymbol");
        for(var i = 0; i < unitSymbols.length; i++){
            unitSymbols[i].innerHTML = "&#8451;";
        }
        tempUnits = "C";
    }else {
        document.querySelector("#currentTemp").innerHTML = Math.round(weatherData["main"].temp);
        document.querySelector("#range").innerHTML = Math.round(weatherData.main.temp_min) + " - " + Math.round(weatherData.main.temp_max);
        var unitSymbols = document.querySelectorAll(".unitSymbol");
        for(var i = 0; i < unitSymbols.length; i++){
            unitSymbols[i].innerHTML = "&#8457;";
        }
        tempUnits = "F";    
}
}


    var tempUnitElements = document.querySelectorAll(".unitSelect");
for(var i = i; i < tempUnitElements.length; i++){
    tempUnitElements[i].on('click',swapTempUnits());
    console.log("added");
  }
