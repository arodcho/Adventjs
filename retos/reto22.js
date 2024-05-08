function compile(code) {
    let counter = 0;
    let stack = -1;

    for (let i = 0; i < code.length; i++) {
        const instruction = code[i];

        switch (instruction) {
            case '+':
                counter++;
                break;
            case '-':
                counter--;
                break;
            case '*':
                counter *= 2;
                break;
            case '%':
                stack = i;
                break;
            case '<':
                if (stack !== -1) {
                    i = stack;
                    stack = -1;
                }
                break;
            case '¿':
                if (counter <= 0) {
                    i = code.indexOf('?', i);
                }
                break;
        }
    }

    return counter;
}