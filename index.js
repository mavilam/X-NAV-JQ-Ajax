$(document).ready(function() {
	var second = 0;
	$.ajax({
		url: "http://localhost:8000/text1.txt",
		cache: false
		})
	.done(function( html ) {
		$( "#text" ).append( html );
	});
	$("#newText").click(function(){
		
		$.ajax({
			url: "http://localhost:8000/text2.txt",
			cache: false
			})
		.done(function( html ) {
			$( "#text2" ).append("<ul>" + " " + second + " " + html +  "</ul>");
			second ++;
		});
	});
});
