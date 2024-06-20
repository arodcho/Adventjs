export default function contarOvejas(ovejas) {
    return ovejas.filter(oveja => {
        const name = oveja.name.toLowerCase();

        const isColorRed = oveja.color === 'rojo';
        const hasAandN = name.includes('a') && name.includes('n');

        return isColorRed && hasAandN;
    });
}
