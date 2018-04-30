'use strict';

const Node = require('./node');
const LinkedList = require('./linked-list');

module.exports = class Stack {
  constructor() {
    this._storage = new LinkedList();
  }

  // This method is to push specified value on the tail of the LinkedList Stack
  push(value) {
    const node = new Node(value);

    if (!this._storage.head) {
      this._storage.head = node;
      return this;
    }
    let currentNode = this._storage.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this._storage;
  }

  // This is designed to pop off the tail value of the stack (LIFO)
  pop() {
    if (!this._storage.head) {
      throw new Error('__ERROR__ list is empty')
    }
    let currentNode = this._storage.head;
    if (!currentNode.next) {
      currentNode = null;
    }
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    return this._storage.head;
  }

  // Method designed to verify the last value of the LinkedList
  peek() {
    if (!this._storage.head) {
      throw new Error('__ERROR__ list is empty')
    }
    let currentNode = this._storage.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // This is a method to check to see if the Stack is empty(returns false if empty or true if exists)
  isEmpty() {
    if (this._storage.head === null) {
      return true;
    }
    return false;
  }
}