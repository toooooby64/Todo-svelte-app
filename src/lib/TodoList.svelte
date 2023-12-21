<script>
    import { todos } from "../TodoStore";
  import Todo from "./Todo.svelte";
</script>


<ul>
    {#each $todos as todo (todo.id)}
        <Todo {todo}/>
    {/each}
</ul>

<style>
    ul {
        width: 50%;
        padding: 0;
    }  
</style>
