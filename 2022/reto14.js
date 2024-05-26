function getOptimalPath(path) {
    return path.reduceRight((previousRow, currentRow) => {
        return currentRow.map((value, index) => {
            const minValue = Math.min(previousRow[index], 
            previousRow[index + 1]);
            return value + minValue;
        });
    })[0];
}
