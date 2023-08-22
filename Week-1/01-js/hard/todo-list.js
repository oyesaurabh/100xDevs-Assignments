/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todo = [];
  }
  add(item) {
    this.todo.push(item);
  }
  get(index) {
    if (index >= this.todo.length) return null;
    return this.todo[index];
  }
  getAll() {
    return this.todo;
  }
  update(index, updatedItem) {
    if (index >= this.todo.length) return;
    this.todo[index] = updatedItem;
  }
  remove(index) {
    this.todo.splice(index, 1);
  }
  clear() {
    this.todo = [];
  }
}

module.exports = Todo;
