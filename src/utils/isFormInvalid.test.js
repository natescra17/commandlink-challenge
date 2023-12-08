/* eslint-disable jest/valid-expect */
import { isFormInvalid } from './isFormInvalid';

const { expect } = require('chai');

const dummyData = {
    'firstName': {
        type: 'required',
        message: 'Field required'
    },
    'Email': {
        type: 'pattern',
        message: 'Email not valid'
    }
}

describe('Test isFormInvalid method', () => {
    it('Should return true if error element has items', () => {
        const result = isFormInvalid(dummyData)
        expect(result).to.equal(true);
    });
    it('Should return false if error element has no items', () => {
        const result = isFormInvalid({})
        expect(result).to.equal(false);
    })

})