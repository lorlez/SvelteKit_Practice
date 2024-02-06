<script>
    import { createEventDispatcher } from "svelte";
    import Comment from "./Comment.svelte";

    const dispatch = createEventDispatcher();

    export let comment;
</script>

<div class="bg-gray-400 border border-black rounded-md p-4 w-full">
    <div class="font-bold">{comment.userName}</div>
    <div>{comment.text}</div>
    <div>
        <button on:click={() => dispatch("commentReply")} class="bg-white border border-black rounded-sm px-2">
            REPLY
        </button>
    </div>
    <div class="ml-6">
        {#each comment.answers as answer}
            <Comment on:commentReply={() => answer.answers = [...comment.answers, {userName: 'USER', text: 'TEST', answers: []}]} comment={answer}/>
        {/each}
    </div>
</div>