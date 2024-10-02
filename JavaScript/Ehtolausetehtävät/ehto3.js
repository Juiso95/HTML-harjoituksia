function ehto3()
{
    let vuosi = document.getElementById("kvuosi").value;
    if(vuosi % 4 == 0 && vuosi % 100 != 0)
    {
        document.getElementById("vastaus").innerHTML = "Vuosi on karkausvuosi."
    }
    else if(vuosi % 400 == 0)
    {
        document.getElementById("vastaus").innerHTML = "Vuosi on karkausvuosi."
    }
    else 
    {
        document.getElementById("vastaus").innerHTML = "Vuosi ei ole karkausvuosi."
    }
    event.preventDefault;
}