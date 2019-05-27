function CheckPassword () {

}

function KeyReader (e) {
	if (e.keyCode == 13) {
		CheckPassword();
	}
}

var mistakes_number = 0;
var BTN = document.getElementById('BTN_check_pass');

window.addEventListener("keydown", KeyReader);
BTN.addEventListener("click", CheckPassword);

// <div id = "hint_1">Попробуй написать на русском, с маленькой буквы и без пробелов =)</div>
// <div id = "hint_2">Так, ладно. Это два слова, но запиши как одно. Больше не подскажу, пить меньше надо</div>