function adjustLights(lights) {
    function calculatePattern(lights, firstColor, secondColor) {
        let count = 0;
        let expectedColor = firstColor;

        for (const light of lights) {
            if (light !== expectedColor) {
                count++;
            }
            expectedColor = expectedColor === firstColor ? secondColor : firstColor;
        }
        return count;
    }

    const pattern1 = calculatePattern(lights, '🔴', '🟢');
    const pattern2 = calculatePattern(lights, '🟢', '🔴');

    return Math.min(pattern1, pattern2);
}
