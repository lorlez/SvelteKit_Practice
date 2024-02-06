<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    export let symbol = "";
    export let statusId;

    const handleClick = () => {
        symbol = "X";
        dispatch("click");
    }

    $: disabled = symbol !== "" || statusId !== 0;
</script>

<button {disabled} on:click={handleClick} class="transition-colors duration-100 flex items-center justify-center border-2 bg-gray-300 border-black rounded-sm aspect-square" class:hover:bg-gray-500={!disabled}>
    <span class="text-3xl font-bold">{symbol}</span>
</button>