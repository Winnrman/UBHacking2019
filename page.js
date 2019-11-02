function verticalCenter(){
var body = document.body, html = document.documentElement;

var bodyHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

var containerHeight = document.getElementById('container').clientHeight;
document.getElementById('container').style.marginTop = (bodyHeight - containerHeight) / 2+'px';
}
function check(){
	var username = document.getElementById('username_input').value;
	var password = document.getElementById('password_input').value;
	document.getElementById('username_input').value = "";
	document.getElementById('password_input').value = "";
	console.log('Username: '+username, '\nPassword: '+password);

}
