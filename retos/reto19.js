function revealSabotage(store) {
    for (let i = 0; i < store.length; i++) {
        const row = store[i];
        for (let j = 0; j < row.length; j++) {
            const col = row[j];
            if (col === '*') continue;

            const nextRow = store[i + 1];
            const prevRow = store[i - 1];

            const adjacentCells = [
                prevRow?.[j - 1],
                prevRow?.[j],
                prevRow?.[j + 1],
                row[j - 1],
                row[j + 1],
                nextRow?.[j - 1],
                nextRow?.[j],
                nextRow?.[j + 1],
            ];

            const count = adjacentCells.reduce(
                (acc, curr) => acc + +(curr === '*'),
                0
            );

            if (count !== 0) {
                row[j] = `${count}`;
            }
        }
    }

    return store;
}