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

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="w-full h-[400px]"
      center={center}
      zoom={15}
    >
      <>
        <Marker position={center} />
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}
