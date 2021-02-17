// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix && matrix.length > 0) {
        let newArr = [];

        for (let i in matrix) {
            if (i % 2 == 0) {
                matrix[i].forEach((el) => newArr.push(el));
            } else {
                matrix[i].reverse().forEach((el) => newArr.push(el));
            }
        }

        return newArr;
    } else {
        return [];
    }
};
