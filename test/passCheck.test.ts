import { assert } from 'chai';
import passWordCheck from '../src/business/validation/passCheck';

describe('passwordCheckCases', () => {
  it('should return passCases as true and errorMessage as empty string for valid password', () => {
    const password = new passWordCheck('12345a@6789');
    const { passCases, errorMessage } = password.checkCases();
    assert.isTrue(passCases);
    assert.isEmpty(errorMessage);
  });

  it('should return passCases as false and errorMessage for password containing only letters', () => {
    const password = new passWordCheck('abcdabcd');
    const { passCases, errorMessage } = password.checkCases();
    assert.isFalse(passCases);
    assert.match(errorMessage, /The password cannot contain only letters/);
  });

  it('should return passCases as false and errorMessage for password containing only numbers', () => {
    const password = new passWordCheck('12345678');
    const { passCases, errorMessage } = password.checkCases();
    assert.isFalse(passCases);
    assert.match(errorMessage, /The password cannot contain only numbers/);
  });

  it('should return passCases as false and errorMessage for password not containing any special characters', () => {
    const password = new passWordCheck('abcd1234');
    const { passCases, errorMessage } = password.checkCases();
    assert.isFalse(passCases);
    assert.match(errorMessage, /The password must contain at least 1 special character/);
  });

  it('should return passCases as false and errorMessage for password with length less than 8', () => {
    const password = new passWordCheck('1234567');
    const { passCases, errorMessage } = password.checkCases();
    assert.isFalse(passCases);
    assert.match(errorMessage, /The password must contain at least 8 characters/);
  });
});

