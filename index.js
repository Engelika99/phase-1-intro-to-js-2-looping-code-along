// Code your solutions in this file
    function writeCards(names, value){
        let messageNames = [];
        for(let i =0; i < names.length; i++){
        messageNames.push(`Thank you, ${names[i]}, for the wonderful ${value} gift!`);
}
return messageNames;
}
    function countDown(number){
        let value = number;
        while(value >= 0){
        console.log(value--);
    }
return number;
}