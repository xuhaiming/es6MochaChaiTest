import { expect } from 'chai';
import { describe, it } from 'mocha';
import TodoList from '../src/todoList';

describe('todoList', () => {
  it('return empty array by default', () => {
    let todoList = new TodoList();

    expect(todoList.getValue()).to.be.an('array');
    expect(todoList.getValue().length).to.equal(0);
  })
});
