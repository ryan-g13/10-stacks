'use strict';

const Stack = require('../lib/stack');

const stack = new Stack();

describe('This is a test suite to test for valid runtime of the stack application', () => {
  describe('Testing valid values for the functions attached to the stack', () => {
    test('Test isEmpty', () => {
      expect(stack.isEmpty()).toEqual(true);
    });
    test('Testing the push function', () => {
      stack.push(1);
      stack.push(3);
      stack.push(5);
      stack.push(7);
      expect(stack.peek().value).toEqual(7);
    });
    test('Testing the pop method removing nodes from LinkedList', () => {
      stack.pop();
      expect(stack.peek().value).toEqual(5);
    });
    test('Testing the pop method removing 2nd to last node from LinkedList', () => {
      stack.pop();
      expect(stack.peek().value).toEqual(3);
    });
    test('Testing the pop method removing 3rd to last node from LinkedList', () => {
      stack.pop();
      expect(stack.peek().value).toEqual(1);
    });
  });
});
