<script>
	let milliseconds = 0;

	let interval;

	const startStopWatch = () => {
		interval = setInterval(function () {
			milliseconds += 10;
		}, 10);
	};

	const stopStopWatch = () => {
		clearInterval(interval);
		interval = undefined;
	};
</script>

<div class="flex flex-col gap-2 items-center">
	<div class="w-max">
		<div class="flex">
			<div class="border border-black text-5xl px-1 rounded-md">0</div>
			<div>0</div>
		</div>
	</div>
	<div class="flex gap-6 justify-center">
		<button
			disabled={interval}
			on:click={startStopWatch}
			class:bg-green-200={interval}
			class="border border-black rounded-sm bg-green-600 text-white px-2"
		>
			START
		</button>
		<button
			on:click={stopStopWatch}
			class="border border-black rounded-sm bg-red-600 text-white px-2"
		>
			STOP
		</button>
		<button
			on:click={() => (milliseconds = 0)}
			class="border border-black rounded-sm bg-yellow-600 text-white px-2"
		>
			RESET
		</button>
	</div>
</div>
