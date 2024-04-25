function createChristmasTree(ornaments, height) {
    let newTree = "";
    let ornamentsIndex = 0;
    for (let newLevel = 1; newLevel <= height; newLevel++) {
        let newNewline = "";
        let newSpaces = " ".repeat(height - newLevel);

        for (let newJ = 0; newJ < newLevel; newJ++) {
            newNewline += " " + ornaments[ornamentsIndex % ornaments.length];
            ornamentsIndex++;
        }
        newTree += newSpaces + newNewline.trim() + "\n";
    }

    newTree += " ".repeat(height - 1);
    newTree += "|\n";

    return newTree;
}
