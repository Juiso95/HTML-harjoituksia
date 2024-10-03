function salasana() {
    let sana = document.getElementById("sana").value;
    let salasana = "<p>";
    for (var j = 0; j < sana.length; j++)
    {
        salasana += sana[j] + 'Ö';
    }
    salasana += "</p>";
    document.getElementById("salasana").innerHTML = salasana;
}