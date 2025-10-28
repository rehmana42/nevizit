import React, { useEffect, useState } from 'react';
import NavTourist from '../Tourist/NavTourist';
import AllFooter from '../HomePage/Footer/AllFooter';

const NearbyPlaces = () => {
  const [map, setMap] = useState(null);
  const [places, setPlaces] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [selectedType, setSelectedType] = useState('hospital'); // Default filter type

  useEffect(() => {
    if (window.google && window.google.maps && window.google.maps.places) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    } else {
      console.error("Google Maps API is not loaded properly.");
    }
  }, []);

  useEffect(() => {
    if (userLocation && map) {
      findNearbyPlaces(userLocation.lat, userLocation.lng, map);
    }
  }, [selectedType, userLocation, map]);

  const showPosition = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setUserLocation({ lat: latitude, lng: longitude });

    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: latitude, lng: longitude },
      zoom: 14,
    });

    setMap(map);

    new window.google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map,
      title: "Your Location",
    });

    findNearbyPlaces(latitude, longitude, map);
  };

  const showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        alert("An unknown error occurred.");
    }
  };

  const findNearbyPlaces = (lat, lng, map) => {
    const userLocation = new window.google.maps.LatLng(lat, lng);

    const request = {
      location: userLocation,
      radius: '5000', // Search within 5 km radius
      type: selectedType, // Filter based on selected type
    };

    const service = new window.google.maps.places.PlacesService(map);

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setPlaces(results.slice(0, 10));
        map.markers?.forEach(marker => marker.setMap(null));
        map.markers = [];

        results.forEach((place) => {
          createMarker(place, map);
        });
      } else {
        console.error('PlacesService request failed:', status);
      }
    });
  };

  const createMarker = (place, map) => {
    const marker = new window.google.maps.Marker({
      map: map,
      position: place.geometry.location,
      title: place.name,
    });

    const infowindow = new window.google.maps.InfoWindow({
      content: `<strong>${place.name}</strong><br>${place.vicinity}`,
    });

    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });

    if (!map.markers) map.markers = [];
    map.markers.push(marker);
  };

  const handleFilterChange = (event) => {
    setSelectedType(event.target.value);
  };

  const openGoogleMaps = (place) => {
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <NavTourist />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <div id="map" className="w-full h-[500px]"></div>
          <div className="flex flex-row flex-grow">
            <div className="w-full md:w-3/4 p-4 overflow-y-auto">
              <h2 className="text-2xl font-semibold mb-4">Nearby Places</h2>
              {places.length > 0 ? (
                <ul className="space-y-4">
                  {places.map((place, index) => (
                    <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold">{place.name}</h3>
                      <p className="text-sm">{place.vicinity}</p>
                      <button
                        onClick={() => openGoogleMaps(place)}
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Go to Location
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No places found.</p>
              )}
            </div>
            <div className="w-full md:w-1/4 p-4 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Filter Places</h2>
              <div className="flex flex-col space-y-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="hospital"
                    checked={selectedType === 'hospital'}
                    onChange={handleFilterChange}
                    className="w-6 h-6"
                  />
                  <span className="text-lg">Hospitals</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="police"
                    checked={selectedType === 'police'}
                    onChange={handleFilterChange}
                    className="w-6 h-6"
                  />
                  <span className="text-lg">Police Stations</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="fire_station"
                    checked={selectedType === 'fire_station'}
                    onChange={handleFilterChange}
                    className="w-6 h-6"
                  />
                  <span className="text-lg">Fire Stations</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <AllFooter />
      </div>
    </>
  );
};

export default NearbyPlaces;
