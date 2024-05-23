 function selectSleigh(distance, sleighs) {
    let maxW = 20;
    return sleighs.reduce((acc, s) => {
        if (s.consumption * distance > maxW) {
            maxW = s.consumption * distance;
            return acc;
        }

        return s.name;
    }, null);
}
