function organizeGifts(gifts) {
    const giftCounts = gifts.match(/\d+/g);
    const giftNames = gifts.match(/[^0-9]/g);

    let response = "";
    let index = 0;

    for (let count of giftCounts) {
        const name = giftNames[index];
        let formattedGifts = "";

        count = +count;

        formattedGifts += `[${name}]`.repeat(count / 50);
        count %= 50;

        formattedGifts += `{${name}}`.repeat(count / 10);
        count %= 10;

        formattedGifts += `(${name.repeat(count)})`.repeat(+!!count);

        response += formattedGifts;
        index++;
    }

    return response;
}