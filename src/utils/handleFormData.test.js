/* eslint-disable jest/valid-expect */
import { handleFormData } from "./handleFormData";

const { expect } = require('chai');

const dummyInputData = {
    'firstName': 'Jane',
    'lastName': 'Johnson',
    'Email': 'jane@email.com',
    'address1': ''
}

const dummyFieldsData = [
    [{
        id: 'firstName',
        placeholder: 'First name',
        type: 'text',
        validation: {
          required: {
            value: true,
            message: "Field required"
          }
        }
      },
      {
        id: 'lastName',
        placeholder: 'Last name',
        type: 'text',
        validation: {
          required: {
            value: true,
            message: "Field required"
          }
        }
      }],
      {
        id: 'Email',
        validation: {
          required: {
            value: true,
            message: "Field required"
          },
          pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Email not valid',
          }
        },
        type: 'text',
      },
      {
        id: 'address1',
        placeholder: 'Address 1',
        type: 'text',
      },
]

const expectedResult = [[{name: "First name", value: "Jane"}, {name: "Last name", value: "Johnson"}], {name: "Email", value: "jane@email.com"}, {name: "Address 1", value: ""}]

describe('Test handleFormData method', () => {
    it('Should create a correct array of data', () => {
        const result = handleFormData(dummyInputData, dummyFieldsData)
        expect(result).to.deep.equal(expectedResult)
    })
})
