function randomUser() 
{
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
        console.log(data.results[0]);
        //Tulostus sivulle
        document.getElementById("v1").innerHTML = "<img src=\'" + data.results[0].picture.large + "\'>";
        document.getElementById("v1").innerHTML += "<br />" + data.results[0].name.first + " " + data.results[0].name.last;
        document.getElementById("v2").innerHTML = data.results[0].location.city;
        document.getElementById("v3").innerHTML = data.results[0].location.country;
        var city = data.results[0].location.city;
        weather(city)
    } );
    
}

    async function weather(paikkakunta) {
        //paikkakunta = document.getElementById("v2").value;
        const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=' + paikkakunta;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '9a9a2437abmsh65d2d686ffd708cp128c66jsnaba264faf394',
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
            }
        };
    
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            document.getElementById("v4").innerHTML =
                "Paikkakunta: " + result.location.name + ", " + result.location.country + " <br/>" +
                "Lämpötila: " + result.current.temp_c + " astetta<br/>" +
                "Kosteus: " + result.current.humidity + "%<br/>" +
                "Tuulen nopeus " + result.current.wind_kph + " km/t";
        } catch (error) {
            console.error(error);
        }
}