function capitalize(string) {
    let index;

    index = first_instance_of_alpha(string);
    if (index === null)
        return string;
    return string.slice(0, index).concat(string[index].toUpperCase()).concat(string.slice(index + 1, string.length));
}

function first_instance_of_alpha(str) {
    let reg;

    reg = /[a-z]/i;
    for (let i = 0; i < str.length; i++)
        if (reg.test(str[i]))
            return i;
    return null;
}

module.exports = capitalize;