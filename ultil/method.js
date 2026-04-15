

//  arrNumber = [1,6,9,7,8]
export let findIndexMax = (arrNumber) => {
let indexMax = 0;
let max = arrNumber[indexMax];
for (let index in arrNumber) {
    if(arrNumber[index] > max) {
        max = arrNumber[index];
        indexMax = index;
    }
}
return indexMax;

}

export let findIndexMin = (arrNumber) => {
let indexMin = 0;
let min = arrNumber[indexMin];
for (let index in arrNumber) {
    if(arrNumber[index] < min) {
        min = arrNumber[index];
        indexMin = index;
    }
}
return indexMin;

}

// export let findIndexGioi = (arrNumber) => {
//     let indexAVG = 0;
// let gioi = arrNumber[indexAVG];
// for (let index in arrNumber) {
//     if (arrNumber[index] > 8) {
//         gioi = arrNumber[index];
//         indexAVG = index;
//     }
// }
// return indexAVG;
// }

export let countExcellent = (arrNumber, scoreEcellent = 8) => {
    let count = 0;
    let indexGioi = 0; 
    for (let index in arrNumber) {
        if(arrNumber[index] > scoreEcellent) {
         
            count++
        }
    }

    return count;
}

export let getArrIndexExcellent = (arrNumber, scoreEcellent = 8) => {
    let arrIndex = [];//Index của các sinh viên giỏi
    for(let index in arrNumber){
        if(arrNumber[index] >= scoreEcellent){
            arrIndex.push(index); //Sv nào giỏi sẽ đưa index sinh viên đó vào kết quả
        }
    }
    return arrIndex;
}

export let getArrIndexAverage = (arrNumber, scoreAverage = 5) => {
    let arrIndex = [];
    for (let index in arrNumber) {
        if(arrNumber[index] > scoreAverage){
            arrIndex.push(index);
        }
    }
    return arrIndex;
}