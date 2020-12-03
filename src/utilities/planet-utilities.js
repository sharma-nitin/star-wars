import swAxiosInstance from '../configs/axios-custom-instance';

let hexCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

export function randomColor() {
  let hexColor = '#', counter = 0;
  for (; counter < 6 ; counter++) {
    hexColor += hexCode[Math.round(Math.random()*15)];
  }

  return hexColor;
}

export function populationFormatConverter(population) {
  let milestones = [
    { value: 1000, format: 'K' },
    { value: 1000000, format: 'M' },
    { value: 1000000000, format: 'B' }
  ], i = milestones.length - 1, display = '';
  for (; i >= 0; i--) {
    if ((population / milestones[i].value) >= 1) {
      display = (
        (
          Math.floor(population / milestones[i].value)
          + '.'
          + Math.floor((population % milestones[i].value) / (milestones[i].value / 10))
        )
        + milestones[i].format
      );
      return display;
    }
  }

  return population;
}

export function getPlanets(pageNo) {
  return new Promise(function (resolve, reject) {
    swAxiosInstance.get('/planets/?page=' + pageNo)
    .then((planetsDetails) => {
      resolve(planetsDetails);
    })
    .catch((error) => {
      reject(error);
    });
  });
}
