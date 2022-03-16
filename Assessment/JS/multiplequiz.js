alert("Good luck in the Quiz " + name + "\n\n\n\n<---Just FYI---> \n This page uses cookies");

function check(){ 
	var score=0;
	var audio1 = new Audio("Sound/failed.mp3")
	var q1=document.Quiz.question1.value;
	var q2=document.Quiz.question2.value;
	var q3=document.Quiz.question3.value;
	var q4=document.Quiz.question4.value;
	var q5=document.Quiz.question5.value;
	var q6=document.Quiz.question6.value;
	var q7=document.Quiz.question7.value;
	var q8=document.Quiz.question8.value;
	var q9=document.Quiz.question9.value;
	var q10=document.Quiz.question10.value;
	//Fill in the blank one
	var answer1 = box1.value;
	var answer2 = box2.value;
	var answer3 = box3.value;
	var answer4 = box4.value;
	var answer5 = box5.value;
	var answer6 = box6.value;
	//Fill in the blank two
	var answer7 = box7.value;
	var answer8 = box8.value;
	var answer9 = box9.value;
	var answer10 = box10.value;
	var answer11 = box11.value;
	var answer12 = box12.value;
	var answer13 = box13.value;
	//Fill in the blank three
	var answer14 = box14.value;
	var answer15 = box15.value;
	var answer16 = box16.value;
	var answer17 = box17.value;
	var answer18 = box18.value;
	var answer19 = box19.value;
	//True or False 
	var tf1=document.Quiz.question11.value;
	var tf2=document.Quiz.question12.value;
	var tf3=document.Quiz.question13.value;
	var tf4=document.Quiz.question14.value;
	var tf5=document.Quiz.question15.value;
	var tf6=document.Quiz.question16.value;
	var tf7=document.Quiz.question17.value;
	var tf8=document.Quiz.question18.value;
	var tf9=document.Quiz.question19.value;
	var tf10=document.Quiz.question20.value;
	//Odd one out 
	var answer20 = box25.value;
	var answer21 = box26.value;
	var answer22 = box27.value;
	var answer23 = box28.value;
	//Audio round
	var answer24 = box29.value;
	var answer25 = box30.value;
	var answer26 = box31.value;
	var answer27 = box32.value;
	//var answer28 = box33.value;
	var answer29 = box34.value;
	var answer30 = box35.value;
	var answer31 = box36.value;
	var answer32 = box37.value;
	
	//multiple choice questions
	if (q1=="Dr Jekyll and Mr Hyde and Frankensteins monster") {score++}
	if (q2=="Anakin Skywalker") {score++}
	if (q3=="Playstation 2") {score++}
	if (q4=="Phil Jackson") {score++}
	if (q5=="The Joker") {score++}
	if (q6=="Han Solo") {score++}
	if (q7=="Sonic the Hedgehog") {score++}
	if (q8=="Samuel Eto'o") {score++}
	if (q9=="Kryptonite") {score++}
	if (q10=="Darth Sidious") {score++}
	//Fill in the blank set one
	if (answer1 == "Darth Plagueis" || answer1 == "darth plagueis") {score++}
	if (answer2 == "Jedi" || answer2 =="jedi") {score++}
	if (answer3 == "Dark Lord" || answer3 == "dark lord") {score++}
	if (answer4 == "Sith" || answer4 == "sith") {score++}
	if (answer5 == "Powerful" || answer5 == "powerful") {score++}
	if (answer6 == "Wise" || answer6 =="wise") {score++}
	// Fill in the blank set two
	if (answer7 == "War" || answer7 =="war") {score++}
	if (answer8 == "Kratos" || answer8 == "kratos") {score++}
	if (answer9 == "Ares" || answer9 == "ares") {score++}
	if (answer10 == "War" || answer10 ==" war") {score++}
	if (answer11 == "Zeus" || answer11 == "zeus") {score++}
	if (answer12 == "Underworld" || answer12 =="underworld") {score++}
	if (answer13 == "Sea" || answer13 == "sea") {score++}
	//Fill in the blank set three
	if (answer14 == "Clark Kent" || answer14 =="clark kent") {score++}
	if (answer15 == "Bruce Wayne" || answer15 == "bruce wayne") {score++}
	if (answer16 == "Diana Prince" || answer16 == "diana prince") {score++}
	if (answer17 == "Steve Rodgers" || answer17 == "steve rodgers") {score++}
	if (answer18 == "Peter Parker" || answer18 == "peter parker") {score++}
	if (answer19 == "Natasha Romanoff" || answer19 == "natasha romanoff") {score++}
	//True or false Answers
	if (tf1=="True") {score++}
	if (tf2=="True") {score++}
	if (tf3=="False") {score++}
	if (tf4=="False") {score++}
	if (tf5=="True") {score++}
	if (tf6=="True") {score++}
	if (tf7=="False") {score++}
	if (tf8=="True") {score++}
	if (tf9=="True") {score++}
	if (tf10=="True") {score++}
	//Odd one out
	if (answer20=="Metapod") {score++}
	if (answer21=="Vancouver Canucks") {score++}
	if (answer22== "USS Enterprise") {score++}
	if (answer23== "Batman") {score++}
	//Audio Round 
	if (answer24=="Crash Bandicoot: Warped") {score++}
	if (answer25=="Sonic the Hedgehog") {score++}
	if (answer26=="John Williams") {score++}
	if (answer27=="Ace Ventura: When Nature Calls") {score++}
	if (answer29=="Jurassic Park") {score++}
	if (answer30=="Match of the day") {score++}
	if (answer31=="Nemesis") {score++}
	if (answer32=="Stanley Ipkiss") {score++}

	
	alert(name + " score was " + score +"/51");
	
	if (score>=45) {score="Welldone, however you may want to go outside more often"}
	if (score >= 11 && score <=44) {score="Perfectly balanced.. as all things should be"}
	if (score<=10) {score="You clearly have a life, so I guess congrats?"}
			audio1.play();
	alert(score + "\n\nA dynamic leaderboard could not be implemented : \nEmail 40530314@live.napier.ac.uk and they will add your score to their local leaderboard");
	alert("A dynamic leaderboard could not be implemented : \nEmail 40530314@live.napier.ac.uk and they will add your score to their local leaderboard")
    
	}

	function back(){
		window.location.href ="https://40530314.github.io/Web-Technologies/Assessment/index.html"
	}

