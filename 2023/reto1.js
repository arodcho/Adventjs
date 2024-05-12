function findFirstRepeated(gifts) {
    let repeated = [];

    for (let i = 0; i < gifts.length; i++) {
        if (repeated.indexOf(gifts[i]) === -1) {
            repeated.push(gifts[i]);
        } else {
            return gifts[i];
        }
    }

    return -1;
}

