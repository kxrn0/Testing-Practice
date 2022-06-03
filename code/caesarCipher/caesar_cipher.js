function caesar_cipher(message, key, encrypt) {
    if (key <= 0 || key > 25)
        throw new Error("Key out of range!");
    //...
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let encoded;

    encoded = '';
    for (let char of message) {
        let index, uppercase;

        index = letters.findIndex(letter => {
            if (letter.toLowerCase() === char.toLowerCase()) {
                if (letter != char)
                    uppercase = true;
                return true;
            }
        });
        if (index == -1)
            encoded += char;
        else {
            if (encrypt)
                index = (index + key) % 26;
            else {
                index -= key;
                if (index < 0)
                    index += letters.length;
            }
            encoded += uppercase ? letters[index].toUpperCase() : letters[index];
        }
    }

    return encoded;
}

module.exports = caesar_cipher;