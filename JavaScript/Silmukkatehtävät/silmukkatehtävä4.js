function kert()
{
    let kertoluku = document.getElementById("kertoma").value;
    let lasku = 1;
    for (var i = 1; i <= kertoluku; i++)
    {
        lasku *=i;
    }
    document.getElementById("vastaus").innerHTML = "Luvun " + kertoluku + " kertoma on " +lasku;
}