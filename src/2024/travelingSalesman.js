class City {
  constructor(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
  }
  calculateDistance(otherCity) {
    const deltaX = this.x - otherCity.x;
    const deltaY = this.y - otherCity.y;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  }
}

function nearestNeighborAlgorithm(cities) {
  const unvisitedCities = [...cities];
  const startCity = unvisitedCities.shift();
  let currentCity = startCity;
  const tour = [startCity];

  while (unvisitedCities.length > 0) {
    let nearestCity = unvisitedCities[0];
    let minDistance = currentCity.calculateDistance(nearestCity);

    for (const city of unvisitedCities) {
      const distance = currentCity.calculateDistance(city);
      if (distance < minDistance) {
        minDistance = distance;
        nearestCity = city;
      }
    }

    tour.push(nearestCity);
    currentCity = nearestCity;
    unvisitedCities.splice(unvisitedCities.indexOf(nearestCity), 1);
  }

  return tour;
}

const cities = [
  new City(0, 60, 200),
  new City(1, 180, 200),
  new City(2, 80, 180),
];

const tour = nearestNeighborAlgorithm(cities);
console.log(
  "Tour order:",
  tour.map((city) => city.id)
);
