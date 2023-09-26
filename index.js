// let myMap = {
//     coordinates: [],
//     businesses: [],
//     map: {},
//     markers: {},
// }

let map = L.map('map').setView([35.07410903689255, -80.65102987195374], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([35.08232284464867, -80.63210891511194]).addTo(map);
marker.bindPopup("<b>Hello!</b><br>You are Here!!.").openPopup();

let polygon = L.polygon([
    [35.107757206375965, -80.63282686249859],
    [35.06854935658888, -80.67819979366334],
    [35.044806437213225, -80.60783027851278],
    [35.073883908568206, -80.59236806578954],
]).addTo(map);

let redPin = L.icon({
    iconUrl: 'assets/red-pin.png',
    
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


// markers for buisnesses
let redDot = L.marker(
    [35.07602635051466, -80.65380988608088],
    {icon: redPin}
).bindPopup('sdfsd').addTo(map)

 let lDL = L.marker([35.08429513474555, -80.65942477474634],
     {icon: redPin}).bindPopup('Groceries').addTo(map)
let abc = L.marker([35.068461846219556, -80.64197001040309],
    {icon: redPin}).bindPopup('Drinks').addTo(map)
// let = L.marker([]).bindPopup('')
// let = L.marker([]).bindPopup('')
// let  = L.marker([]).bindPopup('')



// async function buisnessApi(){
//     const options = {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//           Authorization: 'fsq3eFOiM0WOOz/ZqRDOsm0eaVYH/OaiMShN5jy6cTDldCA='
//         }
//       };
      
//      await fetch('https://api.foursquare.com/v3/places/search', options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
// }

//  queryselector.change example
// <script >
//  let dd = document.querySelector("#cars")
//  dd.addEventListener('change',function(e){
//  	//what is value of this element
//     alert(e.target.value)
//  })</script>

// foursquare key
// fsq3eFOiM0WOOz/ZqRDOsm0eaVYH/OaiMShN5jy6cTDldCA=