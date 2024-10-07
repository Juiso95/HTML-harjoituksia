function lasku()
{
    let luku1 = document.getElementById("korotettava").value;
    let luku2 = document.getElementById("potenssi").value;
    tulos = luku1;
    for(let i = 1; i < luku2; i++)
    {
        tulos *= luku1
    }
    document.getElementById("vastaus").innerHTML = "<p>" + tulos + "</p>";
}