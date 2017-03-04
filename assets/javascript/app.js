
var correct = 0;
var wrong = 0;
var unanswered= 0; 
var time = 30;
var myVar; //timer
var question1;
var question2;
var question3;
var question4;
var question5;
var questions = { 
	first:{
		Q: "random demo question 1 ", //place holder
		A:[
			{answer: "demo answer 1a "}, //placeholder answer
			{answer: "demo answer 1b "}, //placeholder answer
			{answer: "demo answer 1c "}, //placeholder answer correct one
			{answer: "demo answer 1d "}, //placeholder answer
		]
	},
	second:{
		Q: "random demo question 2 ", //place holder
		A:[
			{answer: "demo answer 2a "}, //placeholder answer correct one
			{answer: "demo answer 2b "}, //placeholder answer
			{answer: "demo answer 2c "}, //placeholder answer
			{answer: "demo answer 2d "}, //placeholder answer
		]
	},
	third:{
		Q: "random demo question 3 ", //place holder
		A:[
			{answer: "demo answer 3a "}, //placeholder answer
			{answer: "demo answer 3b "}, //placeholder answer
			{answer: "demo answer 3c "}, //placeholder answer correct one
			{answer: "demo answer 3d "}, //placeholder answer
		]
	},
	fourth:{
		Q: "random demo question 4 ", //place holder
		A:[
			{answer: "demo answer 4a "}, //placeholder answer
			{answer: "demo answer 4b "}, //placeholder answer correct one
			{answer: "demo answer 4c "}, //placeholder answer
			{answer: "demo answer 4d "}, //placeholder answer
		]
	},
	fifth:{
		Q: "random demo question 5 ", //place holder
		A:[
			{answer: "demo answer 5a "}, //placeholder answer
			{answer: "demo answer 5b "}, //placeholder answer
			{answer: "demo answer 5c "}, //placeholder answer correct one
			{answer:"demo answer 5d "} //placeholder answer
		]
	}
};
function endgame(){
$("#results").html("<p> Correct Answers: "+ correct + "</p>" +"<p> Incorrect Answers: " + wrong + "</p>" + "<p> Unanswered: " + unanswered + "</p>");
$(".Questions").empty(); 
$("#timer").html("All done!");
$(".Answers").empty(); 
clearInterval(myVar);
}

function Time(){
$("#timer").html("Time remaining: " + time + " Seconds!");	
time--; 
//console.log(time);
}

function answers(){
	//  for (var i = 0; i < 4; i++) {
	// 	 console.log(i);
	// 	console.log(questions.fifth.A[1].answer);
	// $("#A1").append('<label> <input type="radio" name="1optionsRadios">' + questions.first.A[i].answer+".  " + '</label>');
	// $("#A2").append('<label> <input type="radio" name="2optionsRadios">' + questions.second.A[i].answer+".  " + '</label>');
	// $("#A3").append('<label> <input type="radio" name="3optionsRadios">' + questions.third.A[i].answer+".  " + '</label>');
	// $("#A4").append('<label> <input type="radio" name="4optionsRadios">' + questions.fourth.A[i].answer+".  " + '</label>');
	// $("#A5").append('<label><input type="radio" name="5optionsRadios">' + questions.fifth.A[i].answer+".  " + '</label>');
	//  }
	//set one
$("#A1").append('<label> <input type="radio" name="1optionsRadios" onclick="Q1Selector(this.value)" value="A" id="QQ1">' + questions.first.A[0].answer+ '</label>');
$("#A1").append('<label> <input type="radio" name="1optionsRadios" onclick="Q1Selector(this.value)" value="B" id="QQ1">' + questions.first.A[1].answer+ '</label>');
$("#A1").append('<label> <input type="radio" name="1optionsRadios" onclick="Q1Selector(this.value)" value="C" id="QQ1">' + questions.first.A[2].answer+ '</label>');
$("#A1").append('<label> <input type="radio" name="1optionsRadios" onclick="Q1Selector(this.value)" value="D" id="QQ1">' + questions.first.A[3].answer+ '</label>');
//set two
$("#A2").append('<label> <input type="radio" name="2optionsRadios"onclick="Q2Selector(this.value)" value="A" id="QQ2">' + questions.second.A[0].answer+ '</label>');
$("#A2").append('<label> <input type="radio" name="2optionsRadios"onclick="Q2Selector(this.value)" value="B" id="QQ2">' + questions.second.A[1].answer+ '</label>');
$("#A2").append('<label> <input type="radio" name="2optionsRadios"onclick="Q2Selector(this.value)" value="C" id="QQ2">' + questions.second.A[2].answer+ '</label>');
$("#A2").append('<label> <input type="radio" name="2optionsRadios"onclick="Q2Selector(this.value)" value="D" id="QQ2">' + questions.second.A[3].answer+ '</label>');
//set three
$("#A3").append('<label> <input type="radio" name="3optionsRadios"onclick="Q3Selector(this.value)" value="A" id="QQ3">' + questions.third.A[0].answer+ '</label>');
$("#A3").append('<label> <input type="radio" name="3optionsRadios"onclick="Q3Selector(this.value)" value="B" id="QQ3">' + questions.third.A[1].answer+ '</label>');
$("#A3").append('<label> <input type="radio" name="3optionsRadios"onclick="Q3Selector(this.value)" value="C" id="QQ3">' + questions.third.A[2].answer+ '</label>');
$("#A3").append('<label> <input type="radio" name="3optionsRadios"onclick="Q3Selector(this.value)" value="D" id="QQ3">' + questions.third.A[3].answer+ '</label>');
//set four
$("#A4").append('<label> <input type="radio" name="4optionsRadios" onclick="Q4Selector(this.value)" value="A" id="QQ4">' + questions.fourth.A[0].answer+ '</label>');
$("#A4").append('<label> <input type="radio" name="4optionsRadios" onclick="Q4Selector(this.value)" value="B" id="QQ4">' + questions.fourth.A[1].answer+ '</label>');
$("#A4").append('<label> <input type="radio" name="4optionsRadios" onclick="Q4Selector(this.value)" value="C" id="QQ4">' + questions.fourth.A[2].answer+ '</label>');
$("#A4").append('<label> <input type="radio" name="4optionsRadios" onclick="Q4Selector(this.value)" value="D" id="QQ4">' + questions.fourth.A[3].answer+ '</label>');
//set five
$("#A5").append('<label> <input type="radio" name="5optionsRadios" onclick="Q5Selector(this.value)" value="A" id="QQ5">' + questions.fifth.A[0].answer+ '</label>');
$("#A5").append('<label> <input type="radio" name="5optionsRadios" onclick="Q5Selector(this.value)" value="B" id="QQ5">' + questions.fifth.A[1].answer+ '</label>');
$("#A5").append('<label> <input type="radio" name="5optionsRadios" onclick="Q5Selector(this.value)" value="C" id="QQ5">' + questions.fifth.A[2].answer+ '</label>');
$("#A5").append('<label> <input type="radio" name="5optionsRadios" onclick="Q5Selector(this.value)" value="D" id="QQ5">' + questions.fifth.A[3].answer+ '</label>');
}

function QS(){//loads questions 
	$("#Q1").html(questions.first.Q);
	$("#Q2").html(questions.second.Q);
	$("#Q3").html(questions.third.Q);
	$("#Q4").html(questions.fourth.Q);
	$("#Q5").html(questions.fifth.Q);
	
}
function Q1Selector(browser){
	document.getElementById("A1").value = browser; 
}
function Q2Selector(browser){
	document.getElementById("A2").value = browser; 
}
function Q3Selector(browser){
	document.getElementById("A3").value = browser; 
}
function Q4Selector(browser){
	document.getElementById("A4").value = browser; 
}
function Q5Selector(browser){
	document.getElementById("A5").value = browser; 
}
function Q1check(){//question one check
console.log(document.getElementById("A1").value);
if ( document.getElementById("A1").value === "C"){
	correct++;
}
else if ( document.getElementById("A1").value === "A" || document.getElementById("A1").value === "B" || document.getElementById("A1").value === "C") {
	wrong++;
}
else {
	unanswered++;
}
}
function Q2check(){//question two check
console.log(document.getElementById("A2").value);
if ( document.getElementById("A2").value === "A"){
	correct++;
}
else if ( document.getElementById("A2").value === "D" || document.getElementById("A2").value === "B" || document.getElementById("A2").value === "C" ) {
	wrong++;
}
else {
	unanswered++;
}
}
function Q3check(){//question three check
console.log(document.getElementById("A3").value);
if ( document.getElementById("A3").value === "C"){
	correct++;
}
else if ( document.getElementById("A3").value === "D" || document.getElementById("A3").value === "B" || document.getElementById("A3").value === "A"  ){
	wrong++;
}
else {
	unanswered++;
}
}
function Q4check(){//question four check
console.log(document.getElementById("A4").value);
if ( document.getElementById("A4").value === "B"){
	correct++;
}
else if ( document.getElementById("A4").value === "D" || document.getElementById("A4").value === "A" || document.getElementById("A4").value === "C" ){
	wrong++;
}
else {
	unanswered++;
}
}
function Q5check(){//question five check
console.log(document.getElementById("A5").value);
if ( document.getElementById("A5").value === "C"){
	correct++;
}
else if ( document.getElementById("A5").value === "D" || document.getElementById("A5").value === "B" || document.getElementById("A5").value === "A")  {
	wrong++;
}
else {
	unanswered++;
}
}
function check(){
	console.log(document.getElementById("QQ1").value);
Q1check();
Q2check();
Q3check();
Q4check();
Q5check();
}



$("#start").on("click", function(){
	console.log("CLICK");

	myVar= setInterval(Time, 1000);
	setTimeout(QS,1000);
	setTimeout(answers,1000);
	setTimeout(check,29800);	
	setTimeout(endgame, 30000);

});

