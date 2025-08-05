import { validateEmail, validatePassword } from "../src/validation"

describe('validateEmail', () => {
    test('валидный email проходит проверку', () => {
        expect(validateEmail('user@example.com')).toBe(true)
    })
    test('email без @ не проходит проверку', () => {
        expect(validateEmail('userexample.com')).toBe(false)
    })
    test('email с пробелами не проходит проверку', () => {
        expect(validateEmail('user @example.com')).toBe(false)
    })
})

describe('validatePassword', () => {
    test('валидный пароль проходит проверку', () => {
        expect(validatePassword('abc12345')).toBe(true)
    })
    test('короткий пароль не проходит проверку', () => {
        expect(validatePassword('abc12')).toBe(false)
    })
    test('пароль без цифр не проходит проверку', () => {
        expect(validatePassword('abcqwert')).toBe(false)
    })
    test('пароль без букв не проходит проверку', () => {
        expect(validatePassword('12345678')).toBe(false)
    })
})