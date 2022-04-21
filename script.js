'use strict';

//функция,принимает число и выводит таблицу умножения в виде многомерного массива

function createMatrix(number) {
    const result = [];

    for (let k = 1; k <= number; k++) {
        let array = [];

        for (let i = 1; i <= number; i++) {
            array.push(i * k);
        }

        result.push(array);
    }

    return result;
}



//функция, которая принимает 2 матрицы и перемножает их


function multiplicationMatrix(matrixFirst, matrixSecond) {

    return matrixFirst.reduce(function (accum, elem, index) {

        let secondMatrixLength = matrixSecond[index].length;
        const array = [];


        for (let s = 0; s < secondMatrixLength; s++) {
            const sum = [];

            for (let i = 0; i < elem.length; i++) {
                sum.push(elem[i] * matrixSecond[i][s]);
            }

            let count = 0;

            for (let j = 0; j < sum.length; j++) {
                count += sum[j];
            }

            array.push(count);

        }

        accum.push(array);

        return accum;

    }, []);

}






