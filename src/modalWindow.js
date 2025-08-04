const openBtnEl = document.querySelector('.btn')
export const modalEl = document.querySelector('.sign-up')
const closeEl = document.querySelector('.close')
const cancelEl = document.querySelector('.cancelBtn')

openBtnEl.addEventListener('click', () => {
    modalEl.classList.add('show')
})

closeEl.addEventListener('click', () => {
    modalEl.classList.remove('show')
})

window.addEventListener('click', (e) => {
    if (e.target === modalEl) {
        modalEl.classList.remove('show')
    }
})

cancelEl.addEventListener('click', () => {
    modalEl.classList.remove('show')
})
