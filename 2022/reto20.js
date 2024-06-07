function howManyReindeers(reindeerTypes, gifts) {
    reindeerTypes.sort((a, b) => b.weightCapacity - a.weightCapacity);

    return gifts.map(({ country, weight }) => {
        const remainingRnds = reindeerTypes.filter(x => x.weightCapacity < weight);
        let total = remainingRnds.reduce(
            (acc, curr) => (acc += curr.weightCapacity),
            0
        );

        const reindeers = remainingRnds.map(({ type, weightCapacity }) => {
            const num = Math.floor(weight / total);
            total -= weightCapacity;
            weight -= num * weightCapacity;
            return { type, num };
        });

        return { country, reindeers };
    });
}
