/* eslint-disable jest/valid-expect */
import { findInputError } from "./findInputErrors"

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

describe('Test findInputErrors method', () => {
    it('Should return error field when firstName not typed', () => {
        const inputErrors = findInputError(dummyData, 'firstName')
        expect(inputErrors).to.have.property('error')
    });
    it('Should return error field when Email format is incorrect', () => {
        const inputErrors = findInputError(dummyData, 'Email')
        expect(inputErrors).to.have.property('error')
    });
    it('Should be empty if no error field found', () => {
        const inputErrors = findInputError(dummyData, 'city')
        expect(inputErrors).to.not.have.property('error')
    } )
})