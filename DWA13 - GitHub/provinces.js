import { names, provinces} from "./data.js";

//
names.forEach((name) => {
  console.log(name);
});

//
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

//
const provincesUpperCase = provinces.map((province) => province.toUpperCase());
console.log(provincesUpperCase);

//
const nameLengths = names.map((name) => name.length);
console.log(nameLengths);

//
const sortedProvinces = provinces.slice().sort();
console.log(sortedProvinces);

//
const filteredProvinces = provinces.filter((province) => !province.includes("Cape"));
console.log(filteredProvinces.length);

//
const containsS = names.map((name) => name.includes("S"));
console.log(containsS);

//
const nameToProvince = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameToProvince);