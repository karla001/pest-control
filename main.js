let previousCalc = false;

function calculate(){
    //get values
    let goombaNum = document.getElementsByName('goombas')[0].value;
    let bobNum = document.getElementsByName('boboms')[0].value;
    let cheepNum = document.getElementsByName('cheeps')[0].value;
    //do math calculations
    let total = 'Total: '+ parseInt((goombaNum *5)+(bobNum*7)+(cheepNum*11));
    //create solution element
    const messageContainer = document.createElement('div');
    messageContainer.className = 'total';
    let messageText = document.createTextNode(total);
    messageContainer.appendChild(messageText)
    //remove the previous total
    if(previousCalc){
        let remove= document.getElementsByClassName('total')[0]; 
        let h1= document.getElementsByTagName('h1')[0]; 
        h1.removeChild(remove);
    }else{
        previousCalc = true;
    }
    //append new total
    let container= document.getElementsByTagName('h1')[0]; 
    container.appendChild(messageContainer);
}