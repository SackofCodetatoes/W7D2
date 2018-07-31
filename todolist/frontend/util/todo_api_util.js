export const fetchTodos = () => (
  $.ajax({
    method: 'GET',
    url: 'api/todos',
    type: 'json'
  })
);

export const createTodo = todo => (
  $.ajax({
    method: 'POST',
    url: 'api/todos',
    type: 'json',
    data: todo
  })
);
