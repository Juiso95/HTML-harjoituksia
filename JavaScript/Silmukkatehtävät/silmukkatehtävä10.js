function salis()
{
    let pw = document.getElementById("salasana").value;
    let salasana = "<p>";
    let taulu = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖabcdefghijklmnopqrstuvwxyzåäö!@$&?"

    for (let i = 0; i < pw.length; i++)
    {
        salasana += pw[i] + taulu[Math.floor(Math.random()*taulu.length)];
    }
    salasana += "</p>";

    document.getElementById("vastaus").innerHTML = salasana;
}