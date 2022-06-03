function analyze_array(array) {
    if (!array.length)
        return {};

    let data;
    data = {};
    data.average = Math.round(array.reduce((total, current) => total + current, 0) / array.length);
    data.min = Math.min(...array);
    data.max = Math.max(...array);
    data.length = array.length;
    return data;
}

module.exports = analyze_array;