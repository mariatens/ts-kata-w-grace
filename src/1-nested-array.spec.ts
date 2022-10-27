import getMaximums from './1-nested-array';

test("getMaximums returns number array  with biggest values from each subarray", () => {
    expect(getMaximums([[12,3]])).toEqual([12]);
});

test("getMaximums returns number array  with biggest values from each subarray", () => {
    expect(getMaximums([[10, 70, 30], [40], [20, -30, 80]])).toEqual([70, 40, 80]);
});