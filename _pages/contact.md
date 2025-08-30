---
layout: page
permalink: /contact/
title: Contact
nav: true
nav_order: 6
---

<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        <p><b>Dr. Can T. Nguyen</b> <br>
        Environment Centre, Charles University <br>
        José Martího 407/2 <br>
        16200 Praha 6-Veleslavín <br>
        Czech Republic </p>
        <span class="fa-solid fa-square-phone"></span> (420) 773 705 812 <br>
        <i class="fa-solid fa-envelope"></i> trongcan.ng@gmail.com
    </div>
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/CZP_CUNI.jpg" title="czp" class="img-fluid rounded z-depth-1" zoomable=true width="80%" %}
        Krystal campus, <span class="copyright">&copy;</span> CZP, CUNI <br>
    </div>
</div>


<br>
<br>

#### Directions to the Environment Centre

<div id="map" style="width:90%;height:500px"></div>

<script>
function myMap() {
  var myCenter = new google.maps.LatLng( 50.094025,14.341628);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 15};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);

  var infowindow = new google.maps.InfoWindow({
  content: "Krystal, José Martího 407/2, 16200 Praha 6-Veleslavín"
});

infowindow.open(map,marker);
}
</script>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA7i6vSafRzNMdIaq-SslU9oycP9HMR9TM&callback=myMap">
</script>

<br>