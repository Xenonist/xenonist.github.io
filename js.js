function CheckPassword () {
	switch (pass_in) {
		case "семясени":
		case "СемяСени":
		case "СЕМЯСЕНИ":
		case "семя сени":
		case "семя Сени":
		case "Семя сени":
		case "Семя Сени":
			window.location.replace("http:yashanig.ga/anime.html");
			break;
		default:
			alert("Мммм, не, думай ещё");
			if (tryes == 3) {
				alert("Возможно, это два слова)))");
			}
			if (tryes == 6) {
				alert("Так, тугодум. Попробуй написать эти два слова в одно, с маленькой буквы и без пробелов. (хотя я все варики учёл (наверное))");
			}
			tryes++;
	}
}

function KeyReader (e) {
	if (e.keyCode == 13) {
		CheckPassword();
	}
}

var pass_in = getElementById('input_pass').value;
var tryes = 0;
var mistakes_number = 0;
var BTN = document.getElementById('BTN_check_pass');

window.addEventListener("keydown", KeyReader);
BTN.addEventListener("click", CheckPassword);

// <div id = "hint_1">Попробуй написать на русском, с маленькой буквы и без пробелов =)</div>
// <div id = "hint_2">Так, ладно. Это два слова, но запиши как одно. Больше не подскажу, пить меньше надо</div>