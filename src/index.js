import './styles.css';

import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();
// const tarea = new Todo('¡Hola Mundo!');
// console.log(tarea);

// todoList.nvoTodo(tarea);
// console.log(todoList);

// tarea.completado = true;

// crearTodoHtml(tarea);

/*
Ejemplos de almacenamiento

localStorage.setItem('mi-key', '¡Hola Mundo!');
sessionStorage.setItem('mi-key', '¡Hola Mundo!');

setTimeout(() => {
    localStorage.removeItem('mi-key'); 
}, 1500);
*/

// console.log(todoList.todos);

todoList.todos.forEach(todo => crearTodoHtml(todo));
// todoList.todos.forEach(crearTodoHtml);


// const newTodo = new Todo('Aprender JS');
// todoList.nvoTodo(newTodo);
// todoList.todos[0].imprimirClase();
// newTodo.imprimirClase();
console.log('todos', todoList.todos);

