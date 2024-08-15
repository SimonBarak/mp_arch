import React, { useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

const mapboxAccessToken =
  "pk.eyJ1IjoibG9uZXJzY29tcGFueSIsImEiOiJjandqNTlsYXIwNjduNDRwNjhkemhhZXVtIn0.c2PlH4OqBZUOQgDM4hg7fw";
const mapStyle = "mapbox://styles/lonerscompany/ck2waac450nav1dtdnrizbfoi";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = mapboxAccessToken;

const Map = ({ items }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapStyle, // replace with your map style
      center: [15.565441, 49.984897],
      zoom: 5,
      zoomControl: true,
      scrollZoom: false,
    });

    items.forEach((item) => {
      // create a marker for each item
      // create a marker for each item
      const markerElement = document.createElement("div");
      markerElement.className =
        "z-0 h-5 w-5 rounded-full cursor-pointer border border-gray-800 bg-gray-200 hover:bg-blue-500 shadow-md pin";

      const marker = new mapboxgl.Marker({ element: markerElement })
        .setLngLat(item.coordinates)
        .addTo(map.current);

      // create a popup for each item
      const popup = new mapboxgl.Popup({ offset: 12 }).setHTML(
        `<a class="block text-blue-500 hover:text-blue-700 text-xl px-2 py-4 border-0 mr-5 outline-none" href="${item.slug}">${item.title}</a>`
      );

      popup.className =
        // add the popup to the marker
        marker.setPopup(popup);
    });
  }, [items]);

  return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />;
};

export default Map;
