function drawGift(size, symbol) {
    const maxIterations = size * 2;
    const maxLengthPerLine = maxIterations - 1;
    const maxLinesAsResult = maxIterations - 1;
    const linesArray = [];

    for (let i = 1; i < maxIterations; i++) {
        let currentLine = '';

        if (i <= size) {
            currentLine += ' '.repeat(size - i);

            if (i === 1) {
                currentLine += '#'.repeat(size - 1);
            } else if (i === size) {
                currentLine += '#'.repeat(size);
                currentLine += symbol.repeat(size - 2);
            } else if (i >= 2 && i < size) {
                currentLine += '#';
                let symbolInSeriesCounter = 0;
                while (currentLine.length < maxLengthPerLine - 1) {
                    currentLine += symbol;
                    symbolInSeriesCounter++;
                    if (symbolInSeriesCounter === size - 2) {
                        currentLine += '#';
                        symbolInSeriesCounter = 0;
                    }
                }
            }
            currentLine += '#\n';
        } else {
            const linesLeftBeforeFinish = maxLinesAsResult - linesArray.length;
            currentLine = linesArray[linesLeftBeforeFinish - 1].trimStart();
        }
        linesArray.push(currentLine);
    }
    return linesArray.join('');
}