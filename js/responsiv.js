$(function (){
   isNavBarHidden = true;
   $('#menu_icon img').click(function (){
       if(isNavBarHidden){
            $('body > header .nav_two nav').show();
            isNavBarHidden = false;
       }
       else{
            $('body > header .nav_two nav').hide();
            isNavBarHidden = true;
       }
   });
});