import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});





//
console.log("-----------------------------------")
console.log("------WELCOME TO QUIZTIME!!!!------")
console.log("-----------------------------------")
//



//login
let name = await userInput.question("name: ")


let kloptWachtwoord= false;

while(kloptWachtwoord== false){
    let wachtwoord= await userInput.question("voer het wactwoord in: " );
    if (wachtwoord== "QUIZ1234"){
        kloptWachtwoord =true;
        console.log("welkom" + name); 
    }

}
//




console.log("let's start " + name +" !!!!")

console.log("")
console.log("antwoord op de volgende vragen!!")

let verder="ja";
let score= 0;
let aantalVragen = 2;




while(verder == "ja" || verder == "Ja" || verder == "JA"){
    
    let vraag = await userInput.question("welke kleur heeft een mandarijn: ")
    if (vraag =="oranje" || vraag =="Oranje" || vraag =="ORANJE"){ 
        console.log("jaaa!! correcte antwoord.")
        score++
        console.log("uw score is nu: " + score)
        }else(console.log("jammer!"))


        vraag =parseFloat (await userInput.question("hoeveel is 10 + 10: "))
        if (vraag == 20){
            console.log("jaaa!! correcte antwoord.")
            score++
        }else(console.log("jammer!"))

        verder = await userInput.question("Wil je verder spelen? ")

}
console.log("totaal score: " + score)


for(let rij= 0; rij < score; rij++ ){
    let felicitatie= "hoera"
    console.log(felicitatie)
    
}



console.log("")
console.log("your feedback: ")
console.log("")



let a = await userInput.question("Zal je deze quiz later nog eens spelen? (ja/nee) ")
let b = parseFloat(await userInput.question("Hoeveel punten geef je deze quiz op 10? "))

if( a== "ja" || a == "Ja" || a == "JA"  && b >=7 ){
    console.log("")
    console.log("YEAH! YOU'R A TOPFAN!!")
} else if( a== "ja" || a == "Ja" || a == "JA"  && b >=5 && b <=7 ){
    console.log("")
    console.log("NOT BAD, MEDIUMFAN!")
}else if( a== "nee" || a == "Nee" || a == "NEE"  && b <5){
    console.log("")
    console.log("OKE, JUST NOT A FAN!")
}

console.log("")
console.log("veel bedankt om te spelen!!! tot volgende ;)")
console.log("")





process.exit();







//Zal je deze quiz later nog eens spelen? (ja/nee)
// Hoeveel punten geef je deze quiz op 10?

//ja    &   >=7 && <=10     : TOPFAN!
//ja    &   >=5 && <=7      : MEDIUMFAN!
//nee   &   <5              : NOT A FAN!







/*
zolang de gebruiker verderspeelt, 
je het totaal aantal punten zal optellen.
Als de gebruiker stopt met spelen, zal je per juist antwoord   "HOERA" op het scherm afprinten.

Dus, 3 punten =
hoera
hoera
hoera

*/