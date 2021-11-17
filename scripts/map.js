
    const mapStyle = [{
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#d6e2e6"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#cfd4d5"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7492a8"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "lightness": 25
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#dde2e3"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#cfd4d5"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#dde2e3"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7492a8"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#dde2e3"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#588ca4"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a9de83"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#bae6a1"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c6e8b3"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#bae6a1"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "saturation": -45
            },
            {
                "lightness": 10
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#41626b"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c1d1d6"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#a6b5bb"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#9fb6bd"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.icon",
        "stylers": [
            {
                "saturation": -70
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#b4cbd4"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#588ca4"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#008cb5"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": -5
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a6cbe3"
            }
        ]
    }
    ]

    let map;
    const markers = [];
    
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
    
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
    
            if (sParameterName[0] === sParam) {
                return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
        return false;
    };

    const stateParam = getUrlParameter('state');

    function showStateResultCounter(states, stateText){
        const arrayL = states.length
        if (arrayL <= 1) {
            $("#storesCount").html(`<b>${arrayL} resultado</b> em ${stateText}`)
        } else {
            $("#storesCount").html(`<b>${arrayL} resultados</b> em ${stateText}`)
        }
    }

    function brasilResults(locations){
        const arrayL = locations.length
        
        if (arrayL <= 1) {
            $("#storesCount").html(`<b>${arrayL} resultado</b> em Brasil`)
        } else {
            $("#storesCount").html(`<b>${arrayL} resultados</b> em Brasil`)
        }
    }

    function mapStates(states){
        states.map(e => {
            $("#storesList").append(`<div class="item" id="${e.id}">
                    <div class="store-icon">
                        <i class="fas fa-gas-pump"></i>
                    </div>
                    <div class="store-info">
                        <h4>${e.title}</h4>
                        <span>${e.address}</span>
                        <p><i class="fas fa-map-marker-alt"></i><b>${e.city}, ${e.state} - ${e.cep}</b></p>
                    </div>
                </div>`)
        })
    }

    function mapAllStates(locations){
        locations.map(e => {
            $("#storesList").append(`<div class="item" id="${e.id}">
                            <div class="store-icon">
                                <i class="fas fa-gas-pump"></i>
                            </div>
                            <div class="store-info">
                                <h4>${e.title}</h4>
                                <span>${e.address}</span>
                                <p><i class="fas fa-map-marker-alt"></i><b>${e.city}, ${e.state} - ${e.cep}</b></p>
                            </div>
                        </div>`)
        })
    }

    if(stateParam){

            if(stateParam == "BR"){

                mapAllStates(locations)
                brasilResults(locations);
               
            }else{
                const states = locations.filter(e => e.state === stateParam)
                const stateText = $("#region").find(`option[value=${stateParam}`).text();
    
                $("#region").find("option:selected").removeAttr("selected")
                $("#region").find(`option[value=${stateParam}`).attr("selected", "selected")
                $("#storesList").find(".item").remove()
    
                mapStates(states)
    
                showStateResultCounter(states, stateText)
            }

     
    }else{

        mapAllStates(locations)
        brasilResults(locations);
    
    }


    function initMap() {
        // The location of Uluru
        const df = {
            lat: -15.8195427,
            lng: -47.907733
        };
        // The map, centred at Ulurue
        const map = new google.maps.Map(
            document.getElementById("map"), {
            zoom: 14,
            center: df,
            gestureHandling: "greedy",
            styles: mapStyle
        }
        );

        markerShow = locations.map(e => {
            const contentString = `
                <div id="content">
                <div id="siteNotice"></div>
                <h2 id="firstHeading" class="firstHeading">${e.title}</h2>
                <div id="bodyContent">
                <span>${e.address}</span>
                <p>${e.city}, ${e.state} - ${e.cep}</p>
                <a href="#">Traçar rota</a>
                </div>
                </div>`

            const infowindow = new google.maps.InfoWindow({
                content: contentString,
                maxWidth: 250,
            });
            const marker = new google.maps.Marker({
                title: e.title,
                position: {
                    lat: e.lat,
                    lng: e.lng
                },
                type: "info",
                map: map,
            });

            markers.push(marker);

            marker.addListener("click", () => {
                infowindow.open({
                    anchor: marker,
                    map,
                    shouldFocus: false,
                });

            });

        })

        function goToMarker() {
            $("#storesList").find(".item").click(function () {
                $("#storesList").find(".item").removeClass("active")
                $(this).addClass("active")
                const itemId = $(this).attr("id")

                const markerIndex = locations.findIndex(e => e.id === parseFloat(itemId))
                map.setZoom(16);
                map.panTo(markers[markerIndex].getPosition()); // Pan map to that position

                google.maps.event.trigger(markers[markerIndex], 'click');
            })
        }

        $("#region").on("change", function () {
            const state = $(this).find("option:selected").val();
            const stateText = $(this).find("option:selected").text();
            const states = locations.filter(e => e.state === state)
            $("#storesList").find(".item").remove()
            
            mapStates(states)

            if (state == "BR") {
                mapAllStates(locations)
                brasilResults(locations);
            } else {
                showStateResultCounter(states, stateText)
            }

            goToMarker()
        })

        goToMarker()
    }

