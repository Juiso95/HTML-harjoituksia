function ehto5()
{
    let luku = document.getElementById("luku").value;
    let lause = "";
    for (let i = 1; i <= 10; i++) {
    document.getElementById("vastaus").innerHTML = lause += luku + " x " + i + " =" + luku * i + "<br>";
    }
    event.preventDefault;
}