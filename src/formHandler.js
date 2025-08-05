import { modalEl } from "./modalWindow.js"
import { validateEmail, validatePassword } from "./validation.js"
import { showError, clearError } from "./errorHandler.js"

document.addEventListener('DOMContentLoaded', () => {
    const formEl = document.querySelector('form.sign-up-content')

    formEl.addEventListener('submit', async (event) => {
        event.preventDefault()

        const email = formEl.email.value.trim()
        const pass = formEl.pass.value.trim()
        const passRepeat = formEl['pass-repeat'].value.trim()
        const remember = formEl.remember.checked

        clearError(formEl.email)
        if (!email) {
            showError(formEl.email, 'Введите email')
            return
        }
        if (!validateEmail(email)) {
            showError(formEl.email, 'Введите корректный email')
            return
        }

        clearError(formEl.pass)
        if (!pass) {
            showError(formEl.pass, 'Введите пароль')
            return
        }
        if (!validatePassword(pass)) {
            showError(formEl.pass, 'Пароль должен содержать минимум 8 символов, включая хотя бы одну букву и одну цифру')
            return
        }

        clearError(formEl['pass-repeat'])
        if (pass !== passRepeat) {
            showError(formEl['pass-repeat'], 'Пароли не совпадают')
            return
        }

        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                email,
                password: pass,
                remember,
            })
            alert(`Данные успешно отправлены! ID записи: ${response.data.id}`)
            modalEl.classList.remove('show')
            formEl.reset()
        } catch (error) {
            alert('Ошибка при отправке данных. Попробуйте позже.')
            console.error(error)
        }
    })
})