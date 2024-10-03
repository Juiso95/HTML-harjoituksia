function parillinen() {
    let arvo = document.getElementById("luku").value;
    var jono = "<p>";
    for(var i = 2; i <= arvo; i = i + 2)
    {
        jono += i;
        jono += " ";
    }
    jono += "</p>";
        document.getElementById("vastaus").innerHTML = jono;
}