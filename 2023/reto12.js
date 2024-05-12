function checkIsValidCopy(original, copy) {
    if (original.length !== copy.length) {
        return false;
    }

    const symbolSequence = '#+:. ';
    let isValidCopy = true;

    for (let i = 0; i < original.length; i++) {
        const originalCharacter = original[i];
        const copyCharacter = copy[i];

        const symbolIndex = symbolSequence.indexOf(originalCharacter.toLowerCase());
        let allowedSymbols = symbolIndex !== -1 ? symbolSequence.slice(symbolIndex) : symbolSequence;

        const validCharacters = originalCharacter + originalCharacter.toLowerCase() + allowedSymbols;
        const isCharacterValid = validCharacters.includes(copyCharacter);

        const isSpaceCheckValid = originalCharacter === ' ' ? copyCharacter === ' ' : true;

        isValidCopy = isValidCopy && isCharacterValid && isSpaceCheckValid;
    }

    return isValidCopy;
}
