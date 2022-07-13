$(function(){//おまじない

  $("#menu_btn").on("click",function(){
    $("body").toggleClass('open_menu');
  })


  $("p.item").on("click",()=>{
    alert('test');
  })

});//おまじない