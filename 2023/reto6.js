function maxDistance(movements) {
    let distance = 0;
    let wildcards = 0;

    for (const sign of movements) {
        if (sign === ">") distance++;
        if (sign === "<") distance--;
        if (sign === "*") wildcards++;
    }
    
    return Math.abs(distance) + wildcards;
}
