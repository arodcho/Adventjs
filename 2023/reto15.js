function autonomousDrive(store, movements) {
    let row = store.findIndex(line => line.includes('!'));
    let col = store[row].indexOf('!');

    function placeRobot(robot) {
        const line = store[row];
        store[row] = line.slice(0, col) + robot + line.slice(col + 1);
    }

    placeRobot('.');

    const maxRow = store.length;
    const maxCol = store[0].length;

    for (const move of movements) {
        const rowMove = row + (move === 'D' ? 1 : 0) - (move === 'U' ? 1 : 0);
        const colMove = col + (move === 'R' ? 1 : 0) - (move === 'L' ? 1 : 0);

        const rowValues = [row, row, rowMove];
        const colValues = [col, col, colMove];

        const nextRow = rowValues[(rowMove >= 0) + (rowMove < maxRow)];
        const nextCol = colValues[(colMove >= 0) + (colMove < maxCol)];

        const pos = store[nextRow][nextCol];
        if (pos !== '*') {
            col = nextCol;
            row = nextRow;
        }
    }

    placeRobot('!');

    return store;
}
