function verticalCenter(){
var body = document.body, html = document.documentElement;

var bodyHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

var containerHeight = document.getElementById('newPostButton').clientHeight;
document.getElementById('newPostButton').style.marginTop = ((bodyHeight - containerHeight) / 2) -35 +'px';
document.getElementById('postWindow').style.marginTop = ((bodyHeight - containerHeight) / 3) -35 +'px';

}

$(document).ready(function(){
	  $("#newPostButton").click(function(){
	  	$("#newPostButton").css("visibility", "hidden");
	  	$("#postContainer").fadeToggle();
	  	//console.log("Done");
	  });

	  $("#submitButton").click(function(){
	  	var i = localStorage.getItem("i");
	  	//localStorage.setItem(localStorage.getItem("username")+"_data", document.getElementById("post").value);
	  	localStorage.setItem("post"+i, document.getElementById("post").value);
	  	//window.open("Posts.html");
	  	$("#postContainer").fadeOut();
	  	localStorage.setItem("i", parseInt(localStorage.getItem("i")) + parseInt(1));

});

});

function createPostIcon(){
  var post = document.createElement("div");
  post.setAttribute("id", "postIcon");
  var blogText = document.createTextNode(document.getElementById("post").value);
  post.appendChild(blogText);
  document.getElementById("mainContainer").appendChild(post);
  console.log("bop");
}


function loadOldPosts(){
	for(var i = 0; i < localStorage.length; i++){
		var posts = localStorage.getItem("post"[i]);
		var post = document.createElement("div");
		post.setAttribute("id", "postIcon");
		var blogText = posts;
		post.appendChild(blogText);
		document.getElementById("mainContainer").appendChild(post);
	}
}

function twoInOne(){
	verticalCenter();
	loadOldPosts();
}

function gotoNewPost(){
	window.open("file:///Users/andre/Documents/Code/New%20Projects/LoginPage/PostPage.html","_self");
}
function gotoNewPost(){
	window.open("file:///Users/andre/Documents/Code/New%20Projects/LoginPage/PostPage.html","_self");
}

