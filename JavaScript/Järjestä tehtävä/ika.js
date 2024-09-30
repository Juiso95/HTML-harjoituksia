function age()
{
    let ika = document.getElementById("ika").value;
    if(ika < 16)
    {
        document.getElementById("vastaus").innerHTML = "Voit ajaa polkupyörää."
    }
    else if(ika < 18)
    {
        document.getElementById("vastaus").innerHTML = "Voit ajaa mopoa."
    }
    else
    {
        document.getElementById("vastaus").innerHTML = "Voit ajaa autoa."
    }
    event.preventDefault;
}