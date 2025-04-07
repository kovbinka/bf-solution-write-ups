'use strict';

import { addUp } from './solution1.js';

describe('Basic Tests', () => {
    it('should return 10 when 4 is passed', () => {
        expect(addUp(4)).toEqual(10);
    });
    it('should return 21 when 6 is passed', () => {
        expect(addUp(6)).toEqual(21);
    });
    it('should return 0 when 0 is passed', () => {
        expect(addUp(0)).toEqual(0);
    });
});