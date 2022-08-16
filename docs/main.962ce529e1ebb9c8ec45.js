/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "todoList", function() { return /* binding */ todoList; });

// EXTERNAL MODULE: ./src/styles.css
var styles = __webpack_require__(0);

// CONCATENATED MODULE: ./src/classes/todo.class.js
class Todo {

    static fromJson({id, tarea, completado, creado}) {

        const tempTodo = new Todo(tarea);

        tempTodo.id           = id;
        tempTodo.completado   = completado;
        tempTodo.creado       = creado;

        return tempTodo;

    }

    constructor(tarea) {
        
        this.tarea            = tarea;
        this.id               = new Date().getTime();
        this.completado       = false;
        this.creado           = new Date();
        
    }

    imprimirClase() {
        console.log(`${this.tarea} - ${this.id}`);
    }
}
// CONCATENATED MODULE: ./src/classes/todo-list.class.js


class todo_list_class_TodoList{

    constructor(){
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nvoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado(id){
        for(const todo of this.todos){
            console.log(id, todo.id);
            if(todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletado(){
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage(){
        this.todos = (localStorage.getItem('todo'))
                        ? JSON.parse(localStorage.getItem('todo'))
                        : [];
        /*
        if(localStorage.getItem('todo')){
            this.todos = JSON.parse(localStorage.getItem('todo'));
            console.log('cargar local: ', this.todos);
            console.log(typeof this.todos);
            
        } else {
            this.todos = [];
        }
        */

        // this.todos = this.todos.map(obj => Todo.fromJson(obj));
        this.todos = this.todos.map(Todo.fromJson);
    }
}
// CONCATENATED MODULE: ./src/classes/index.js




// CONCATENATED MODULE: ./src/js/componentes.js



// Referencias al HTML
const d              = document,
      divTodoList    = d.querySelector('.todo-list'),
      txtInput       = d.querySelector('.new-todo'),
      btnBorrar      = d.querySelector('.clear-completed'),
      ulFilter       = d.querySelector('.filters'),
      anchorFiltro   = d.querySelectorAll('.filtro');

const crearTodoHtml = (todo) => {

    const htmlTodo = 
    `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC Template">
    </li>
    `;

    const div = d.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}


// Eventos
txtInput.addEventListener('keyup', (event) => {
    if(event.keyCode === 13 && txtInput.value.length > 0){

        console.log(txtInput.value);
        const nvoTodo = new Todo(txtInput.value);
        todoList.nvoTodo(nvoTodo);

        console.log(todoList);

        crearTodoHtml(nvoTodo); 
        txtInput.value = '';
        
    }
});

divTodoList.addEventListener('click', (event) => {
    // console.log('click');
    // console.log(event.target.localName);
    
    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');
    console.log(todoElemento);
    console.log(todoId);
    
    if(nombreElemento.includes('input')){
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    } else if(nombreElemento.includes('button')){
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }

    console.log(todoList);
    
    
})

btnBorrar.addEventListener('click', () => {
    todoList.eliminarCompletado();
    for(let i = divTodoList.children.length - 1; i>=0; i-- ){
        const elemento = divTodoList.children[i];
        // console.log(elemento);
        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
        
    }

})

ulFilter.addEventListener('click', (event) => {
    console.log(event.target.text);

    const filtro = event.target.text;
    if(!filtro) {
        return;
    };

    anchorFiltro.forEach(elem => elem.classList.remove('selected'));
    // console.log(event.target);
    event.target.classList.add('selected');
    

    for(const elemento of divTodoList.children) {
        // console.log(elemento);
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch(filtro) {
            case 'Pendiente':
                if(completado) {
                    elemento.classList.add('hidden');
                }
            break;
            
            case 'Completado':
                if(!completado) {
                    elemento.classList.add('hidden');
                }
            break;
        }
    }
    
})
// CONCATENATED MODULE: ./src/index.js






const todoList = new todo_list_class_TodoList();
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



/***/ })
/******/ ]);