function maxGifts(houses) {
    let includeCurrent = 0;
    let excludeCurrent = 0;
    let previousExclude;

    for (let house of houses) {
        previousExclude = Math.max(includeCurrent, excludeCurrent);

        includeCurrent = excludeCurrent + house;
        excludeCurrent = previousExclude;
    }

    return Math.max(includeCurrent, excludeCurrent);
}