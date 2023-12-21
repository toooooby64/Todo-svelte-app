<script>
  import { todos } from "../TodoStore.js";
  let todoInput = "";
  let errorText = "Please enter a valid to-do item";
  let showErrorMessage = false;
  const addTodo = () => {
    if (isEmptyInput(todoInput)) {
      return;
    }
    let newTodo = {
      id: Math.random(),
      text: todoInput,
      done: false,
    };
    $todos = [newTodo, ...$todos];
    todoInput = "";
    showErrorMessage = false;
  };

  const isEmptyInput = (todoInput) => {
    if (todoInput === "") {
      showErrorMessage = true;
      return true;
    }
    return false;
  };
</script>

<div>
  <form on:submit|preventDefault={addTodo}>
    <input type="text" bind:value={todoInput} placeholder="Enter To-do" />
    <button type="submit">Add To-do</button>
  </form>
  {#if showErrorMessage}
    <p class = "error-message">{errorText}</p>
  {/if}
</div>

<style>
  div{
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-color: white;
    border-style: solid white;
  }
  form {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    }
  input {
    width: 100%;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    margin-right: 1rem;
  }
  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    background-color: #ccc;
    color: white;
    cursor: pointer;
  }
  .error-message {
    color: red;
    padding: 0%;
    margin: 0;
  }
</style>
