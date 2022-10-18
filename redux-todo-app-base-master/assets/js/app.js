(function () {

  // your code
  document.addEventListener("DOMContentLoaded", (event) => {
    initApp();
  });

  function initApp() {

  }

  function renderTodo(todo) {
    return `
    <li data-id="${todo.id}" class="${todo.completed}">
      <div class="view">
        <input class="toggle" type="checkbox" ${todo.completed ? 'checked' : ''}
        <label>${todo.text}</label>
        <button class="destroy"></button>
      </div>
      </li>
    `;
  }

})();