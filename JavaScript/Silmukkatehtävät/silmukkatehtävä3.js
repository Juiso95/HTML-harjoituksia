function silmukka3() 
{
    let ksana = document.getElementById("sana").value;
    let vastaus = 'ei ole';
    for (var i = 0; i < ksana.length; i++)
    if(ksana[i] == 'Ö' || ksana[i] == 'Ä' || ksana[i] == 'ö' || ksana[i] == 'ä')
    {
        vastaus = 'on';
    }    
    document.getElementById("vastaus").innerHTML = '<p>' + vastaus + '<p>';
}