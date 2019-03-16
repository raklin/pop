function initMap() {
	
	var covo = {
		info: '<strong>Anova Hacks</strong><br>\ Come and participate in a fun hackathon where you can meet tons of people.  <br>\
					<a href="https://goo.gl/maps/jKNEDz4SyyH2"></a>',
		lat: 37.788350,
		long: -122.399370
	};

	var baseball = {
		info: '<strong>Giant\'s Game</strong><br>\ Catch an entertaining baseball game where you can root with others for your favorite team, the San Francisco Giants. <br>\
					<a href="https://goo.gl/maps/PHfsWTvgKa92"> </a>',
		lat: 37.778419,
		long: -122.390617
	};

  var dodgeball = {
		info: '<strong>House of Air</strong><br>\r\ Play  dodgeball games against strangers while bouncing up and down in the air. <br>\
					<a href="https://goo.gl/maps/QGUrqZPsYp92"></a>',
		lat: 37.804860,
		long: -122.468820
	};

  var spin = {
		info: '<strong>SPiN San Francisco</strong><br>\ Bar where you can play cool games, drink, and meet new people. Go to a fun bar <br>\
					<a href="https://goo.gl/maps/jKNEDz4SyyH2"></a>',
		lat: 37.784200,
		long: -122.398960
	};

	var comedyClub = {
		info: '<strong>The Setup</strong><br>\r\
				The Setup Up</strong> Go to a comedy club to hear hilaroious comedians, and laugh amongst others.<br>\
					<a href="https://goo.gl/maps/QGUrqZPsYp92"></a>',
		lat: 37.782990,
		long: -122.415490
	};

  	var parade = {
		info: '<strong>San Francisco Patrick\'s Day </strong><br>\
				Meet new people while celebrating Irish culture.<br>\
					<a href="https://goo.gl/maps/jKNEDz4SyyH2"></a>',
		lat: 37.77083025,
		long: -122.4194983220
	};

  var mirror = {
		info: '<strong>Magowon\'s Mirror Maze </strong><br>\
				Run around a maze trying not to run into other people and your reflection.<br>\
					<a href="https://goo.gl/maps/jKNEDz4SyyH2"></a>',
		lat: 24.713552,
		long: 46.675297
	};
	var locations = [
      [covo.info, covo.lat, covo.long, 0],
      [baseball.info, baseball.lat, baseball.long, 1],
      [dodgeball.info, dodgeball.lat, dodgeball.long, 2],
      [spin.info, spin.lat, spin.long, 3],
      [comedyClub.info, comedyClub.lat, comedyClub.long, 4],
      [parade.info, parade.lat, parade.long, 5],
    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: new google.maps.LatLng(37.778240, -122.415370),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}