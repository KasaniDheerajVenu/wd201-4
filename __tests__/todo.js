/* eslint-disable no-undef */
const ToDoLists = require("../todo");
let today = new Date().toLocaleDateString("en-CA");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = ToDoLists();

describe("ToDoLists test phase", () => {
  beforeAll(() => {
    add({
      title: "ANNIVERSARY",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Add a new todo in list", () => {
    // expect(all.lenth).toBe(0);

    let list_len = all.length;

    add({
      title: "CAKE CUTTING",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(list_len + 1);
  });

  test("Mark todo as a completed", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Retrieving overdue todo", () => {
    let ListTodos = overdue();

    expect(
      ListTodos.every((todo) => {
        return todo.dueDate < today;
      })
    ).toBe(true);
  });

  test("Retrieving dueToday todos", () => {
    let ListTodos = dueToday();

    expect(
      ListTodos.every((todo) => {
        return todo.dueDate === today;
      })
    ).toBe(true);
  });

  test("Retrieving dueLater todos", () => {
    let ListTodos = dueLater();

    expect(
      ListTodos.every((todo) => {
        return todo.dueDate > today;
      })
    ).toBe(true);
  });
});
