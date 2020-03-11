module.exports = function check(str, bracketsConfig) {
    let stack = [];

    let brackets = {};
    bracketsConfig.forEach(element => {
        brackets[element[0]] = element[1];
    });
    for (let i = 0; i <= str.length - 1; i++) {
        const bracket = str[i];
        if (brackets[bracket] && brackets[bracket] !== bracket) {
            stack.push(bracket);
        } else if (brackets[bracket] && brackets[bracket] === bracket) {
            const prev = stack.pop();
            if (prev !== bracket) {
                if (prev) stack.push(prev);
                stack.push(bracket);
            }
        } else {
            const prev = stack.pop();
            if (brackets[prev] !== bracket) return false;
        }
    };
    
    return stack.length === 0;
};
