function laskepisteet()
{
    let annettusana = document.getElementById("sana").value;
    let pisteet = 0;
    for(let i = 0; i < annettusana.length; i++)
    {
        switch(annettusana[i]) {
            case "a":            
            case "A":            
            case "e":            
            case "E":            
            case "i":            
            case "I":            
            case "n":            
            case "N":            
            case "s":            
            case "S":            
            case "t":            
            case "T":
                pisteet++;
                break;            
            case "o":            
            case "O":            
            case "ä":            
            case "Ä":            
            case "k":            
            case "K":            
            case "l":            
            case "L":  
                pisteet+=2;
                break; 
            case "u":        
            case "U":        
            case "m":        
            case "M":   
                pisteet+=3;
                break;
            case "y":     
            case "Y":     
            case "h":     
            case "H":     
            case "j":     
            case "J":     
            case "p":     
            case "P":     
            case "r":     
            case "R":     
            case "v":     
            case "V":
                pisteet+=4;
                break;
            case "ö":     
            case "Ö":     
            case "d":     
            case "D":     
                pisteet+=7
                break;
            case "b":
            case "B":
            case "f":
            case "F":
            case "g":
            case "G":
                pisteet+=8;
                break;
            case "c":
            case "C":
                pisteet+=10;
                break;
            default:
                pisteet+=12;
        }
        document.getElementById("vastaus").innerHTML = "Sanan " + annettusana + " pisteet ovat: " + pisteet;
    }
}