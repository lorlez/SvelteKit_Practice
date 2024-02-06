<script>
    import Star from "./Star.svelte";

    export let stars = 5;

    let hoverIndex;
    let reviewIndex;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="flex w-max items-center gap-1" on:mouseleave={() => hoverIndex = undefined}>
    {#each new Array(stars) as _, i}
        <Star on:click={() => reviewIndex = i} on:mouseenter={() => hoverIndex = i} fillColor={i <= hoverIndex || i <= reviewIndex ? "#ffff00" : "#ffffff"}/>
    {/each}
    {#if reviewIndex}
        <button on:click={() => {reviewIndex = undefined; hoverIndex = undefined;}}>
            X
        </button>
    {/if}
</div>