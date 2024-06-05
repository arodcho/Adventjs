function dryNumber(dry, numbers) {
    return [...Array(numbers)]
        .map((_, i) => i + 1)
        .filter(v => v.toString().includes(dry.toString()));
}