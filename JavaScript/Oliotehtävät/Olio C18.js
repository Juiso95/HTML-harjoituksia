//Ajoneuvo pohja luokka
class Ajoneuvo {
    //Käynnistys metodi
    kaynnista() {
        console.log("Ajoneuvo käynnistyy");
    }
    //Pysätyä metodi
    pysayta() {
        console.log("Ajoneuvo pysähtyy");
    }
}
//Auto luokka ja käynnistyksen tarkennus
class Auto extends Ajoneuvo {
    kaynnista() {
        console.log("Auto käynnistyy hiljaisesti");
    }
}
//Polkupyörä luokka ja käynnistyksen tarkennus
class Polkupyora extends Ajoneuvo {
    kaynnista() {
        console.log("Polkupyörä ei tarvitse käynnistystä");
    }
}
//Auto sekä polkupyörä oliot
const auto = new Auto();
auto.kaynnista();
auto.pysayta();

const pyora = new Polkupyora();
pyora.kaynnista();
pyora.pysayta();