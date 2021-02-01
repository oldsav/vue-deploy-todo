const todoStorage = sessionStorage.getItem("todos");
const todos: [] = todoStorage !== null ? JSON.parse(todoStorage) : [];

export default todos;
