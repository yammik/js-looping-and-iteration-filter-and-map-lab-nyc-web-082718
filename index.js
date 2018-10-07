const driversWithRevenueOver = function(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
}

const driverNamesWithRevenueOver = function(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name);
}

const exactMatch = function(drivers, obj) {
  return drivers.filter(driver => driver[Object.keys(obj)[0]] === obj[Object.keys(obj)[0]]);
}

const exactMatchToList = function(drivers, obj) {
  return exactMatch(drivers, obj).map(driver => driver.name);
}
