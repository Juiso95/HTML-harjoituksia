function paiva()
{
let paiva = parseInt(document.getElementById("day").value);
switch (paiva) {
  case 1:
    paiva = "Maanantai";
    break;
  case 2:
    paiva = "Tiistai";
    break;
  case 3:
    paiva = "Keskiviikko";
    break;
  case 4:
    paiva = "Torstai";
    break;
  case 5:
    paiva = "Perjantai";
    break;
  case 6:
    paiva = "Lauantai";
    break;
  case 7:
    paiva = "Sunnuntai";
}
document.getElementById("vastaus").innerHTML = "Tänään on " + paiva;
}