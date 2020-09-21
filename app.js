let rndm = Math.floor(Math.random() * 101); /* Rasgele sayı üretmek için Math (0 dahil 1   hariç)*/
document.getElementById("btn").addEventListener("click",check)

let counter = 0;

let message = document.getElementById('message');
let counter_p = document.getElementById('number');


function check() {

    let num = Number(document.getElementById("text").value);
    
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
        message.innerText="Congrats!!"
        message.style.display = 'block';
        console.log(num) 
        console.log(rndm) 

    }else if (rndm > num) {
        message.innerText="Biraz yukari cik"
        message.style.display = 'block'; 
        console.log(num) 
        console.log(rndm) 


    }else {
        message.innerText="Biraz asagi in"
        message.style.display = 'block'; 
        console.log(num) 
        console.log(rndm) 

    } 

    counter++;
    counter_p.style.display = "block";
    counter_p.innerText = `This is your test number: ${counter}`;


}
