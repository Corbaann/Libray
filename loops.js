let quote=["hey phil","how are you","Umekua wapi","give me the tea" ]

for (let i=0 ; i<quote.length ; i++){
console.log(quote[i]);
}

let cards=[1,2,3,4,5,6]

for(let i=0 ; i<cards.length ; i++){
    console.log(cards[i]);
}

let test=["we","can","do","it"]

let greet=document.getElementById("greet")
for(let i=0 ; i<test.length ; i++){
    greet.textContent+=test[i] +" "
}