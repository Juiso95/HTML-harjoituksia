function lasku()
{
    let yks = document.getElementById("eka").value;
    let kaks = document.getElementById("toka").value;
    let kolme = document.getElementById("kolmas").value;
    let nelja = document.getElementById("neljas").value;
    let viisi = document.getElementById("viides").value;
    let summa = Number(yks) + Number(kaks) + Number(kolme) + Number(nelja) + Number(viisi);
    let keskiarvo = summa / Number(5);
    document.getElementById("vastaus").innerHTML = "Lukujen " + yks + ", " + kaks + ", " + kolme + ", " + nelja + " ja " + viisi + ", summa on: " + summa;
    document.getElementById("vastaus2").innerHTML = "Lukujen " + yks + ", " + kaks + ", " + kolme + ", " + nelja + " ja " + viisi + " keskiarvo on: " + keskiarvo;
    event.preventDefault;
}