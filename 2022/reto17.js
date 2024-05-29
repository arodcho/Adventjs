function carryGifts(gifts, maxWeight) {
    const bags = [];
    let currentBag = '';

    for (const gift of gifts) {
        const giftLength = gift.replace(/\s/g, '').length;

        if (currentBag.length + giftLength <= maxWeight) {
            currentBag += ` ${gift}`;
        } else {
            bags.push(currentBag.trim());
            currentBag = gift;
        }
    }

    bags.push(currentBag.trim());

    return bags;
}