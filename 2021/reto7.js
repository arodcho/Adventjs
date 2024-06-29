export default function contains(store, product) {
    if (typeof store === 'object') {
        return Object.values(store).some(value => contains(value, product));
    }

    return store === product;
}
