var name = window.prompt("Enter your name: ");
document.cookie = name;

/*function time(){
	setTimeout(english,2000);
}
*/
function english() {
	
	var audio = new Audio("Sound/English.m4a")
	audio.play();
}
function Espanola() {
	var audio = new Audio("Sound/Spanish.m4a")
	audio.play();
}
function Francaise() {
	var audio = new Audio("Sound/French.m4a")
	audio.play();
}
function Italiana() {
	var audio = new Audio("Sound/Italian.m4a")
	audio.play();
}
function Polska() {
	var audio = new Audio("Sound/Polish.m4a")
	audio.play();
}


