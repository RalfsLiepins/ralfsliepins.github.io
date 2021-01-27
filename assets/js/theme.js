var iconBase = '/assets/img/';

var gmarkers1 = [];
var markers1 = [];


// My markers
markers1 = [
    ['0', 'Kurts coffe', 56.95122, 24.12075, ['riga','edinasana']],
    ['1', 'Purch', 56.95798, 24.19103, ['riga','edinasana']],
    ['2', 'AUCH', 56.96519, 24.14053, ['riga','skaistumkopsana']],
];

/**
 * Function to init map
 */

function initMap() {
    const Riga = new google.maps.LatLng(56.9496, 24.1052);
    var mapOptions = {
        zoom: 13,
        center: Riga,
        disableDefaultUI: true,
        mapId: '888bb5dcaf85064d'
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    for (i = 0; i < markers1.length; i++) {
        addMarker(markers1[i]);
    }

    // Create the DIV to hold the control and call the ZoomControl() constructor
    // passing in this DIV.
    var zoomControlDiv = document.createElement('div');
    var zoomControl = new ZoomControl(zoomControlDiv, map);

    // Map controls position
    zoomControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(zoomControlDiv);
}

/**
 * Function to add marker to map
 */

function addMarker(marker) {
    var category = marker[4];
    var title = marker[1];
    var pos = new google.maps.LatLng(marker[2], marker[3]);
    var content = marker[1];

    marker1 = new google.maps.Marker({
        title: title,
        position: pos,
        category: category,
        map: map,
        icon: iconBase + 'marker-yellow.svg'
    });

    gmarkers1.push(marker1);

    // Marker click listener
    google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
        return function () {
            console.log('Gmarker 1 gets pushed');
            infowindow.setContent(content);
            infowindow.open(map, marker1);
            map.panTo(this.getPosition());
            map.setZoom(15);
        }
    })(marker1, content));

    
}

/**
 * Function to filter markers by category
 */

filterMarkers = function (category) {
    for (i = 0; i < gmarkers1.length; i++) {
        marker = gmarkers1[i];
        // If is same category or category not picked
        if((typeof marker.category == 'object' && marker.category.indexOf(category) >= 0) || category.length == 0){
            marker.setVisible(true);
        }
        // Categories don't match 
        else {
            marker.setVisible(false);
        }
    }
}
  
  

//ZoomControl adds +/- button for the map
function ZoomControl(controlDiv, map) {

    // Creating divs & styles for custom zoom control
    controlDiv.style.padding = '67.2px';

    // Set CSS for the control wrapper
    var controlWrapper = document.createElement('div');
    controlDiv.appendChild(controlWrapper);

    // Set CSS for the zoomIn
    var zoomInButton = document.createElement('div');
    zoomInButton.style.width = '56.78px'; 
    zoomInButton.style.height = '57.14px';
    zoomInButton.style.marginBottom = '21.86px';
    zoomInButton.style.backgroundImage = 'url("/assets/img/+.png")';
    controlWrapper.appendChild(zoomInButton);

    // Set CSS for the zoomOut
    var zoomOutButton = document.createElement('div');
    zoomOutButton.style.width = '56.78px'; 
    zoomOutButton.style.height = '57.14px';
    zoomOutButton.style.backgroundImage = 'url("/assets/img/-.png")';
    controlWrapper.appendChild(zoomOutButton);

    // Setup the click event listener - zoomIn
    google.maps.event.addDomListener(zoomInButton, 'click', function() {
        map.setZoom(map.getZoom() + 1);
    });

    // Setup the click event listener - zoomOut
    google.maps.event.addDomListener(zoomOutButton, 'click', function() {
        map.setZoom(map.getZoom() - 1);
    });  

}


//=Website functions=
//===================

//Script for displaying more content when screen size is under 1043px
$( document ).ready(function () {
    $(".moreBox").slice(0, 0).show();
    if ($(".blogBox:hidden").length != 0) {
        $("#loadMore").show();
    }		
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".moreBox:hidden").slice(0, 4).slideDown();
        if ($(".moreBox:hidden").length == 0) {
            $("#loadMore").fadeOut('fast');
        }
    });
});

//Script for navbar smaller than 1200px
$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $(".navbar-expand-xl").toggleClass("highlight");
        $("body").toggleClass("body-fixed");
    });
});

//Script to laod in video into a modal
$("d").on('click', function(event) {
    event.preventDefault();
    var src = $(this).attr("data-video");

    $("iframe").attr('src', src);
})

$('#my-modal').on('hidden.bs.modal', function () {
    $('#my-modal iframe').removeAttr('src');
})

//Form submition
var form = document.querySelector('.needs-validation');

form.addEventListener('submit', function(event) {
    
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        
    }
    else if (form.checkValidity() == true) {
        event.preventDefault();
        document.getElementById('messages').style.display = "block";
        document.getElementById('required-div').style.display = "none";
        document.getElementById('form-check-div').style.display = "none";
        document.getElementById('poga-sūtīt-div').style.display = "none";
    }
    form.classList.add('was-validated');
})
   





 
