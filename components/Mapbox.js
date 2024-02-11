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
      const markerElement = document.createElement("div");
      markerElement.innerHTML = `
        <div class="z-0 h-5 w-5 rounded-full cursor-pointer border border-gray-800 shadow-md pin"></div>
      `;

      const marker = new mapboxgl.Marker({ element: markerElement })
        .setLngLat(item.coordinates)
        .addTo(map.current);

      // create a popup for each item
      const popup = new mapboxgl.Popup({ offset: 40 }).setHTML(
        `<a class="block text-blue-500 hover:text-blue-600 text-xl px-2 py-4 border-0" href="${item.slug}">${item.title}</a>`
      );

      // add the popup to the marker
      marker.setPopup(popup);
    });
  }, [items]);

  return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />;
};
// const Map = ({ items }) => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const [zoom, setZoom] = useState(5);

//   useEffect(async () => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: mapStyle,
//       center: [15.565441, 49.984897],
//       zoom: zoom,
//       scrollZoom: false,
//     });

//     map.current.addControl(new mapboxgl.NavigationControl());

//     items.forEach((item) => {
//       // create a HTML element for each feature
//       const el = document.createElement("div");
//       el.innerHTML = `<div class="z-20 entrie absolute bottom-10"><a class="block w-60 overflow-hidden rounded bg-white hover:text-blue-500 transition" href="${item.slug}"><div class="py-2 px-3"><p class="text-lg">${item.title}</p></div></a></div>
//                       <div class="z-0 h-5 w-5 rounded-full cursor-pointer border border-gray-800 shadow-md pin"></div>`;
//       el.className = "";

//       el.onclick = () => {
//         document.querySelectorAll(".mapboxgl-marker").forEach((item) => {
//           item.classList.remove("active");
//         });

//         el.classList.add("active");

//         map.current.flyTo({
//           center: item.coordinates,
//           zoom: 7.5,
//           speed: 1.5,
//           curve: 1,
//           easing(t) {
//             return t;
//           },
//         });
//       };

//       new mapboxgl.Marker(el).setLngLat(item.coordinates).addTo(map.current);
//     });
//   });

//   return (
//     <section>
//       <div ref={mapContainer} className="h-half" />
//     </section>
//   );
// };

export default Map;
