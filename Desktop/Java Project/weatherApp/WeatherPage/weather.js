function getWeatherData(city) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=7c15aa1a14decf856778d07d6d264477&units=metric")
        .then(function (response) {
            response.json()
                .then(function (data) {
                    console.log(data);
                    searchCity(data, city);
                 showDetail(data);
                //hideDetail();
                 
                })
        })
        .catch(function (Error) {
            console.log(error);
        })
}

callFunction()

function callFunction() {
    var btn = document.getElementById("btn");

    btn.addEventListener("click", function () {
        var city =
            document.getElementById("city").value;

        getWeatherData(city)
    })
}

function setTime(time) {

    return new Date(time * 1000).getHours() + ":00";
     
}
function setDate(date) {

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
var dayNum = new Date(date * 1000).getDay();
//return days[dayNum];
    var d = days[dayNum];
var dayName = d.substring(0,3);
return dayName;
}

function setRound(temp){
    return (Math.round(temp));
}
function dateConverter(timestamp){
  var a = new Date(timestamp * 1000);
  var months = ['01','02','03','04','05','06','07','08','09','10','11','12.'];
 
  var month = months[a.getMonth()];
  var date = a.getDate();
 
  var time = date + '/' + month   ;
  return time;
}
function roundSpeed(speed){
    return (Math.round(speed*3.6));
}



function searchCity(data) {
    var output = '';
    var info = document.getElementById("dataContainer");
    

    output += "<div id='closeButton'>x</div>" + '<div class="dataHeading">' +
        '<h1>' + data.city.name + '</h1>' +
        '<h2>' + setRound(data.list[0].main.temp) + "°C" + '</h2>' + 
        '<h4>' + data.list[0].weather[0].main + '<img src="http://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png">' + '</h4>' +
        '</div>' +
        '<div>' +
        '<h6>' + setRound(data.list[0].main.temp_max) + "°C" + "/" + setRound(data.list[0].main.temp_min)+ "°C" + '</h6>' +
        '</div>' +


        '<table class="table table-hover">' +
        '<thaed>' +
        '<tr>' +
        '<td>' + setDate(data.list[0].dt) + dateConverter(data.list[0].dt) +'</td>' +
        '<td>' + setDate(data.list[1].dt) +dateConverter(data.list[1].dt) + '</td>' +
        '<td>' + setDate(data.list[2].dt) +dateConverter(data.list[2].dt) + '</td>' +
        '<td>' + setDate(data.list[3].dt) +dateConverter(data.list[3].dt) + '</td>' +
        '<td>' + setDate(data.list[4].dt) +dateConverter(data.list[4].dt) + '</td>' +
        '<td>' + setDate(data.list[5].dt) +dateConverter(data.list[5].dt) + '</td>' +
        '<td>' + setDate(data.list[6].dt) +dateConverter(data.list[6].dt) + '</td>' +
        '<td>' + setDate(data.list[7].dt) +dateConverter(data.list[7].dt) + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' + setTime(data.list[0].dt) + '</td>' +
        '<td>' + setTime(data.list[1].dt) + '</td>' +
        '<td>' + setTime(data.list[2].dt) + '</td>' +
        '<td>' + setTime(data.list[3].dt) + '</td>' +
        '<td>' + setTime(data.list[4].dt) + '</td>' +
        '<td>' + setTime(data.list[5].dt) + '</td>' +
        '<td>' + setTime(data.list[6].dt) + '</td>' +
        '<td>' + setTime(data.list[7].dt) + '</td>' +
        '</tr>' +
        '</thaed>' +

        '<tr>' +
        '<td>' + '<img src="http://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png">' + '</td>' +
        '<td>' + '<img src="http://openweathermap.org/img/w/' + data.list[1].weather[0].icon + '.png">' + '</td>' +
        '<td>' + '<img src="http://openweathermap.org/img/w/' + data.list[2].weather[0].icon + '.png">' + '</td>' +
        '<td>' + '<img src="http://openweathermap.org/img/w/' + data.list[3].weather[0].icon + '.png">' + '</td>' +
        '<td>' + '<img src="http://openweathermap.org/img/w/' + data.list[4].weather[0].icon + '.png">' + '</td>' +
        '<td>' + '<img src="http://openweathermap.org/img/w/' + data.list[5].weather[0].icon + '.png">' + '</td>' +
        '<td>' + '<img src="http://openweathermap.org/img/w/' + data.list[6].weather[0].icon + '.png">' + '</td>' +
        '<td>' + '<img src="http://openweathermap.org/img/w/' + data.list[7].weather[0].icon + '.png">' + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' + data.list[0].weather[0].description + '</td>' +
        '<td>' + data.list[1].weather[0].description + '</td>' +
        '<td>' + data.list[2].weather[0].description + '</td>' +
        '<td>' + data.list[3].weather[0].description + '</td>' +
        '<td>' + data.list[4].weather[0].description + '</td>' +
        '<td>' + data.list[5].weather[0].description + '</td>' +
        '<td>' + data.list[6].weather[0].description + '</td>' +
        '<td>' + data.list[7].weather[0].description + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' + setRound(data.list[0].main.temp) + "°C" +
        '</td>' +
        '<td>' +setRound(data.list[1].main.temp) + "°C" + 
        '</td>' +
        '<td>' + setRound(data.list[2].main.temp) + "°C" + '</td>' +
        '<td>' + setRound(data.list[3].main.temp) + "°C" + '</td>' +
        '<td>' + setRound(data.list[4].main.temp )+ "°C" + '</td>' +
        '<td>' + setRound(data.list[5].main.temp) + "°C" + '</td>' +
        '<td>' + setRound(data.list[6].main.temp) + "°C" + '</td>' +
        '<td>' + setRound(data.list[7].main.temp) + "°C" + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' + roundSpeed(data.list[0].wind.speed) + "km/h" + '</td>' +
        '<td>' + roundSpeed(data.list[1].wind.speed) + "km/h" + '</td>' +
        '<td>' + roundSpeed(data.list[2].wind.speed) + "km/h" + '</td>' +
        '<td>' + roundSpeed(data.list[3].wind.speed) + "km/h" + '</td>' +
        '<td>' + roundSpeed(data.list[4].wind.speed) + "km/h" + '</td>' +
        '<td>' + roundSpeed(data.list[5].wind.speed) + "km/h" + '</td>' +
        '<td>' + roundSpeed(data.list[6].wind.speed) + "km/h" + '</td>' +
        '<td>' + roundSpeed(data.list[7].wind.speed)+ "km/h" + '</td>' +
        '</tr>' +
        '<tr>' +
        '</table>'+
        '<div class="dataBottom">' +
        '<p id="detailButton" class="daysbtn">details</p>'+
        '<button id="morelButton" class="daysbtn">3 days</button>'+
        '</div>'

    info.innerHTML = output;
    info.style.display = "block";

    closeData();
}

function closeData() {
    var close = document.getElementById("closeButton");
    close.addEventListener("click", function () {
        document.getElementById("dataContainer").style.display = "none"
    })
}
 
function setDetail(data){
  var res = '';
    var detail = document.getElementById("detailContainer");
    
    var rain = data.list[0].rain;
     if(rain == null){
        threeHoursRain = 0;
    } else {
        threeHoursRain = rain["3h"]; 
    }


res +=  '<table class="table table-hover">' +
        
        '<tr>' +
        '<td>Population</td>' +
        '<td>' + data.city.population+ '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Humidity</td>' +
        '<td>' + data.list[0].main.humidity +'%'+ '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Cloudness</td>'+ 
        '<td>' + data.list[0].clouds.all +'%'+'</td>' +
        '</tr>' +
        '<tr>' 
   
  res +='<td> Rain volume/last 3h</td>' +
        '<td>' + threeHoursRain+ 'mm'+'</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Region weather map</td>' +
        '<td>'+'<a href="https://openweathermap.org/weathermap?zoom=8&lat='+ data.city.coord.lat +'"&lon="'+data.city.coord.lon+'">go to map</a>'+'</td>' +
        '</tr>' +
        '</table>'
    
        
        detail.innerHTML = res;
  
}


function showDetail(data){
    var showHide= document.getElementById("detailButton");
    showHide.addEventListener("mouseover",function(){
   document.getElementById("detailContainer").style.display="block"; 
        setDetail(data);
    });
    showHide.addEventListener("mouseout",function(){
   document.getElementById("detailContainer").style.display="none"; 
        
    });
    
}


//function getMoreDays(data){
//  var days = '';
//    var info = document.getElementById("detailContainer");
//
//    days += '<div class="detailHeading">'+
//        '<h1>'+data.city.name+'</h1>'+
//         '<h2>'+data.list[8].main.temp+"°C" +'</h2>'+ '<h4>'+data.list[8].weather[0].main+'</h4>'+
//         
//        '</div>'+
//        '<div>'+
//        '<h6>'+data.list[8].main.temp_max+"°C" + "/"+data.list[8].main.temp_min+"°C"+'</h6>'+
//        '</div>'
//        
//        info.innerHTML = days;
//  
//}
//
