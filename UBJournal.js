function verticalCenter(){
var body = document.body, html = document.documentElement;
var bodyHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
var containerHeight = document.getElementById('container').clientHeight;
document.getElementById('container').style.marginTop = ((bodyHeight - containerHeight) / 2)- 0 +'px';
}

function check(){
  if (typeof(Storage) !== "undefined"){
    var storedUser = localStorage.getItem("username");
    var storedPass = localStorage.getItem("password");
	//console.log('Username: '+username, '\nPassword: '+password);
  if(document.getElementById('username_input').value == localStorage.getItem("username") && ( document.getElementById('password_input').value == localStorage.getItem("password"))){
    window.open("file:///Users/andre/Documents/Code/New%20Projects/LoginPage/PostPage.html","_self");
  }
}
}

function createUser(){
  if (typeof(Storage) !== "undefined"){
    localStorage.setItem("username",  document.getElementById('username_input').value);
    localStorage.setItem("password",  document.getElementById('password_input').value);
  }
  else{
    console.log("Browser does not support Local Web Storage");
  }
}

