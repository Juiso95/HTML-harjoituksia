async function skin() {

    let weapon = document.getElementById("weapon").value
    const url = 'https://cs-skin-api.p.rapidapi.com/random/' + weapon;
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '9a9a2437abmsh65d2d686ffd708cp128c66jsnaba264faf394',
		'x-rapidapi-host': 'cs-skin-api.p.rapidapi.com'
	}
    };

    try {

	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    document.getElementById("v1").innerHTML = result.name + "<br />";
    document.getElementById("v1").innerHTML += result.class + "<br />";
    document.getElementById("v1").innerHTML += result.price + "<br />";
    document.getElementById("v2").innerHTML = "<img width='500px' height=auto src=\'" + result.img + "\'>";
    } catch (error) {
	console.error(error);
    }
}