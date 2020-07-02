// cliccando sull'icona hamburger deve apparire il menù
// quindi il menù right deve andare in display block

// $("hamburger-menu").click( function(){
//   $(".header-right ul").show();
// })


$(".hamburger-menu ul").click( function(){
  $(".hamburger-menu ul").addClass(".hamburger-menu.active");
}
