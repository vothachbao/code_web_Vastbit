function myMap()
{
  myCenter=new google.maps.LatLng(10.7990563,106.6787713);
  var mapOptions= {
    center:myCenter,
    zoom:14, scrollwheel:true, draggable: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("map"),mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);


}