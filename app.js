let button = document.getElementById("btn");
let message = document.getElementById('message');
let counter_p = document.getElementById('number');
let input =  document.getElementById("text");

button.addEventListener("click",check);
input.addEventListener("keypress", onEnter);

let rndm = Math.floor(Math.random() * 101); /* Rasgele sayı üretmek için Math (0 dahil 1   hariç)*/
let counter = 0;

input.focus();
input.tabIndex = '0';
button.tabIndex = '1';


function check() {

    let num = Number(input.value);
    
    if(isNaN(num) || num == ''){
        
        message.innerText="Are you sure that this is a number?";
        clear();
        return;
    }

    if (rndm == num) {
        counter++;
        window.alert('You are the winner :D. You guest after 29 times!')
        if(window.confirm('You wanna play again?')){
            window.location.reload();
        }else{
            window.close();
        }

    }else if (rndm > num) {
        message.innerText="I am thinking about higher number";
        
    }else {
        message.innerText="I am thinking about lower number";
    }

    counter++;
    counter_p.innerText = `This is your test number: ${counter}`;
    clear();

}

function onEnter(event) {
    if (event.key === "Enter") {
        button.click();
    }
}

function clear(){
    input.focus();
    input.value = '';
}

