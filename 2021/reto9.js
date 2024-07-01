export default function groupBy(collection, it) {
    const group = {};
    const isItFunction = typeof it === 'function';

    for (const value of collection) {
        const key = isItFunction ? it(value) : value[it];
        if (!group[key]) {
            group[key] = [];
        }
        group[key].push(value);
    }

    return group;
}
