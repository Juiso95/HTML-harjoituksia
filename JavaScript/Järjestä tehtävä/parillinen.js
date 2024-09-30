function parillinen()
{
    let luku;
    luku = parseInt(document.getElementById("luku").value);
    if(luku%2 == 0)
    {
        document.getElementById("vastaus").innerHTML = "Antamasi luku " + luku + " on parillinen";
    }
    else {
        document.getElementById("vastaus").innerHTML = "Antamasi luku " + luku + " ei ole parillinen";
    }
}