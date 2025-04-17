export function isPalindrome(word) {
    if (word === '') {
        return false;
    }
    if (typeof word !== 'string' || !/^[A-Za-z]+$/.test(word)) {
        throw new Error('Input must be a string containing only alphabetic characters.');
    }
    word = word.toLowerCase()
    return word === word.split('').reverse().join('')
}