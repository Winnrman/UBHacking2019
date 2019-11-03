function verticalCenter(){
var body = document.body, html = document.documentElement;

var bodyHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

var containerHeight = document.getElementById('newPostButton').clientHeight;
document.getElementById('newPostButton').style.marginTop = ((bodyHeight - containerHeight) / 2) -35 +'px';
document.getElementById('postWindow').style.marginTop = ((bodyHeight - containerHeight) / 3) -35 +'px';

}
// function createPostWindow(){
// 	document.getElementById('newPostButton').style.visibility = "hidden";
// 	var post = document.createElement("textarea");
// 	post.setAttribute("id", "postWindow");
// 	$(document).ready(function(){
// 		$("postWindow").fadeIn(2000);
// }


$(document).ready(function(){
	  $("#newPostButton").click(function(){
	  	$("#newPostButton").css("visibility", "hidden");
	  	$("#postContainer").fadeToggle();
	  	//console.log("Done");
	  });

	  $("#submitButton").click(function(){
	  	localStorage.setItem(localStorage.getItem("username")+"_data", document.getElementById("post").value);
	  	window.open("Posts.html");
	  	$("#postContainer").fadeOut();

});

});

function createPostIcon(){
  var post = document.createElement("div");
  post.setAttribute("id", "postIcon");
  document.getElementById("mainContainer").appendChild(post);
  console.log("bop");
}
