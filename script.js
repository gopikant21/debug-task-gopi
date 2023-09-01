let secretNumber = Math.trunc(20 * Math.random() + 1);
let highscore = 20
let time = [0, 0] ;
let hightime; // new variable
var timerId; // 


document.querySelector('.again').addEventListener('click', function () {//click not Click
    time = [0, 0]
    
    secretNumber = Math.trunc(20 * Math.random() + 1); // secretNumber = 10;
    console.log(secretNumber)
    document.querySelector('.score').textContent = '20'; //.Score
    document.querySelector('.guess').value = '';
    document.getElementById('timer').innerHTML = '';
    document.querySelector('.check').style.backgroundColor = '#f1356d';
    
    //two lines are added
    document.querySelector('.number').textContent = '?';
    document.querySelector("body").style.backgroundColor = 'white';

});

document.querySelector('.check').addEventListener('click', () => { // Click
    //console.log("check clicked!")

    let guess = document.querySelector('.guess').value;
    
    timerId =  setInterval(() => { //timer
        time[1] ++ ;
        if (time[1] % 60 == 0) {
            time[0] ++ ;
            time[1] = 0;
        } 
    document.getElementById('timer').innerHTML = ` ${time[0]} : ${time[1]} `
    
    }, 1000 );
     
    document.querySelector('.check').style.backgroundColor = "black"; //this

    if (!guess) {
        document.querySelector(".message").textContent = "Not a Valid input";
    }
    else if (guess == secretNumber) { //===
        
        clearInterval(timerId)
        document.querySelector(".message").textContent = "You guessed it Right";
        document.querySelector('.number').style.width = '30rem'
        document.querySelector("body").style.backgroundColor = 'green';
        document.querySelector('.number').textContent = secretNumber;
        
        //new code
        if(document.querySelector('.highscore').textContent == 0){
            highscore = document.querySelector('.score').textContent
            hightime = document.getElementById('timer').textContent
            clearInterval(timerId)
            console.log(document.getElementById('timer').textContent)
        }
        
        if (highscore < document.querySelector('.score').textContent) {
            highscore = document.querySelector('.score').textContent; //.Score
            hightime = document.getElementById('timer').textContent //new code
            
            //console.log(document.getElementById('timer').textContent)
            //console.log(highscore)
        }
        
        document.querySelector('.highscore').textContent = highscore + " (" + hightime + ") "; // code change
        
    }
    else if (guess > secretNumber) {
        document.querySelector(".message").textContent = "Too high";
        document.querySelector('.score').textContent--;
       
    }

    else {
        document.querySelector(".message").textContent = "Too low ";
        document.querySelector('.score').textContent--;
    }

    if (document.querySelector('.score').textContent <= 0) {
        document.querySelector(".message").textContent = "You lost the Game";
        clearInterval(timerId);
        document.getElementById('timer').innerHTML = '';
        document.getElementById('hiddenResult').textContent = secretNumber;//hiddenresult
        //this.style.backgroundColor = '#f1356d';
        document.querySelector("body").style.backgroundColor = '#f1356d' // new code
    }
    
    

});