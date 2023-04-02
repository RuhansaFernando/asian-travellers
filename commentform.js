var name = document.forms['form']['name'];
var email = document.forms['form']['email'];

var name_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');

name.addEventListener('textInput', name_Verify);
email.addEventListener('textInput', email_Verify);

function validated(){
	if (name.value.length < 15) {
		name.style.border = "1px solid red";
		name_error.style.display = "block";
		name.focus();
		return false;
	}
  if (email.value.length < 9) {
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
		return false;
	}

}
function name_Verify(){
	if (name.value.length >= 20) {
		name.style.border = "1px solid silver";
		name_error.style.display = "none";
		return true;
	}
}
function email_Verify(){
	if (email.value.length >= 20) {
		email.style.border = "1px solid silver";
		email_error.style.display = "none";
		return true;
	}
}
