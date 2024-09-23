module.exports = function reverse (n) {
    let str = n.toString().replace('-', '');
    return result = [...str]
        .reverse()
        .join('');
}
