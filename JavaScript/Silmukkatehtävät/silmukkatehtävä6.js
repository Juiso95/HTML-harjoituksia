function ensimmäinen()
{
    let numero = "<p>"
    for (let i=1;i<=10; i++)
    {
       numero += i + " ";
    }
    numero += "</p>"
    document.getElementById("vastaus").innerHTML = numero;
}