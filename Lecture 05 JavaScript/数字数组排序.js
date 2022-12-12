const list = [2, -9, 12, 5, -22, 27, 4, 0, -15];
const sortList = (array) => {
    const newArray = [];
    while (array.length > 0) {
        newArray.push(Math.min(...array));
        array = array.filter((item) => item !== Math.min(...array));
    }
    return newArray;
};
console.log(sortList(list));
