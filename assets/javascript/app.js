
var correct = 0;
var wrong = 0;
var unanswered= 0; 
var time = 30;
var myVar; //timer
var questions = { 
	first:{
		Q: " What team does Caboose belong too? ", //place holder
		A:[
			{answer: "Green Team "}, //placeholder answer
			{answer: "Red Team"}, //placeholder answer
			{answer: "Blue team "}, //placeholder answer correct one
			{answer: "The Freelancers"}, //placeholder answer
		]
	},
	second:{
		Q: "Who is the leader of Red team", //place holder
		A:[
			{answer: "Sarge"}, //placeholder answer correct one
			{answer: "Grif"}, //placeholder answer
			{answer: "Simmons"}, //placeholder answer
			{answer: "Church"}, //placeholder answer
		]
	},
	third:{
		Q: "What is Andy?", //place holder
		A:[
			{answer: "Leader of the Blue team"}, //placeholder answer
			{answer: "Leader of the Red team "}, //placeholder answer
			{answer: "A bomb "}, //placeholder answer correct one
			{answer: "Member of the Blue team"}, //placeholder answer
		]
	},
	fourth:{
		Q: 'Who says "FEAR MY LASER FACE!" ? ', //place holder
		A:[
			{answer: "Caboose"}, //placeholder answer
			{answer: "Church"}, //placeholder answer correct one
			{answer: "Sarge"}, //placeholder answer
			{answer: "Tex"}, //placeholder answer
		]
	},
	fifth:{
		Q: "Who has a deep hatred for Grif?", //place holder
		A:[
			{answer: "Tucker"}, //placeholder answer
			{answer: "Biff"}, //placeholder answer
			{answer: "Tex "}, //placeholder answer correct one
			{answer:"Sister"} //placeholder answer
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

