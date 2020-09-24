// dataLayer is assigned to the Leaflet geoJson layer
// global variable attributeValue and normValue variables declared above the jQuery method that loads the geoJson data

// drawMap() 
function drawMap(dataLayer) {
    console.log(dataLayer)
    var breaks = getClassBreaks(dataLayer);
    dataLayer.eachLayer(function (layer) {
        var p = layer.feature.properties;
        layer.setStyle({
            fillColor: getColor(p['RENT'], breaks)
        });
        var popUpText = `<b>${p['NAME']} County </b> <br>Median Rent:$${p['RENT']}`
        if (L.Browser.mobile) {
            // if true use popup
            layer.bindPopup(popUpText);
        } else {
            // if false use tooltip
            layer.bindTooltip(popUpText, {
                sticky: true
            })
        }
    });
    drawLegend(breaks);
} // end drawMap() function

// getClassBreaks() 
// determines the range of values we have so we can determine the classification breaks
function getClassBreaks(dataLayer) {
    // empty array (named values) that will hold all the entire range of data values (each data value)
    var values = []
    console.log(dataLayer)
    
    // Loop through features using Leaflet method .eachLayer
    // push values from each feature into the values array
    dataLayer.eachLayer( function(layer){
        var p = layer.feature.properties
        var value = p['RENT']
        // catch errors in data
        if (p['RENT'] != 0 && value != null){
            values.push(value); 
        }
    }) // end eachLayer()
    
    // determine five classification groups using a method call to simple-statistics 
    // creates a 2-dimensional array, that is, an array of arrays
    // each array has all the data values in a cluster in ascending order from lowest to highest
    var clusters = ss.ckmeans(values, 5);
   
    console.log(clusters)
    // determine specific values to use as breakpoints and not clusters of values
    // create a new array comprising the results of a function's operations on each element of an array using native JavaScript method .map() 

    // create an array of the first (lowest) value within each cluster and the last (highest)
    var breaks = clusters.map(function (cluster) {
        return [cluster[0], cluster.pop()];
    });
    console.log(breaks); // verify your break values
    return breaks;
} // end getClassBreaks() function

// getColor() 
// accepts the calculated value and the array of classification breaks
function getColor(d, breaks) {
    if(d <= parseFloat(breaks[0][1])) {
        return '#f2f0f7';
    } else if(d <= parseFloat(breaks[1][1])) {
        return '#cbc9e2';
    } else if(d <= parseFloat(breaks[2][1])) {
        return '#9e9ac8';
    } else if(d <= parseFloat(breaks[3][1])) {
        return '#756bb1';
    } else if(d <= parseFloat(breaks[4][1])) {
        return '#54278f';
    }
} // end getColor


// drawLegend() 
// accepts the classification breaks created above
// create a Control object and add it to the map
// generate HTML elements to display both the color of each class and the data range it represents
// add these elements to the control object
function drawLegend(breaks) {
    console.log(breaks);
    // create a variable to reference the Leaflet Control object, and pass an argument that will position it at the top left of our map.
    var legend = L.control({ position: 'topleft' });
    // when it's added to the map
    legend.onAdd = function () {
        // create a new DOM div element with a class name of "legend"
        var div = L.DomUtil.create('div', 'legend');
        // insert some placeholder text for now
        div.innerHTML = `<h3>Median Rent</h3>`;
        for (var i = 0; i < breaks.length; i++) {
            console.log(breaks)
            var color = getColor(breaks[i][1], breaks);
            console.log(typeof breaks[i][1])
            div.innerHTML +=
                `<span style="background:${color}"></span>
              <label>$${(breaks[i][0])}&mdash; $${(breaks[i][1])}</label>`;
        }
        // return the div element
        return div;
    };
    // add the legend to the map
    legend.addTo(map);
}


