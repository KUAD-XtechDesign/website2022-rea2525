$(function(){//おまじない

  $("#menu_btn").on("click",function(){
    $("body").toggleClass('open_menu');
  })


  $("p.item").on("click",function(){
    let txt = $(this).data('txt');
    $(".item_txt").text(txt)
  })

});//おまじない