<script>
    //TODO:
    //Winnig row color

    import Cell from "./Cell.svelte";
	import { onMount } from "svelte";
	import { winStrategy } from "../js/strategies";


    let grid = [["","",""],["","",""],["","",""]];

    let messages = {
        0: "YOUR TURN",
        1: "COMPUTER THINKING...",
        2: "YOU WIN!",
        3: "YOU LOSE :(",
        4: "IT'S A TIE!"
    }

    let messageColor = {
        0: "",
        1: "",
        2: "bg-green-500",
        3: "bg-red-500",
        4: "bg-yellow-500"
    }

    let statusId;

    const SIZE = 3;

    const init = () => {
        grid = [["","",""],["","",""],["","",""]];

        statusId = Math.floor(Math.random() * 2);

        if (statusId === 1) computerMove();
    }

    const checkStatus = (symbol) => {
        let symbolCount = 0;

        //Search rows
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid.length; j++) {
                symbolCount = grid[i][j] === symbol ? symbolCount + 1 : symbolCount;
                if (symbolCount === SIZE) return symbol === "X" ? 2 : (symbol === "O" ? 3 : undefined);
            }
            symbolCount = 0;
        }

        //Search columns
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid.length; j++) {
                symbolCount = grid[j][i] === symbol ? symbolCount + 1 : symbolCount;
                if (symbolCount === SIZE) return symbol === "X" ? 2 : (symbol === "O" ? 3 : undefined);
            }
            symbolCount = 0;
        }

        //Search diagonal 1
        for (let i = 0; i < grid.length; i++) {
            symbolCount = (grid[i][i] === symbol) ? symbolCount + 1 : symbolCount;
            if (symbolCount === SIZE) return symbol === "X" ? 2 : symbol === "O" ? 3 : undefined;           
        }
        symbolCount = 0;

        //Search diagonal 2
        for (let i = 0; i < grid.length; i++) {
            symbolCount = (grid[i][grid.length - 1 - i] === symbol) ? symbolCount + 1 : symbolCount;
            if (symbolCount === SIZE) return symbol === "X" ? 2 : symbol === "O" ? 3 : undefined;           
        }
        symbolCount = 0;

        //Check tie
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid.length; j++) {
                symbolCount = grid[i][j] !== "" ? symbolCount + 1 : symbolCount;
                if (symbolCount === Math.pow(SIZE,2)) return 4;
            }
        }

        return statusId === 0 ? 1 : statusId === 1 ? 0 : undefined;
    }

    const computerMove = () => {
        setTimeout(strategy,  2000);
    }

    const strategy = () => {
        const {cellRow, cellCol} = winStrategy(grid);
        
        grid[cellRow][cellCol] = "O";

        statusId = checkStatus("O");
    }

    const playerMove = () => {
        statusId = checkStatus("X");
        if(statusId === 1) computerMove();
    }    

    onMount(init);
</script>

<div class="w-96 flex flex-col gap-2 items-center">
    <div class={"border-2 border-black w-52 rounded-lg p-2 px-3 font-bold flex justify-center text-sm" + " " + messageColor[statusId]}>
        <span>{messages[statusId] || "..."}</span>
    </div>
    <div class="grid grid-cols-3 gap-2 p-2 w-1/2">
        {#each grid as row}
            {#each row as symbol}
                <Cell on:click={playerMove} bind:symbol bind:statusId/>
            {/each}
        {/each}
    </div>
    <button on:click={init} class="text-sm transition-colors duration-100 hover:bg-gray-200 border-2 font-bold rounded-lg p-2 border-black">RESTART</button>
</div>