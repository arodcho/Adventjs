function wrapping(gifts) {
    return gifts.map(g => {
        const wrapper = '*'.repeat(g.length + 2);
        return `${wrapper}\n*${g}*\n${wrapper}`;
    });
}