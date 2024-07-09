export default function decodeNumber(symbols) {
    const symbolValues = {
        '.': 1,
        ',': 5,
        ':': 10,
        ';': 50,
        '!': 100,
    };

    return [...symbols].reduce((total, symbol, i) => {
        const value = symbolValues[symbol];
        const nextValue = symbolValues[symbols[i + 1]];
        total += (nextValue > value ? -value : value) || NaN;

        return total;
    }, 0);
}