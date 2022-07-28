import helloWorld from '../src/';

test('test setup', () => {
  expect(helloWorld()).toBe('Hello World');
});
