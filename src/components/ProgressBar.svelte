<script>
    let progress = 0;

    let progressInterval;

    const startProgress = () => {
        progressInterval = setInterval(function () { progress = Math.min(100, progress + 10)}, 1000);
    }

    const stopProgress = () => {
        clearInterval(progressInterval);
        progressInterval = undefined;
    }
</script>

<div class="flex flex-col gap-2">
    <div class="w-full rounded-full border border-black">
        <div style="width: {progress}%" class="bg-blue-500 h-4 rounded-full transition-all duration-300"></div>
    </div>
    <div class="flex gap-6 justify-center">
        <button disabled={progressInterval} on:click={startProgress} class="border border-black rounded-sm bg-green-600 text-white px-2">
            START
        </button>
        <button on:click={stopProgress} class="border border-black rounded-sm bg-red-600 text-white px-2">
            STOP
        </button>
        <button on:click={() => progress = 0} class="border border-black rounded-sm bg-yellow-600 text-white px-2">
            RESET
        </button>
    </div>
</div>