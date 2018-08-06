$(function() {
  var $header = $("header").last();
  var $figure1 = $("figure").first();
  var $figure2 = $("figure").last();

  // move header section back to top of body
  $header.prependTo("body");

  // move h1 back to header section
  $("main h1").first().prependTo($header);

  // move figures back into the article section
  $figure1.appendTo("article");
  $figure2.appendTo("article");

  // switch figure images
  $figure2.prepend($figure1.find("img"));
  $figure1.prepend($figure2.find("img").last());
});