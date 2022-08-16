import {Todo} from '../classes';
import { todoList } from '../index';

// Referencias al HTML
const d              = document,
      divTodoList    = d.querySelector('.todo-list'),
      txtInput       = d.querySelector('.new-todo'),
      btnBorrar      = d.querySelector('.clear-completed'),
      ulFilter       = d.querySelector('.filters'),
      anchorFiltro   = d.querySelectorAll('.filtro');

export const crearTodoHtml = (todo) => {

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