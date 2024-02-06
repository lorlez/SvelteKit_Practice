<script>
    import Comment from "./Comment.svelte";

    let comments = [];
</script>

<div class="w-1/2 border border-black flex flex-col items-center">
    {#each comments as comment}
        <Comment on:commentReply={() => comment.answers = [...comment.answers, {userName: 'USER', text: 'TEST', answers: []}]} {comment}/>
    {/each}
    <button on:click={() => comments = [...comments, {userName: "USER", text: "TEST!", answers: []}]} class="border border-black bg-gray-400 px-2">
        Add a comment
    </button>
</div>