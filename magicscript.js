const prediction = [
"It is certain",
"It is decidedly so",
"Reply hazy again",
"Cannot predict now",
"Do not count on it",
"My sources say no",
"Outlook not so good",
"Signs point yes",
"There appears to be a problem"
];


function myFunction() {
   prediction.sort(function(a,b){ return 0.5 - Math.random()});
   document.getElementById("numer").innerHTML=prediction;
   document.getElementById("numer").innerHTML=prediction[0];
   document.getElementById("numer").style.fontSize="16px";
   setTimeout(timeup, 4000);


   function timeup(){
      document.getElementById("numer").innerHTML="8";
      document.getElementById("numer").style.fontSize = "40px";
      document.getElementById("predict").value="";


   }
};









/*const predictLife = document.querySelector("#predict");
let buttonOne = document.querySelector(".btn-btn");
let randomNumber = Math.floor(Math.random() * 8 );
let eightBall = '';

 switch (randomNumber) {
 	case 0:
 	eightBall = 'It is certain';
 	break;
 	case 1:
 	eightBall = 'It is decidedly so';
 	break;
 	case 2:
 	eightBall = 'Reply hazy try again';
 	break;
 	case 3:
 	eightBall = 'Cannot predict now';
 	break;
 	case 4:
 	eightBall = 'Do not count on it';
 	break;
 	case 5:
 	eightBall = 'My sources say no';
 	break;
 	case 6:
 	eightBall = 'Outlook not so good';
 	break;
 	case 7:
 	eightBall = 'Signs point to yes';
 	break;
 	default:
    console.log('There appears to be a problem');
 	break;
 }
 document.getElementById("numer").innerHtml = randomNumber;

 function myfunction() {
   randomNumber.sort = "eightBall"
 }

 buttonOne.addEventListener("click", (e) => {
 	alert(eightBall);
 })*/

 