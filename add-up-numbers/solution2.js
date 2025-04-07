'use strict';

/**
 * Add up all the numbers from 1 to the number we passed to the function.
 * 
 * @param {number} num - The number we passed to the function.
 * @returns {number} All the numbers are added up.
 */

export const addUp = (num) => {
    let result = 0;
    for(let i=0; i <= num; i++) {
      result = result + i;
    }
  return result;
};