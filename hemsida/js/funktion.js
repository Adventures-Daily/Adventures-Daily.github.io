var score = 0;
$(document).ready(function(){

	$("#cookie").click(function() {
		score = score + 1;
		$("#score").text("Score: " + score);
	

	if (score > 150){ 

    alert ("You´re still here? Get a life dude, fine, just watch this https://youtu.be/dQw4w9WgXcQ");
	}
});
});

