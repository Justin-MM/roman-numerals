export const convertToRomanNumeral = (num) => {
    if (isNaN(num) || num < 1 || num > 3999)
        return "invalid input";
    const digits = String(+num).split("");
    const key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
        "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
        "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    let roman = "";
    let i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

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

export const recursiveConvertToRoman = (num) => {
    if (isNaN(num) || num < 1 || num > 3999)
        return "invalid input";

    return recursiveConvertToRomanHelper(num);
};

const recursiveConvertToRomanHelper = (num) => {
    if (num === 0) {
        return '';
    }
    for (var i = 0; i < romanMatrix.length; i++) {
        if (num >= romanMatrix[i][0]) {
            return romanMatrix[i][1] + recursiveConvertToRomanHelper(num - romanMatrix[i][0]);
        }
    }
};

