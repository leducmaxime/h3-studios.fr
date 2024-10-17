"use client";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useCallback, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 48.770528,
  lng: 2.505609,
};

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCVskVxX84bcaEy7OeNhlpoksqvk68l3fA",
  });
  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    //
    // setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="w-full h-[400px]"
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <>
        <Marker position={center} />
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}
