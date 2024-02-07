export const winStrategy = (grid) => {
	console.log('TRYING WIN MOVE');
	let availableCells = [];

	//Search rows
	grid.forEach((row, i) => {
		if (
			row.includes('') &&
			row.reduce((count, current) => (current === 'O' ? count + 1 : count), 0) === 2
		) {
			availableCells = [...availableCells, { cellRow: i, cellCol: row.findIndex((c) => c === '') }];
		}
	});

	//Search columns
	for (let cell = 0; cell < grid.length; cell++) {
		let emptyCell;
		let fullCellCount = 0;

		grid.forEach((row, j) => {
			if (row[cell] === '') emptyCell = { cellRow: j, cellCol: cell };
			if (row[cell] === 'O') fullCellCount += 1;
		});

		if (emptyCell && fullCellCount === 2) availableCells = [...availableCells, emptyCell];
	}

	//Search diagonal 1
	let emptyCell;
	let fullCellCount = 0;

	for (let i = 0; i < grid.length; i++) {
		const cell = grid[i][i];
		if (cell === '') emptyCell = { cellRow: i, cellCol: i };
		if (cell === 'O') fullCellCount += 1;
	}

	if (emptyCell && fullCellCount === 2) availableCells = [...availableCells, emptyCell];

	emptyCell = undefined;
	fullCellCount = 0;

	//Search diagonal 2
	for (let i = 0; i < grid.length; i++) {
		const cell = grid[i][grid.length - 1 - i];
		if (cell === '') emptyCell = { cellRow: i, cellCol: i };
		if (cell === 'O') fullCellCount += 1;
	}

	if (emptyCell && fullCellCount === 2) availableCells = [...availableCells, emptyCell];

	if (availableCells.length > 0)
		return availableCells[Math.floor(Math.random() * availableCells.length)];

	return defend(grid);
};

const defend = (grid) => {
	console.log('TRYING DEFEND MOVE');

	let availableCells = [];

	//Search rows
	grid.forEach((row, i) => {
		if (
			row.includes('') &&
			row.reduce((count, current) => (current === 'X' ? count + 1 : count), 0) === 2
		) {
			availableCells = [...availableCells, { cellRow: i, cellCol: row.findIndex((c) => c === '') }];
		}
	});

	//Search columns
	for (let cell = 0; cell < grid.length; cell++) {
		let emptyCell;
		let fullCellCount = 0;

		grid.forEach((row, j) => {
			if (row[cell] === '') emptyCell = { cellRow: j, cellCol: cell };
			if (row[cell] === 'X') fullCellCount += 1;
		});

		if (emptyCell && fullCellCount === 2) availableCells = [...availableCells, emptyCell];
	}

	//Search diagonal 1
	let emptyCell;
	let fullCellCount = 0;

	for (let i = 0; i < grid.length; i++) {
		const cell = grid[i][i];
		if (cell === '') emptyCell = { cellRow: i, cellCol: i };
		if (cell === 'X') fullCellCount += 1;
	}

	if (emptyCell && fullCellCount === 2) availableCells = [...availableCells, emptyCell];

	emptyCell = undefined;
	fullCellCount = 0;

	//Search diagonal 2
	for (let i = 0; i < grid.length; i++) {
		const cell = grid[i][grid.length - 1 - i];
		if (cell === '') emptyCell = { cellRow: i, cellCol: i };
		if (cell === 'X') fullCellCount += 1;
	}

	if (emptyCell && fullCellCount === 2) availableCells = [...availableCells, emptyCell];

	console.log(availableCells);

	if (availableCells.length > 0)
		return availableCells[Math.floor(Math.random() * availableCells.length)];

	return random(grid);
};

const random = (grid) => {
	console.log('RANDOM MOVE');

	let cellRow;
	let cellCol;

	do {
		cellRow = Math.floor(Math.random() * 3);
		cellCol = Math.floor(Math.random() * 3);
	} while (grid[cellRow][cellCol] !== '');

	return { cellRow, cellCol };
};
