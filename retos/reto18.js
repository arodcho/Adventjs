function drawClock(time) {
    const clock = [[], [], [], [], [], [], []];

    const blockPatterns = {
        fullBlock: ['*', '*', '*'],
        openBlock: ['*', ' ', '*'],
        startBlock: ['*', ' ', ' '],
        endBlock: [' ', ' ', '*'],
        spaces: [' ', ' ', ' '],
        middleBlock: [' ', '*', ' ']
    };

    const numbers = {
        0: [blockPatterns.fullBlock, blockPatterns.openBlock, blockPatterns.openBlock, blockPatterns.openBlock, blockPatterns.openBlock, blockPatterns.openBlock, blockPatterns.fullBlock],
        1: [blockPatterns.endBlock, blockPatterns.endBlock, blockPatterns.endBlock, blockPatterns.endBlock, blockPatterns.endBlock, blockPatterns.endBlock, blockPatterns.endBlock],
        2: [blockPatterns.fullBlock, blockPatterns.endBlock, blockPatterns.endBlock, blockPatterns.fullBlock, blockPatterns.startBlock, blockPatterns.startBlock, blockPatterns.fullBlock],
        3: [blockPatterns.fullBlock, blockPatterns.endBlock, blockPatterns.endBlock, blockPatterns.fullBlock, blockPatterns.endBlock, blockPatterns.endBlock, blockPatterns.fullBlock],
        4: [blockPatterns.openBlock, blockPatterns.openBlock, blockPatterns.openBlock, blockPatterns.fullBlock, blockPatterns.endBlock, blockPatterns.endBlock, blockPatterns.endBlock],
        5: [blockPatterns.fullBlock, blockPatterns.startBlock, blockPatterns.startBlock, blockPatterns.fullBlock, blockPatterns.endBlock, blockPatterns.endBlock, blockPatterns.fullBlock],
        6: [blockPatterns.fullBlock, blockPatterns.startBlock, blockPatterns.startBlock, blockPatterns.fullBlock, blockPatterns.openBlock, blockPatterns.openBlock, blockPatterns.fullBlock],
        7: [blockPatterns.fullBlock, blockPatterns.endBlock, blockPatterns.endBlock, blockPatterns.endBlock, blockPatterns.endBlock, blockPatterns.endBlock, blockPatterns.endBlock],
        8: [blockPatterns.fullBlock, blockPatterns.openBlock, blockPatterns.openBlock, blockPatterns.fullBlock, blockPatterns.openBlock, blockPatterns.openBlock, blockPatterns.fullBlock],
        9: [blockPatterns.fullBlock, blockPatterns.openBlock, blockPatterns.openBlock, blockPatterns.fullBlock, blockPatterns.endBlock, blockPatterns.endBlock, blockPatterns.fullBlock]
    };

    const colon = [blockPatterns.spaces, blockPatterns.spaces, blockPatterns.middleBlock, blockPatterns.spaces, blockPatterns.middleBlock, blockPatterns.spaces, blockPatterns.spaces];

    const firstDigit = numbers[time[0]];
    const secondDigit = numbers[time[1]];
    const thirdDigit = numbers[time[3]];
    const fourthDigit = numbers[time[4]];

    let i = 0;

    for (const item of clock) {
        item.push(
            ...firstDigit[i],
            ' ',
            ...secondDigit[i],
            ...colon[i],
            ...thirdDigit[i],
            ' ',
            ...fourthDigit[i]
        );

        i++;
    }

    return clock;
}
