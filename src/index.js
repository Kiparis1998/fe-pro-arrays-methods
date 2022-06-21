import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => {
  return goods.filter((item) => item.brand === brand);
};

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => {
  return goods.filter((item) => item.color === color);
};

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => {
  return goods.filter((item) => item.model === model);
};

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => {
  return goods.filter((item) => item.memory === memory);
};

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => {
  return goods.filter((item) => item.price === price);
};

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => {
  return goods.filter((item) => item.country === country);
};

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => {
  return goods.filter((item) => item.os === os);
};

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => {
  let rangeOfPrices = goods.filter((item) => {
    return item.price >= from && item.price <= to; 
  });
  return rangeOfPrices;
};

const minPriceReducer = () => {
  let fromPrice = goods.reduce((sumFrom, item) => {
    return Math.min(sumFrom, item.price); 
  }, Infinity);
  return fromPrice;
};

const maxPriceReducer = () => {
  let toPrice = goods.reduce((sumTo, item) => {
    return Math.max(sumTo, item.price);
  }, 0);
  return toPrice;
};

const toMaxSorter = () => {
  let maxPrice = goods.sort((firstItem, secondItem) => {
    if (firstItem.price > secondItem.price) return -1;
    if (firstItem.price < secondItem.price) return 1;
    return 0;
  });
  return maxPrice;
};
const toMinSorter = () => {
  let minPrice = goods.sort((firstItem, secondItem) => {
    if (firstItem.price > secondItem.price) return 1;
    if (firstItem.price < secondItem.price) return -1;
    return 0;
  });
  return minPrice;
};

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
