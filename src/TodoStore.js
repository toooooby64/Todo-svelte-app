import { writable } from "svelte/store";

export const todos = writable([{
    id: 1,
    text: "Learn Svelte",
    done: false
}]);