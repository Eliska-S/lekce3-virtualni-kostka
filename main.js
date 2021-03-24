// tady je místo pro náš program

let kostka;

function hodKostkou (selector, imageSelector){
    kostka = Math.floor(Math.random()*6) + 1;
    document.getElementById(imageSelector).src = "obrazky/" + kostka + ".png";
    
    if (kostka === 6) {
        document.getElementById(selector).innerHTML = "Hodila jsi 6! Vyhrála jsi!!!";
        document.querySelector('.tlacitko').innerHTML = "Vyhrála jsi!";
    } else {
        document.querySelector('.tlacitko').innerHTML= "Házej";
        document.getElementById(selector).innerHTML = "Hodila jsi " + kostka + ". Házej znovu.";
    }
}
