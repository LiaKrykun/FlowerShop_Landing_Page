// sticky-nav   //

var waypoint = new Waypoint({
    element: document.getElementById('description'),
    handler: function(direction) {
      $(".anim1").addClass("animate__animated animate__fadeIn");
    },
    offset: '50%'
  });

  var waypoint = new Waypoint({
    element: document.getElementById('adress'),
    handler: function(direction) {
      $(".anim2").addClass("animate__animated animate__fadeInRight");
    },
    offset: '50%'
  });

  var waypoint = new Waypoint({
    element: document.getElementById('howorder'),
    handler: function(direction) {
      $(".anim3").addClass("animate__animated animate__fadeInUp");
    },
    offset: '50%'
  });  

  var waypoint = new Waypoint({
    element: document.getElementById('header-button'),
    handler: function(direction) {
      if(direction == "up"){
      $(".anim4").addClass("animate__animated animate__heartBeat");
    } else {
      $(".anim4").removeClass("animate__animated animate__heartBeat")
    }
    },
    offset: '50%'
  });  

  // button click

  $(".button-order").click(function() {
    $("html, body").animate({scrollTop: $("#howorder").offset().top}, 1000);
  });

  $(".button-more").click(function() {
    $("html, body").animate({scrollTop: $("#adress").offset().top}, 1000);
  });

  
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
