PDFObject.embed("myresume.pdf", "#show-resume-here");

$( "#resume-plus" ).click(function() {
  $( "#show-resume-here" ).toggle();

  var text = $(this).text();
  $(this).text(text == "(+)" ? "(-)" : "(+)");
});

$( '#go-gators' ).hover(function() {
	$(' #go-gators-name' ).toggleClass('bold');
	$(' #go' )	     .toggleClass('go-gators-orange');
	$(' #gators' )   .toggleClass('go-gators-blue');
});

$( '#american-express' )    .hover(function() {
	$(' #amex-name' ).toggleClass('bold');
	$(' #american' )	    .toggleClass('amex-blue');
	// The other amex color is white, no reason to modify it
});

$( '#flatiron-health' ).hover(function() {
	$(' #fh-name' ).toggleClass('bold');
	$(' #flatiron' )       .toggleClass('fh-purple');
	$(' #health' )	       .toggleClass('fh-blue');
});