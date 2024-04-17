function decode(message) {
    let stack = [];
    let result = '';
    let i = 0;
    while (i < message.length) {
        if (message[i] === '(') {
            stack.push(result);     
            result = '';
        } else if (message[i] === ')') {
            result = stack.pop() + result.split('').reverse().join('');         
        } else {
            result += message[i]; 
        }
        i++;
    }
    return result;
}
