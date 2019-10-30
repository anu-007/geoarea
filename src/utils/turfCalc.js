/* eslint-disable no-param-reassign */
const turf = require('@turf/turf');

// calculates area of polygon
const areaCalc = (data) => {
  data.forEach((d) => {
    const polygon = turf.polygon(d.geometry.coordinates);
    const area = turf.area(polygon);
    d.area = area;
  });
  return data;
};

// calculates center of mass of polygon
const comCalc = (data) => {
  data.forEach((d) => {
    const polygon = turf.polygon(d.geometry.coordinates);
    const com = turf.centerOfMass(polygon);
    d.centerOfMass = com;
  });
  return data;
};

// calculates centroid of polygon
const centroidCalc = (data) => {
  data.forEach((d) => {
    const polygon = turf.polygon(d.geometry.coordinates);
    const centroid = turf.centroid(polygon);
    d.centroid = centroid;
  });
  return data;
};

module.exports = {
  areaCalc,
  comCalc,
  centroidCalc,
};
