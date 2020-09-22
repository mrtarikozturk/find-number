let rndm = Math.floor(Math.random() * 101); /* Rasgele sayı üretmek için Math (0 dahil 1   hariç)*/
document.getElementById("btn").addEventListener("click",check)

let message = document.getElementById('message');
let counter_p = document.getElementById('number');
let input =  document.getElementById("text");
let counter = 0;


function check() {

    let num = Number(input.value);
    
    if(isNaN(num) || num == ''){
        if(message.style.display="none"){
            message.style.display="block";
            message.innerText="Are you sure that this is a number?";
        }else{
            message.innerText="Are you sure that this is a number?";
        }
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
    input.focus();
    input.value = '';


}
