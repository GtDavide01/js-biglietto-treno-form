/*Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2 (BONUS):
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).*/



//prendo eta , kilometri percorsi dal passeggero  e bottone 
const userName = document.getElementById("username");
console.log(userName);

const userKm = document.getElementById("userkm");
console.log(userKm);

const userAge = document.getElementById("userage");
console.log(userAge);

const btnInvia = document.getElementById("submit");
console.log(btnInvia);

const pKm = document.querySelector(".user-km-insert")
console.log(pKm);

const pAge = document.querySelector(".user-age-insert")
console.log(pAge);

const pName = document.querySelector(".user-name-insert");
console.log(pName);

const pCode = document.querySelector(".user-code-insert");
console.log(pCode);

const pCar = document.querySelector(".user-car-insert");
console.log(pCar);


const result = document.getElementById("result");

btnInvia.addEventListener("click" , function (){
    //trovo il nome e cognome dell'utente 
    const userNameInput = userName.value;
    console.log(userNameInput);
    // trovo il valore di km che ha inserito l'utente 
    const userKmInput = userKm.value;  
    console.log(userKmInput);

    //trovo il valore dell'età che ha inserito l'utente 
    const userAgeInput = userAge.value;
    console.log(userAgeInput);

    //Restituisco in output il valore di km ed età del passaggero
    pName.innerHTML=userNameInput;
    pKm.innerHTML=userKmInput;
    pAge.innerHTML=` ${userAgeInput}anni`;
    pCode.innerHTML=Math.floor(Math.random()*6000)+1000;
    pCar.innerHTML=Math.floor(Math.random()*11)+1;

    //Azzero i valori una volta inseriti i dati 
    userName.value="";
    userKm.value="";
    userAge.value="";

    const priceBase = 0.21 * userKmInput ;
    console.log(priceBase);
    //Calcolo sconto 
    const discount20 = priceBase * 0.2;
    const discount40 = priceBase * 0.4;
    
    let message = "";
    let priceBaseDiscount  ; 
    if (userAgeInput <= 18 ){
        priceBaseDiscount = priceBase - discount20;
        console.log(priceBaseDiscount);
        message = "Il prezzo del suo biglietto è scontato del 20% ed è " + priceBaseDiscount.toFixed(2) + "€";
        console.log(message);
    } 
    // if se l'utente ha più di 85 anni 
    else if (userAgeInput >= 65 ){
        priceBaseDiscount = priceBase - discount40;
        console.log(priceBaseDiscount); 
        message = "Il prezzo del suo biglietto è scontato del 40% ed è " + priceBaseDiscount.toFixed(2) + "€";
        console.log(message);
    }
    // altrimenti stampa prezzo non scontato 
    else {
        message = "Il prezzo del suo biglietto non è scontato ed è  " + priceBase.toFixed(2) + "€";
        console.log(message);
    }
    result.innerHTML=message;
})