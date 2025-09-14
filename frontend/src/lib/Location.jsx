import axios from "axios";

export async function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
console.log("proces");

          // Reverse geocoding (get address from coords)
           const response = await fetch(
             `https://geocode.xyz/${lat},${lon}?geoit=json`
           );
           const data = await response.json();
           console.log(data.standard.staddress);
           

          resolve({
            latitude: lat,
            longitude: lon,
            // address: data.display_name || "Address not found",
          });
        } catch (err) {
          reject("Failed to fetch address");
        }
      },
      (err) => {
        reject(err.message);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
      }
    );
  });
}
