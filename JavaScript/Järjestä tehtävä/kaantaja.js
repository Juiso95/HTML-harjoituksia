function kaantaja()
{
    let lang = document.getElementById("kieli").value;
    if(lang == "eng")
    {
        document.getElementById("vastaus").innerHTML = "Hello World!";
    }
    else if(lang == "swe")
    {
        document.getElementById("vastaus").innerHTML = "Hej Världen!";
    }
    else
    {
         document.getElementById("vastaus").innerHTML = "Hola Mundo!";
    }
    event.preventDefault;
}