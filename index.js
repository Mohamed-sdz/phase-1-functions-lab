function distanceFromHqInBlocks(location) {
    const hq = 42; // HQ is located at 42nd street
    return Math.abs(location - hq); // Return the absolute difference between the location and Hq
}
function distanceFromHqInBlocks(location) {
    const hq = 42; // HQ is located at 42nd street
    return Math.abs(location - hq); // Return the absolute difference between the location and Hq
  }
  
  function distanceFromHqInFeet(location) {
    const blocks = distanceFromHqInBlocks(location);
    const feetPerBlock = 264; // There are 264 feet per block in Manhattan
    return blocks * feetPerBlock;
  }
  function distanceTravelledInFeet(start, end) {
    const distanceInBlocks = Math.abs(end - start);
    const feetPerBlock = 264; // There are 264 feet per block in Manhattan
    return distanceInBlocks * feetPerBlock;
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0; // Free sample
    } else if (distance > 400 && distance <= 2000) {
      const distanceAfterFreeSample = distance - 400;
      const fare = distanceAfterFreeSample * 0.02;
      return fare;
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare of $25 for distance between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // Distance over 2500 feet is not allowed
    }
  }
  