const list = [2, -9, 12, 5, -22, -22,27, 4, 0, -15];
const sortList = (array) => {
    const newArray = [];
    while (array.length > 0) {
        const minValue = array.reduce((min, item) => (min < item ? min : item), Number.MAX_SAFE_INTEGER);
        newArray.push(minValue);
        array = array.filter((item) => item !== minValue);
    }
    return newArray
};
console.log(sortList(list));

