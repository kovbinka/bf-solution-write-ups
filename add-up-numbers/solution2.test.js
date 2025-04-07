'use strict';

import { addUp } from './solution2.js';

describe('Second Tests', () => {
    it('should return 15 when 5 is passed', () => {
        expect(addUp(5)).toEqual(15);
    });
    it('should return 0 when 0 is passed', () => {
        expect(addUp(0)).toEqual(0);
    });
    it('should return 10 when 4 is passed', () => {
        expect(addUp(7)).toEqual(28);
    });
    it('should return 55 when 10 is passed', () => {
        expect(addUp(10)).toEqual(55);
    });
});
