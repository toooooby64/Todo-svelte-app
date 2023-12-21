<script>
  import {todos} from '../TodoStore.js';
    export let todo;
    const deleteTodo = () => {
      $todos = $todos.filter(t => t.id !== todo.id);
    }
</script>


<div>
  <li class = "todo">
    {todo.text}
    <button on:click={deleteTodo}>X</button>
  </li>
  
</div>

<style>
  li {
    list-style: none;
  }
  .todo{
    display: flex;
    justify-content: space-between; 
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #ccc;
  }
</style>
