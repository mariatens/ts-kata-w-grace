// import getMaximums from './1-nested-array';
import getMaximum from './1-nested-array-helper';

test("getMaximum returns biggest number from a number array", () => {
    expect(getMaximum([12,3, "hi"])).toBe(12);
});