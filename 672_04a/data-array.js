// STORING DATA AS VARIABLES IN ARRAYS

// set up arrays
var cities = [],
    coords = [],
    populations = [],
    capitals = [],
    states = [];
    figures = [];
    areas_mile = [];
    areas_km = [];

// add data for Lexington to arrays
cities[0] ="Lexington"
coords[0] = [38.0297, -84.4947]
populations[0] = 308428
capitals[0] = false
states[0] = "Kentucky"
figures[0] = `<figure class="popup">
     <img class="img-fill popup" src="graphics/Lexington.jpg" alt="Image of Lexington">
     <figcaption>Victorian Square in downtown Lexington.</figcaption>
   </figure>`
areas_mile[0] = 283.64
areas_km[0] = 734.62 

// add data for Louisville  to arrays
cities[1] = "Louisville"
coords[1] = [38.256111, -85.751389]
populations[1] = 597337
capitals[1] = false
states[1] = "Kentucky"
figures[1] = `<figure class="popup">
     <img class="img-fill popup" src="graphics/Louisville.jpg" alt="Image of Louisville">
     <figcaption>3rd and Broadway in Louisville.</figcaption>
   </figure>`
areas_mile[1] =  380.46
areas_km[1] =  985.4 



// add data for Frankfort directly to arrays
cities[2] = "Frankfort"
coords[2] = [38.2, -84.866667]
populations[2] = 25527
capitals[2] = true
    states[2] = "Kentucky"
figures[2] = `<figure class="popup">
          <img class="img-fill popup" src="graphics/Frankfort.jpg" alt="Image of Frankfort">
          <figcaption>Downtown Frankfort.</figcaption>
        </figure>`
areas_mile[2] = 14.77
areas_km[2] = 38.25 


// testing what made it to the arrays
console.log(cities);
console.log(coords);
console.log(populations);
console.log(capitals);
console.log(states);
console.log(figures);
console.log(areas_mile);
console.log(areas_km);