function laheta()
{
    let etunimi = document.getElementById("enimi").value;
    let sukunimi = document.getElementById("snimi").value;
    let osoite = document.getElementById("osoite").value;
    let pnro = document.getElementById("pnro").value;
    let ptp = document.getElementById("ptp").value;
    let puhelin = document.getElementById("puhnro").value;
    let password = document.getElementById("pass").value;
    let confirmpassword = document.getElementById("cpass").value;

    if(etunimi.trim() == "")
    {
        alert("Anna etunimi");
    }
    else if(sukunimi.trim() == "")
    {
        alert("Anna sukunimi");
    }
    else if(osoite.trim() == "")
    {
        alert("Anna osoite");
    }
    else if(pnro.trim() == "")
    {
        alert("Anna postinumero");
    }
    else if(ptp.trim() == "")
    {
        alert("Anna postitoimipaikka");
    }
    else if(puhelin.trim() == "")
    {
        alert("Anna puhelinnumero");
    }
    else if(password.trim() == "")
    {
        alert("Salasana ei voi olla tyhjä")
        return false;
    }

    //Minimi salasanan pituus

    else if(password.length < 8){
        alert("Salasanan pitää olla vähintään 8 merkkiä");
    }

    //Maksimi salasanan pituus

    else if(password.length > 20){
        alert("Salasanan saa olla maksimissaan 20 merkkiä");
    }

    else if(confirmpassword.trim() == "")
    {
        alert("Varmistus salasana ei voi olla tyhjä");
        return false;
    }
    else if(password != confirmpassword)
    {
        alert("Salasanat eivät täsmää!");
    } 
    else
    {
        alert("Kiitos tiedoista!");
    }
    event.preventDefault;
}