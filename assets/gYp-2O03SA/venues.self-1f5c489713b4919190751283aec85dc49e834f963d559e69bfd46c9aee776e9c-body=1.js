var venueItems = $('.venueItem')
var venuesArray = []

if (venueItems.length){
  var mapoOfVenues = L.map("venueMap").setView($('#editionTitle').data('latlng'),16)
  L.tileLayer("http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png", {}).addTo(mapoOfVenues)

  $.each(venueItems, function(i,o){
    var _this = $(o)
    var popUp = L.popup().setContent(_this.data('title'))
    var latlng = [_this.data('lat'), _this.data('lng')]
    var marker = L.marker(latlng);
    venuesArray.push(latlng)
    marker.addTo(mapoOfVenues).bindPopup(popUp);
    _this.click(function(e){
      marker.openPopup()
      mapoOfVenues.panTo(latlng)
    })
  })
  mapoOfVenues.fitBounds(venuesArray)
  mapoOfVenues.setZoom(15)
}

var lat, lng, map, markr, name;

if ($("#map").length) {
  lat = $("#map").attr("data-latitude");
  lng = $("#map").attr("data-longitude");
  name = $("#map").attr("name");
  map = new L.map("map", {
    center: new L.LatLng(lat, lng),
    zoom: 16
  });
  L.tileLayer("http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png", {
    attribution: "Map tiles by <a href='http://stamen.com'>Stamen Design</a> &copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors"
  }).addTo(map);
  markr = L.marker([lat, lng]).addTo(map).bindPopup(name).openPopup();
}
