import { TestScheduler } from 'jest';
// import {loadTranslation} from './index.js';

// test('Translation', () => {
//     const instance = new loadTranslation();
//     const spy = jest.spyOn(instance, 'lang');
//     spy.mockReturnValue(['en-EN', 'it-IT']);

//     expect(instance.loadTranslation()).toBe(false);
//     spy.mockRestore();
// });
// https://stackoverflow.com/questions/56706667/how-to-mock-variables-inside-a-function-in-jest
// https://stackoverflow.com/questions/30792076/mocking-sessionstorage-when-using-jestjs

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});