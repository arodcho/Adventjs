function getIndexsForPalindrome(word) {
    let result = null;
    for (const i of Array.from({ length: word.length }).keys()) {
        for (const j of Array.from({ length: word.length }).keys()) {
            let swapped = [...word];
            let temp = word[i];
            swapped[i] = word[j];
            swapped[j] = temp;

            let left = swapped.slice
            (0, Math.floor(word.length / 2)).join("");
            let right = swapped.slice
            (Math.ceil(word.length / 2)).reverse().join("");

            result = [
                [
                    null,
                    [
                        [],
                        [i, j],
                    ][+((i + j) > 0)],
                ][+(left == right)],
                result,
            ][+!!result];
        }
    }
    return result;
}
