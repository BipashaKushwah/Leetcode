/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let W = Math.floor(Math.sqrt(area)); // Start from the square root
  
  while (area % W !== 0) {
    W--; // Decrease until W divides area evenly
  }
  
  let L = area / W;
  return [L, W];
};