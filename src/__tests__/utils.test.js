// Your tests here
// Your code here
// Should check if the word is spelled the same forwards and backwards and return a boolean

import { isPalindrome } from '../utils.js';

describe('isPalindrome', () => {
	it('returns true when the word is the same forwards and backwards.', () => {
		const word = 'racecar';
		expect(isPalindrome(word)).toBe(true);
	});
	it('returns false when the word is different forwards and backwards.', () => {
		const word = 'baby';
		expect(isPalindrome(word)).toBe(false);
	});
	it('returns true for a combination of uppercase and lowercase letters.', () => {
		const word = 'RAcEcaR';
		expect(isPalindrome(word)).toBe(true);
	});
	it('returns false for an empty string', () => {
		const word = '';
		expect(isPalindrome(word)).toBe(false);
	});
	it('throws an error if the input has any non-alphabetic characters', () => {
		const word = 'rac3car';
		expect(() => isPalindrome(word)).toThrow();
	});
	it("throws an error if the input isn't a string", () => {
		const word = 23;
		expect(() => isPalindrome(word)).toThrow();
	});
});

