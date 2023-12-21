<script>
  import TodoForm from "./TodoForm.svelte";
  import TodoList from "./TodoList.svelte";
  import { todos } from "../TodoStore";
</script>

<div>
  <TodoForm />
  <TodoList  {$todos} />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
    border-color: white;
    border-style: solid white;
    height: 500px;
    width: 500px;
    margin: 0 auto;
  }
</style>