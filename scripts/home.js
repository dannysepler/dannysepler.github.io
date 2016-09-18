PDFObject.embed("myresume.pdf", "#show-resume-here");

$( "#resume-plus" ).click(function() {
  $( "#show-resume-here" ).toggle();

  var text = $(this).text();
  $(this).text(text == "(+)" ? "(-)" : "(+)");
});

$( '#go-gators' ).hover(function() {
	$(' #go' )	  .toggleClass('go-gators-orange');
	$(' #gators' ).toggleClass('go-gators-blue');
});