function getMaxGifts(giftsCities, maxGifts, maxCities) {
    return giftsCities
        .sort((a, b) => b - a)
        .reduce((acc, gift) => {
            const total = acc + gift;
            if (maxCities === 0 || total > maxGifts || total === maxGifts - 1) {
                return acc;
            }

            maxCities--;
            return total;
        }, 0);
}
