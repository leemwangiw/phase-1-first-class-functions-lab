// Code your solution in this file!
// Function that returns the first two drivers from an array
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  // Function that returns the last two drivers from an array
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  // Array containing the two functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Function that creates a fare multiplier
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // Fare doubler function
  const fareDoubler = createFareMultiplier(2);
  
  // Fare tripler function
  const fareTripler = createFareMultiplier(3);
  
  // Function that selects different drivers based on the function passed
  function selectDifferentDrivers(arrayOfDrivers, driverSelector) {
    return driverSelector(arrayOfDrivers);
  }
  