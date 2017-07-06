var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: 8.911255, lng: 76.6634699},
	  zoom: 14
	});
}



$(document).on('ready', function() {
  $(".slider-top").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $(".slider-info").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});