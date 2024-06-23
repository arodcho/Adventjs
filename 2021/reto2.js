export default function listGifts(letter) {
    return letter.split(' ').reduce((acc, gift) => {
        if (gift && !gift.startsWith('_')) acc[gift] = acc[gift] + 1 || 1;
        return acc;
    }, {});
}

