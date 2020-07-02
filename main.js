// cliccando sull'icona hamburger deve apparire il menù
// quindi il menù right deve andare in display block

// $("hamburger-menu").click( function(){
//   $(".header-right ul").show();
// })


$(".header-right > a ").click( function(){
  console.log("ci sono" );
  $(".hamburger-menu ul").addClass("hamburger-menu.active");
  $(".hamburger-menu").show();


});


$(".close ").click( function(){
  console.log("ci sono" );
  $(".hamburger-menu ul").removeClass("hamburger-menu.active");
  $(".hamburger-menu").hide();


});
