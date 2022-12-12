const list = ["b", "q", 4, 5, 6];

const reverseArray = (array) => {
    const newArray = [];
    array.map((item) => newArray.unshift(item));
    return newArray;
};

console.log(reverseArray(list));