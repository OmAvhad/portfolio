import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

export default function LeafLetMap({ coordinates = [] }) {
    const [L, setL] = useState(null);

    // India coordinates
    const boxLatitude = 20.5937;
    const boxLongitude = 78.9629;

    useEffect(() => {
        const loadLeaflet = async () => {
          // Dynamically import Leaflet
          const leaflet = await import('leaflet');
          setL(leaflet); // Set Leaflet once imported
        };
    
        loadLeaflet();
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined'|| !L) return;

        if (coordinates.length === 0) return; // Ensure coordinates are available

        // Initialize the map
        const mapInstance = L.map('map').setView([boxLatitude, boxLongitude], 5);

        // Add a tile layer (free from OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; Requests Data on Om’s Portfolio',
        }).addTo(mapInstance);

        // Define a custom icon
        const redDotIcon = L.divIcon({
            className: 'red-dot-icon',
            html: '<div style="background-color: red; width: 8px; height: 8px; border-radius: 50%;"></div>',
            iconSize: [8, 8]
        });

        // Add markers for each coordinate
        coordinates.forEach(coord => {
            L.marker([coord.lat, coord.lon], { icon: redDotIcon }).addTo(mapInstance)
              .bindPopup(`Lat: ${coord.lat}, Lon: ${coord.lon}`);
        });

        // Clean up on component unmount
        return () => {
            if (mapInstance) {
                mapInstance.remove(); // Remove the map instance to prevent memory leaks
            }
        };
    }, [L, coordinates]); // Re-run when coordinates are updated

    return (
        <>
            <div id="map" style={{ height: '500px', width: '100%' }}></div>
        </>
    )
}