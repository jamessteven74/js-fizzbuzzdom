/*
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100.


MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero
Per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

//scrivo il programma che stampi i numeri in console da 1 a 100.

const listHtml = document.getElementById("list");




for ( let i = 1; i < 101; i++){
    console.log(i);
    let listItem = `<li class="square">${i}</li>`;

    if(i % 3 == 0) {
        listItem = `<li class="square">fizz</li>`;
    }

    if(i % 5 == 0){
        listItem = `<li class="square">buzz</li>`;
    }

    if(i % 15 == 0){
        listItem = `<li class="square">fizzbuzz</li>`;
    }

    listHtml.innerHTML = listHtml.innerHTML + listItem;
    document.getElementById("list").style.fontSize = "100px"
    
}
    

//creazione square

// const listsquare = document.querySelector("square")
// for ( let a = 1; a < 101; a++){
//     console.log(a)
//     const squareitem = `<div.square> ${a}<div.square/>`;
//     listsquare.innerHTML = listsquare.innerHTML + squareitem;
    
// }






