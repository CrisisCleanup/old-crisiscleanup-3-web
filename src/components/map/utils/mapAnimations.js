let markerOpacity = 0.05;
let markerOpacityIncrement = 0.05;

let fadeInMarker = (marker) => {

  if (markerOpacity <= 1) {

    marker.setOpacity(markerOpacity);

    // increment opacity
    markerOpacity += markerOpacityIncrement;

    // call this method again
    setTimeout(function () {
      fadeInMarker(marker);
    }, 50);

  } else {
    markerOpacity = markerOpacityIncrement; // reset for next use
  }
}

export default fadeInMarker;
