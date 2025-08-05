export function showError(inputEl, message) {
    const formGroup = inputEl.closest('.form-group')
    const errorEl = formGroup.querySelector('.error')

    errorEl.textContent = message
    errorEl.style.display = 'block'
}

export function clearError(inputEl) {
    const formGroup = inputEl.closest('.form-group')
    const errorEl = formGroup.querySelector('.error')

    errorEl.textContent = ''
    errorEl.style.display = 'none'
}