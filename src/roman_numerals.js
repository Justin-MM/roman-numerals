// recursive approach
const romanMatrix = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
];

export const convertToRomanNumeral = (num) => {
    if (isNaN(num) || num < 1 || num > 3999)
        return "invalid input";

    const roman = romanMatrix.reduce((currentValue, element) => {
        let newVal = currentValue;
        while (num >= element[0]) {
            newVal = newVal.concat(element[1]);
            num -= element[0];
        }
        return newVal;
    }, ""); 

    return roman;
}

export const recursiveConvertToRoman = (num) => {
    if (isNaN(num) || num < 1 || num > 3999)
        return "invalid input";

    return recursiveConvertToRomanHelper(num);
};

const recursiveConvertToRomanHelper = (num) => {
    if (num === 0) {
        return '';
    }
    for (let i = 0; i < romanMatrix.length; i++) {
        if (num >= romanMatrix[i][0]) {
            return romanMatrix[i][1] + recursiveConvertToRomanHelper(num - romanMatrix[i][0]);
        }
    }
};

