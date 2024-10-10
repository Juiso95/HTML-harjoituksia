function muunna()
{
    let data = []
    data = [[1, 2, 1, 24], [8, 11, 9, 4], [14, 0, 7, 27], [7, 4, 24, 14], [3, 10, 26, 7]];
    let taulukko = '<table border="2">';
    for (let i = 0; i <data.length; i++)
    {
        taulukko += "<tr>";
        for(let u = 0; u < data[i].length; u++)
        {
            taulukko += "<td>" + data[i][u] + "</td>";
        }
        taulukko += "</tr>";
    }
    taulukko += "</table>";
    document.getElementById("vastaus").innerHTML = taulukko;
}