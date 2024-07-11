import {convertToRomanNumeral} from './../src/roman_numerals.js';

describe('Number to Roman Numerals Conversion', () => {

    test('should return correct Roman numerals given a number', async () => {
        expect(convertToRomanNumeral(10)).toEqual("X");
        expect(convertToRomanNumeral(66)).toEqual("LXVI");
        expect(convertToRomanNumeral(90)).toEqual("XC");
        expect(convertToRomanNumeral(99)).toEqual("XCIX");
        expect(convertToRomanNumeral(1)).toEqual("I");
        expect(convertToRomanNumeral(2)).toEqual("II");
        expect(convertToRomanNumeral(3)).toEqual("III");
        expect(convertToRomanNumeral(4)).toEqual("IV");
        expect(convertToRomanNumeral(5)).toEqual("V");
        expect(convertToRomanNumeral(6)).toEqual("VI");
        expect(convertToRomanNumeral(7)).toEqual("VII");
        expect(convertToRomanNumeral(8)).toEqual("VIII");
        expect(convertToRomanNumeral(9)).toEqual("IX");
        expect(convertToRomanNumeral(50)).toEqual("L");
        expect(convertToRomanNumeral(100)).toEqual("C");
        expect(convertToRomanNumeral(500)).toEqual("D");
        expect(convertToRomanNumeral(1000)).toEqual("M");
        expect(convertToRomanNumeral(0)).toEqual("invalid input");
        expect(convertToRomanNumeral(4000)).toEqual("invalid input");
        expect(convertToRomanNumeral("abcds")).toEqual("invalid input");
        expect(convertToRomanNumeral("8")).toEqual("VIII");
        expect(convertToRomanNumeral("3999")).toEqual("MMMCMXCIX");
    });
});