function sortToys(toys, positions) {
    const min = Math.min(...positions);

    return toys.reduce((acc, toy, i) => {
        acc[positions[i] - min] = toy;
        return acc;
    }, []);
}