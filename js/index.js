console.log("Js connected");
// url=`https://api.openweathermap.org/data/2.5/weather?q=${}&appid=c65586c7d942685afa0efd988a76352a`



function defaultWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=chatkhil&appid=c65586c7d942685afa0efd988a76352a`

    fetch(url)
        .then(response => response.json())
        .then(data => displaytemp(data));
    const city = document.getElementById("city");
    const temp = document.getElementById("temp");

    temp.innerText = `${(data.main.temp - 273).toFixed(2)}`;
    city.innerText = `${data.name}`;


}

defaultWeather();


function search() {
    const getInput = document.getElementById("userinput");
    const value = getInput.value;
    console.log(value);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=c65586c7d942685afa0efd988a76352a`

    fetch(url)
        .then(response => response.json())
        .then(data => displaytemp(data));

}








function displaytemp(data) {
    console.log(data.name);
    const city = document.getElementById("city");
    const temp = document.getElementById("temp");

    temp.innerText = `${(data.main.temp - 273).toFixed(2)}`;
    city.innerText = `${data.name}`;


}





