/* This script loads the MEI file via HTTP request */
///////////////////////////
/* Some global variables */
///////////////////////////
var vrvToolkit = new verovio.toolkit();
var zoom = 5;
var pageHeight = 5;
var pageWidth = 5;
var content = document.getElementById('content')
var contentHeight = 10
if (content) {
  contentHeight = content.offsetHeight
}
var defaultHeight = document.documentElement.clientHeight - contentHeight
var defaultWidth = document.documentElement.clientWidth - 50

///////////////////////////////////////////////////
/* A function for setting options to the toolkit */
///////////////////////////////////////////////////
function setOptions() {
    //////////////////////////////////////////////////////////////
    /* Adjust the height and width according to the window size */
    //////////////////////////////////////////////////////////////
    pageHeight = $(document).height() * 5 / zoom ;
    pageWidth = $(window).width() * 5 / zoom ;
    options = {
                scale: zoom,
                adjustPageHeight: true,
            };
    vrvToolkit.setOptions(options);
}

/* Show the score */
showScore('score', 'data/the_unforgiven.mei') // <-- CHANGE THIS TO YOUR FILE