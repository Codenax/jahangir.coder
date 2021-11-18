



//<!--modal copen close -->

$('.popup').click(function () {
  var src = $('.popup_img').attr('src');
  $('.modalImg').modal('show');
  $('#popup-img').attr('src', src);
}),
$('.dismiss').click(function(){
  $('.modalImg').modal('hide');
});

//<!--modal copen close end -->
//stiky menu start--//
var fixed_top = $(".primary-menu");

$(window).on('scroll', function(){
  
  if( $(this).scrollTop() > 100 ){  
    fixed_top.addClass("fixed-menu animated fadeInDown");
  }
  else{
    fixed_top.removeClass("fixed-menu animated fadeInDown");
  }
}); 
//stiky menu end--//
// init Isotope
jQuery(window).on('load',function() {
  var $grid = $('.portfolio-container').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      },
    }
  });

  $('.portfolio-container').isotope({
    itemSelector: '.element-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.portfolio-container-sizer'
    }
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };

  // bind filter button click
  $('#filters').on( 'click', 'li', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });


  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'li', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

});

//mobile menu start//
function openNav(){
    document.getElementById("myNav").style.width="100%";
  
  }
  
  function closeNav(){
    document.getElementById("myNav").style.width="0%";
    
  }
  //mobile menu end//

   //<!--date-time in modal -->

   $(function () {
    $('#usr1').datepicker({
      'format': 'yyyy-mm-dd',
      'autoclose': true
    });
    $('#usr2').datepicker({
      'format': 'yyyy-mm-dd',
      'autoclose': true
    });
  });

// <!--date-time in modal end -->
$(".custom-file-input").on("change", function () {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});


$('.next-button').click(function(){
    $('.nav > .active').next('a').trigger('click');
    //trigger the click on the tab same like we click on the tab
});

$('.previous-button').click(function(){
    $('.nav > .active').prev('a').trigger('click');
    //trigger the click on the tab same like we click on the tab
})
new WOW().init();