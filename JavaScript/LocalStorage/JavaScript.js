function syota() {
    var syotettyavain = document.getElementById("syotettyavain")
    var syotettyarvo = document.getElementById("syotettyarvo")
    var syottoButton = document.getElementById("syottoButton")
    var varasto = document.getElementById("varasto")
    var avain = syotettyavain.value;
    var arvo = syotettyarvo.value;

    if(avain && arvo)
    {
        localStorage.setItem(avain,arvo);
        location.reload();
    }
}

function lista() {
    otsikko.style.display = 'block';
    for(let i = 0; i  < localStorage.length; i++)
    {
        const avain = localStorage.key(i);
        const arvo = localStorage.getItem(avain);
        varasto.innerHTML += avain + " " + arvo + " <button type='button' id="+avain+" onclick='poista(this)'>Poista tieto</button>"+ "<br>";
    }
}

function poista(pois) {
    const avain = pois.id;
    localStorage.removeItem(avain)
    varasto.innerHTML = "";
    lista();
}