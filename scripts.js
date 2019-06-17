const portfolio = {};


$(".hamburger").on("click", function() {
  console.log("hello");
  $(".navContainer").removeClass("hide");
  $(".hamburger").addClass("hide");
});

$(".close").on("click", function() {
  $(".navContainer").addClass("hide");
  $(".hamburger").removeClass("hide");
});
