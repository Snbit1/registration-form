import { modalEl } from "./modalWindow.js"
import { validateEmail, validatePassword } from "./validation.js"
import axios from "axios"

document.addEventListener('DOMContentLoaded', () => {
    const formEl = document.querySelector('form.sign-up-content')

    formEl.addEventListener('submit', async (event) => {
        event.preventDefault()

        const email = formEl.email.value.trim()
        const pass = formEl.pass.value.trim()
        const passRepeat = formEl['pass-repeat'].value.trim()
        const remember = formEl.remember.checked

        if (!email) {
            alert('Введите email')
            return
        }
        if (!validateEmail(email)) {
            alert('Введите корректный email')
            return
        }
        if (!pass) {
            alert('Введите пароль');
            return;
        }
        if (!validatePassword(pass)) {
            alert('Пароль должен содержать минимум 8 символов, включая хотя бы одну букву и одну цифру')
            return
        }
        if (pass !== passRepeat) {
            alert('Пароли не совпадают пароль')
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