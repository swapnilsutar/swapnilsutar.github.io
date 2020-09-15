     var preloader = document.getElementById('loader');
         var open_nav_bar = document.getElementById('nav_id');
         var open_tog = document.getElementById("open_tog");
         var close_tog = document.getElementById("close_tog");


        function load(){
          close_tog.style.display="none";

          preloader.style.display='none';
        
          $(document).ready(function () {
            // Handler for .ready() called.
              $('html, body').animate({
                scrollTop: $('#About').offset().top
              }, 1500);
            });        
        }

    function open_nav(){
            open_nav_bar.style.display="block";
            open_tog.style.display="none";
            close_tog.style.display="block";
    }
  
     function close_nav(){
            open_nav_bar.style.display="none";
            open_tog.style.display="block";
            close_tog.style.display="none";
    }