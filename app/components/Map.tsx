"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Location } from "@/types";

// You'll need to replace this with your actual Mapbox access token
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

interface MapProps {
  locations: Location[];
}

export default function Map({ locations }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [10.7522, 59.9139], // Oslo coordinates
      zoom: 12,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (!map.current) return;

    // Add markers for each location
    locations.forEach((location) => {
      const marker = new mapboxgl.Marker()
        .setLngLat([location.coordinates.lng, location.coordinates.lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(`
              <h3 class="font-semibold">${location.name}</h3>
              <p class="text-sm">${location.description}</p>
            `)
        )
        .addTo(map.current!);
    });
  }, [locations]);

  return (
    <div
      ref={mapContainer}
      className="w-full h-[600px] rounded-lg overflow-hidden"
    />
  );
}
