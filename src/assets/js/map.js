import $ from "jquery";
import marker from "vue2-google-maps/dist/components/marker";

let search_options = { property_status: "Sale" };
search_options["check"] = {};
search_options["type"] = "residentialproperty";
search_options["page"] = 1;
const find_url = "https://test.crimsonrose.a2hosted.com/api";
const main_url = "/";
const img_url = "https://totira2.crimsonrose.a2hosted.com/images/";
let currnt_page = 0;
let currnt_list = [{ ml_num: "XXXXXXXX" }];

function initMap() {
    const map = new google.maps.Map(
        document.getElementById("map_right_listing"), {
            zoom: 3,
            gestureHandling: "greedy",
            center: { lat: 43.653226, lng: -79.3831843 },
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            },
            styles: [
                { elementType: "labels", stylers: [{ visibility: "off" }] },
                {
                    featureType: "administrative",
                    elementType: "labels",
                    stylers: [{ visibility: "on" }],
                },
                {
                    featureType: "road",
                    elementType: "labels",
                    stylers: [{ visibility: "on" }],
                },
            ],
        }
    );
    let page_markers_data = [];
    let markers = [];
    const styles = {
        default: [],
        hide: [{
                featureType: "poi.business",
                stylers: [{ visibility: "off" }],
            },
            {
                featureType: "transit",
                elementType: "labels.icon",
                stylers: [{ visibility: "off" }],
            },
        ],
    };
    const markerClusterer = new MarkerClusterer(map, markers, {
        imagePath: main_url + "images/map/m",
    });
    google.maps.event.addListener(
        markerClusterer,
        "clusterclick",
        function(cluster) {
            if ($(window).width() < 1200) {
                window.scrollTo({
                    top: $(".map-sidebar-content").offset().top,
                    behavior: "smooth",
                });
            }
        }
    );
    let search_location = null;
    $(document).ready(function() {
        /*         $('#property_status').val(residentialproperty);
                    if ($('#search_options').length) {
                        search_options = JSON.parse($('#search_options').val());
                        $.each(search_options, (index, value) => {
                            $('#property_status').val(value);
                            if (index == 'text') $('#search-text').val(value);
                            if (index == 'Area') {
                                $('#area').val(value);
                                $('#area').selectpicker('refresh');
                            }
                            if (index == 'type') {
                                console.log(value);
                                $('#type').val(value);
                                $('#property_status').val(value);
                                $('#type').selectpicker('refresh');
                                if (value == 'commercialproperty') {
                                    $('.res-view').addClass('search-none');
                                    $('.com-view').removeClass('search-none');
                                } else {
                                    $('.res-view').removeClass('search-none');
                                    $('.com-view').addClass('search-none');
                                }
                            }
                            if (index == 'min-price') {
                                $("#amount_two").val(value + " - " + search_options['max-price'] + " $");
                                $("#slider-range_two").slider("values", 0, value);
                                $("#slider-range_two").slider("values", 1, search_options['max-price']);
                            }
                            if (index == 'bld-size') {
                                let build_size = value.split('-');
                                $("#amount_three").val(build_size[0] + " - " + build_size[1] + " sqft");
                                $("#slider-range_three").slider("values", 0, build_size[0]);
                                $("#slider-range_three").slider("values", 1, build_size[1]);
                            }
                            if (index == 'lnd-size') {
                                let land_size = value.split('-');
                                $("#amount_one").val(land_size[0] + "+ acres");
                                $("#slider-range_one").slider("values", 0, land_size[0]);
                            }
                            if (index == 'bathrooms' || index == 'bedrooms' || index == 'bld_type') {
                                $(`#${index}`).val(value);
                                $(`#${index}`).selectpicker('refresh');
                            }

                            if (index == 'location') {
                                search_location = value;
                            }
                            if (index == 'property_status') {
                                $('#property-status').val(value);
                                $('#property-status').selectpicker('refresh');
                                if (search_options['type'] == 'commercialproperty' && value == 'Lease') {
                                    $("#slider-range_two").slider('disable');
                                    delete search_options['min-price'];
                                    delete search_options['max-price'];
                                    reset_price_slider();
                                } else {
                                    $("#slider-range_two").slider('enable');
                                }
                            }
                        });
                        $.each(search_options['check'], (index) => {
                            $(`#${index}`).attr('checked', true);
                        });
                    } */
        get_data();

        let markers_info2 = [];
        let change_flag = false;
        google.maps.event.addListener(map, "bounds_changed", function() {
            markers_info2 = [];
            let i = 0;
            let list = [];
            markers.map((marker) => {
                if (map.getBounds().contains(marker.getPosition())) {
                    markers_info2[i] = {
                        id: marker.id,
                        lat: marker.getPosition().lat(),
                        lng: marker.getPosition().lng(),
                        price: marker.price,
                        bathrooms: marker.bathrooms,
                        beds: marker.beds,
                        image: marker.image,
                        ml_num: marker.ml_num,
                        type: marker.type,
                        address: marker.address,
                        S_r: marker.S_r,
                    };
                    i++;
                }
            });
            list = split_json(markers_info2, 1, 6);
            if (currnt_list[0]["ml_num"] != list[0]["ml_num"]) {
                set_list(list);
                currnt_list = list;
                set_pagination(markers_info2.length);
            }
            /*             let list = split_json(markers_info2, 1, 6);
                              console.log(list); */
        });

        function set_pagination(props) {
            $("#pagination-holder").html("");
            let pages = parseInt(props / 6);
            if (pages > 6) {
                $("#pagination-holder").html(
                    `
                <li class="page-item ` +
                    (currnt_page == 0 ? "d-none" : " ") +
                    ` "  ><a class="page-link" ` +
                    (currnt_page != 0 ? 'data-page="0"' : " ") +
                    `>First</a></li>
                        <li class="page-item ` +
                    (currnt_page - 1 <= 0 ? "d-none" : " ") +
                    `">
                          <a class="page-link" data-page="` +
                    (currnt_page - 1) +
                    `" href="#">` +
                    currnt_page +
                    `</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" data-page="` +
                    (currnt_page + 1) +
                    `" href="#">` +
                    (currnt_page + 1) +
                    `</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" data-page="` +
                    (currnt_page + 2) +
                    `" href="#">` +
                    (currnt_page + 2) +
                    `</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link ` +
                    (currnt_page == pages ? "d-none" : " ") +
                    `" href="#" data-page="` +
                    pages +
                    `" >Last</a>
                        </li>                
                `
                );
            }
        }

        $(document).on("click", ".page-link", function() {
            let page = parseInt($(this).attr("data-page"));
            console.log(page);
            let pages_list = split_json(markers_info2, page == 1 ? 0 : page * 6);
            set_list(pages_list);
            currnt_page = page;
            console.log(page);
            set_pagination(markers_info2.length);
        });

        function split_json(list, start, count = 6) {
            let end = start + count;
            /*   console.log(start + '->' + end); */
            let return_list = [];
            for (start; start != end; start++) {
                return_list.push(list[start]);
            }
            return return_list;
        }

        if (search_location !== null) {
            $("#search-text").val(search_location.formatted_address);
            if (search_location.geometry.viewport) {
                map.fitBounds(search_location.geometry.viewport);
            } else {
                map.setCenter(search_location.geometry.location);
                map.setZoom(11);
            }
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(get_position);
        }

        function get_position(position) {
            if (
                (search_options["text"] === undefined ||
                    search_options["text"] == "") &&
                (search_options["Area"] === undefined || search_options["Area"] == "")
            ) {
                map.panTo(
                    new google.maps.LatLng(
                        position.coords.latitude,
                        position.coords.longitude
                    )
                );
                map.setZoom(11);
            }
        }

        let search_address = null;
        const autocomplete = new google.maps.places.Autocomplete(
            document.getElementById("search-text"), {
                componentRestrictions: { country: "ca" },
                types: ["geocode"],
            }
        );

        autocomplete.addListener("place_changed", () => {
            search_address = autocomplete.getPlace();
        });

        function loading(state) {
            if (state == "show") {
                $(".js-preloader").fadeIn("slow");
            } else {
                $(".js-preloader").fadeOut("slow");
            }
        }

        function reset_price_slider() {
            $("#amount_two").val(0 + " - " + 10000000 + " $");
            $("#slider-range_two").slider("values", 0, 0);
            $("#slider-range_two").slider("values", 1, 10000000);
        }

        function nFormatter(num, digits) {
            const lookup = [
                { value: 1, symbol: "" },
                { value: 1e3, symbol: "k" },
                { value: 1e6, symbol: "M" },
                { value: 1e9, symbol: "G" },
                { value: 1e12, symbol: "T" },
                { value: 1e15, symbol: "P" },
                { value: 1e18, symbol: "E" },
            ];
            const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
            var item = lookup
                .slice()
                .reverse()
                .find(function(item) {
                    return num >= item.value;
                });
            return item ?
                (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol :
                "0";
        }
        var closeInfoWindowWithTimeout;

        function setMarkers(markers_data, type) {
            let show_type;
            if (type == "commercialproperty") show_type = 1;
            else if (type == "residentialproperty") show_type = 2;
            else if (type == "condoproperty") show_type = 3;
            else show_type = 4;
            clearMap();
            var infowindow = new google.maps.InfoWindow();
            if (markers_data.length > 0) {
                const markerBounds = new google.maps.LatLngBounds();
                markers = markers_data.map((location) => {
                    let position = {
                        lat: parseFloat(location.lat),
                        lng: parseFloat(location.lng),
                    };
                    markerBounds.extend(position);
                    let icon = {
                        url: main_url + "images/map/Tpin.png",
                        scaledSize: new google.maps.Size(55, 55), // size
                        labelOrigin: new google.maps.Point(27, 23),
                    };
                    const marker = new google.maps.Marker({
                        position: position,
                        label: {
                            text: "$" + nFormatter(location.Orig_dol, 1),
                            color: "black",
                            fontSize: "9px",
                            fontWeight: "bold",
                        },
                        icon: icon,
                    });
                    let address =
                        location.Addr +
                        ", " +
                        location.Municipality +
                        ", " +
                        location.County +
                        ", " +
                        location.Zip;
                    marker.setValues({
                        type: type,
                        id: location.id,
                        ml_num: location.Ml_num,
                        S_r: location.S_r,
                        image: img_url + "/" + location.Ml_num + "/0.jpg",
                        address: address,
                        beds: location.Br,
                        bathrooms: location.Bath_tot,
                        price: location.Orig_dol,
                    });
                    google.maps.event.addListener(marker, "click", function(event) {
                        let marker_data = [
                            { id: this.id, lat: event.latLng.lat(), lng: event.latLng.lng() },
                        ];
                        page_markers_data = marker_data;
                        get_list(JSON.stringify(marker_data), this.type, 0);
                        check_size();
                    });
                    google.maps.event.addListener(marker, "mouseover", async function() {
                        clearTimeout(closeInfoWindowWithTimeout);
                        let content =
                            '<a href="' +
                            $("#show_link").val() +
                            show_type +
                            "/" +
                            this.ml_num +
                            '" target="_blank"><div id="infoWindowBox"><img class="info_box_img" src="' +
                            this.image +
                            '" onerror="this.onerror=null; this.src=\'images/fp-1.jpg\'"/>' +
                            '<div class="info_box_body"><div class="info_box_price">' +
                            "<b>" +
                            parseFloat(this.price).toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            }) +
                            "</b></div>" +
                            '<div class="info_box_address"><span>' +
                            this.address +
                            '</span></div><div class="info_box_icons">';
                        this.beds !== undefined &&
                            parseInt(this.beds) != 0 &&
                            (content +=
                                '<div><i class="fas fa-bed"></i><span>' +
                                this.beds +
                                "</span></div>");
                        this.bathrooms !== undefined &&
                            parseInt(this.bathrooms) != 0 &&
                            (content +=
                                '<div><i class="fas fa-bath"></i><span>' +
                                this.bathrooms +
                                "</span></div>");
                        content += "</div></div></div></a>";
                        infowindow.setContent(content);
                        infowindow.open(map, marker);
                    });
                    marker.addListener("mouseout", function() {
                        closeInfoWindowWithTimeout = setTimeout(
                            () => infowindow.close(map, marker),
                            500
                        );
                    });
                    infowindow.addListener("domready", function() {
                        $("#infoWindowBox").mouseover(function() {
                            clearTimeout(closeInfoWindowWithTimeout);
                        });
                        $("#infoWindowBox")
                            .parent()
                            .parent()
                            .parent()
                            .mouseleave(
                                () =>
                                (closeInfoWindowWithTimeout = setTimeout(
                                    () => infowindow.close(map, marker),
                                    500
                                ))
                            );
                    });
                    return marker;
                });
                markerClusterer.addMarkers(markers, true);
                map.fitBounds(markerBounds);
            }
        }

        function clearMap() {
            markerClusterer.clearMarkers();
            markers = [];
        }

        $("#search-text").change(() => {
            $("#area").val("");
            $('#area option[value=""]').attr("selected", "selected");
            delete search_options["Area"];
            search_location = null;
            search_address = null;
        });

        $("#area").change(() => {
            search_address = null;
            search_location = null;
            delete search_options["text"];
            delete search_options["location"];
            $("#search-text").val("");
        });

        $(".conditions").change(function() {
            if ($(this).is(":checked")) {
                search_options["check"][$(this).attr("name")] = "Y";
            } else {
                if (search_options["check"][$(this).attr("name")]) {
                    delete search_options["check"][$(this).attr("name")];
                }
            }
        });

        $("#search-btn").click((event) => {
            event.preventDefault();
            loading("show");
            if ($("#bld_type").val() != "") {
                search_options["bld_type"] = $("#bld_type").val();
            }
            if ($("#search-text").val() != "") {
                search_options["text"] = $("#search-text").val();
            } else {
                delete search_options["text"];
            }
            search_options["type"] = $("#type").val();
            if ($("#area").val() != "") {
                search_options["Area"] = $("#area").val();
            } else {
                delete search_options["Area"];
            }
            search_options["property_status"] = $(
                'input[name="search_type"]:checked'
            ).val();
            if (
                $("#property-status").val() != "Lease" &&
                $("#max-price").val() != ""
            ) {
                search_options["min-price"] = 0;
                search_options["max-price"] = $("#max-price").val();
            }
            delete search_options["bld-size"];
            delete search_options["lnd-size"];
            if ($("#bathrooms").val() != "") {
                search_options["bathrooms"] = $("#bathrooms").val();
            } else {
                delete search_options["bathrooms"];
            }
            if ($("#bedrooms").val() != "") {
                search_options["bedrooms"] = $("#bedrooms").val();
            } else {
                delete search_options["bedrooms"];
            }
            if (search_location !== null) {
                search_address = search_location;
            }
            if (
                search_address === null ||
                !search_address.hasOwnProperty("geometry")
            ) {
                get_data();
            } else {
                search_options["text"] = "";
                get_data();
                if (search_address.geometry.viewport) {
                    map.fitBounds(search_address.geometry.viewport);
                } else {
                    map.setCenter(search_address.geometry.location);
                    map.setZoom(11);
                }
                let markers_info = [];
                var i = 0;
                markers.map((marker) => {
                    if (map.getBounds().contains(marker.getPosition())) {
                        markers_info[i] = {
                            id: marker.id,
                            lat: marker.getPosition().lat(),
                            lng: marker.getPosition().lng(),
                        };
                        i++;
                    }
                });
                page_markers_data = markers_info;
            }
            loading("hide");
        });

        $(document).on("click", ".pagination-item", function() {
            $(document).scrollTop(0);
        });

        function get_data() {
            $.ajaxSetup({
                beforeSend: function(xhr, type) {
                    if (!type.crossDomain) {
                        xhr.setRequestHeader(
                            "X-CSRF-Token",
                            $('meta[name="csrf-token"]').attr("content")
                        );
                    }
                },
            });
            const data = JSON.parse(
                $.ajax({
                    url: find_url + "/search",
                    method: "post",
                    data: { search_options: search_options },
                    async: false,
                    success: function(response) {
                        return response;
                    },
                    error: function() {},
                }).responseText
            );
            page_markers_data = data["markers_data"]["markers_data"];
            setMarkers(data["markers_data"]["markers_data"], data["type"]);
        }

        function set_list(list) {
            $("#cards-holder").html("");
            $.each(list, function(i, e) {
                var show_type;
                if (e.type == "commercialproperty") show_type = 1;
                else if (e.type == "residentialproperty") show_type = 2;
                else if (e.type == "condoproperty") show_type = 3;
                //onerror="this.onerror=null; this.src='images/staticHome.png'"
                $("#cards-holder").append(
                    `<div class="col-lg-6 mt-md-4 mt-2"><div class="card">
                <a href="find/` +
                    show_type +
                    `/` +
                    e.ml_num +
                    `" target="_blank">
            <div class="img_container">
                <img src="` +
                    img_url +
                    e.ml_num +
                    `/0.jpg" onerror="this.onerror=null; this.src='images/staticHome.png'"  class="card-img-top img-fluid" alt="..." />
            </div>    
            </a>
                <div class="card-body pe-0">
                  <div class="row pt-2">
                    <div class="col-6">
                      <span class="main_color price">$ ` +
                    nFormatter(e.price) +
                    ` </span>
                    </div>
                    <div class="col-6 d-flex align-items-center">
                      <font-awesome-icon icon="fa-solid fa-heart" class="pe-2" />
                      <div class="sale_bg text-center">
                        <span> ` +
                    e.S_r +
                    `</span>
                      </div>
                    </div>
                    <div class="col-12 py-2">
                      <div class="d-flex align-items-start black_font">
                        <img src="` +
                    main_url +
                    `images/mapMarker.png" alt=".." class="img-fluid pt-1 pe-2" />
                        <span class="small_font">
                          ` +
                    e.address +
                    `
                        </span>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="d-flex align-items-center">
                        <img src="` +
                    main_url +
                    `images/bed.png" alt="..." class="img-fluid pe-1" />
                        <span class="small_font capitalize">` +
                    e.beds +
                    ` beds</span>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="d-flex align-items-center">
                        <img src="` +
                    main_url +
                    `images/dis.png" alt="..." class="img-fluid pe-1"/>
                        <span class="small_font capitalize">150 ft2</span>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="d-flex align-items-center">
                        <img src="` +
                    main_url +
                    `images/bath.png" alt="..." class="img-fluid pe-1" />
                        <span class="small_font capitalize">` +
                    e.bathrooms +
                    ` baths</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div></div>`
                );
            });
        }

        function get_list(list_markers, type, page) {
            $.ajaxSetup({
                beforeSend: function(xhr, type) {
                    if (!type.crossDomain) {
                        xhr.setRequestHeader(
                            "X-CSRF-Token",
                            $('meta[name="csrf-token"]').attr("content")
                        );
                    }
                },
            });
            const list_data = JSON.parse(
                $.ajax({
                    url: find_url + "/list",
                    method: "post",
                    data: { markers_data: list_markers, type: type, page: page },
                    async: false,
                    success: function(response) {
                        return response;
                    },
                    error: function() {},
                }).responseText
            );
            $("#grid-view").html("");
            $("#grid-view").append(list_data["grid_list"]);
            $("#list-view").html("");
            $("#list-view").append(list_data["list_view"]);
            $("#pagination-holder").html("");
            $("#pagination-holder").append(list_data["pagination"]);
            $("#total").text(list_data["total"]);
        }

        function check_size() {
            if ($(window).width() < 1200) {
                window.scrollTo({
                    top: $(".map-sidebar-content").offset().top,
                    behavior: "smooth",
                });
            }
        }
    });
}

export { initMap };