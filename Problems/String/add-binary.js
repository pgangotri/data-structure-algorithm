/**
 * Add two binary string
 * @param {string} a 
 * @param {string} b 
 * @returns 
 */
const addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let res = '';
    while (i >= 0 && j >= 0) {    // '1010', '1011' => 10101
        const ai = a[i];
        const bj = b[j];
        if (ai === bj) { 
            res = carry ? '1' + res : '0' + res;
            carry = ai === '0' ? 0 : 1
        } else {
            if (carry) {
                res = '0' + res;
                carry = 1;
            } else {
                res = '1' + res;
            }
        }
        console.log('res is...', i, j, res, carry)

        i--;
        j--
    }
    while (i >= 0) {
        const ai = a[i];
        if (carry) {
            if (ai === '1') {
                res = '0' + res;
                carry = 1;
            }  else {
                res = '1' + res;
                carry = 0;
            }
        } else {
            res = ai + res;
        }
        i--;
    }
    while (j >= 0) {
        const bi = b[j];
        if (carry) {
            if (bi === '1') {
                res = '0' + res;
                carry = 1;
            }  else {
                res = '1' + res;
                carry = 0;
            }
        } else {
            res = bi + res;
        }
        j--;
    }
    res = carry ? '1' + res : res;
    return res;
};

console.log('Add binary res:', addBinary('1010', '1011')) // res: 1101