const names=("Guadalupe", "Ollie", "Aki")

function writeCards(names,event){
    let loopMessages=[];
    for(let i=0; i <names.length; i++) {
      loopMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return loopMessages;
}

function countDown(){
    let count=11;
    while(count>0){
        console.log(`${count}`)
        count--
    }
}