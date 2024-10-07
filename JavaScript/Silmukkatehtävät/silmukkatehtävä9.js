function luku()
{
    let numbers = [document.getElementById("luku1").value, document.getElementById("luku2").value, document.getElementById("luku3").value, document.getElementById("luku4").value, document.getElementById("luku5").value];
    let minValue = Math.min(...numbers);
    let maxValue = Math.max(...numbers);

    document.getElementById("vastaus").innerHTML = minValue;
    document.getElementById("vastaus1").innerHTML = maxValue;
}