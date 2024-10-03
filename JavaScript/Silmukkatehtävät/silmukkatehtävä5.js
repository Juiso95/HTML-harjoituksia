function hiphei()
{
    let vsana = "";
    for (var i = 1; i <= 100; i++)
    
    if(i%3 == 0 && i%5 == 0)
    {
        vsana +="Hip Heijaa ";
    }
    else if(i%5 == 0)
    {
        vsana+= "Heijaa ";
    }
    else if(i%3 == 0)
    {
        vsana+= "Hip ";
    }
    else 
    {
        vsana+= i + " ";
    }
    document.getElementById("vastaus").innerHTML = vsana;
}