let screen= document.getElementById('screen');
button = document.querySelectorAll('button');
let screenValue = ' ';

// Creating Sense of Multiply*
for(item of button){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('button text is ', buttonText);
        if(buttonText=='x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }  
        // Creating Sense of C
        else if (buttonText =='C'){
            screenValue = "";
            screen.value = screenValue;
        }
        //  Creating Sense of =
        else if (buttonText =='='){
            screen.value = eval(screenValue); 
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}