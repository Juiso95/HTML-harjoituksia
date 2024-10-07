function matset()
{
    let num1, num2, nenluku, tonluku, nensumma=0, tonsumma=0, nenluvut="", tonluvut=""; 
    num1 = parseInt(document.getElementById("nro1").value);
    num2 = parseInt(document.getElementById("nro2").value);
    if(num1%2 == 0)
    {
        nenluku = num1;
    }
    else{
        nenluku = num1 + 1;
    }
    for(let i = nenluku; i <= num2; i+=2)
    {
        nenluvut += i + " ";
        nensumma += i;
    }
    if(num1%2 == 0)
    {
        tonluku = num1 + 1;
    }
    else
    {
        tonluku = num1;
    }
    for(let j = tonluku; j <= num2; j+=2)
    {
        tonluvut += j + " ";
        tonsumma += j;
    }
    document.getElementById("vastaus").innerHTML = "<p>Parilliset numerot ovat: " + nenluvut + " ja niiden summa on: " + nensumma + "</p>" + "<p> Parittomat numerot ovat: " + tonluvut + " ja niiden summa on: " + tonsumma + "</p>";
}