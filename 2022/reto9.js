 function countTime(leds) {
    const newLeds = leds.join('').split('1');
    newLeds[0] += newLeds.pop();

    return Math.max(...newLeds.map(led => led.length)) * 7;
}

