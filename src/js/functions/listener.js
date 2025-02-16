
export const listener = () => {
    document.body.addEventListener('click', (e) => {
        let target = e.target;

        if (target.dataset.button) openModal(target);
        if (target.classList.contains('modal') || target.classList.contains('modal__close')) closeModal(target);
    })

    function openModal(target) {
        document.querySelector('.modal').classList.add('active')
    }

    function closeModal() {
        document.querySelector('.modal.active').classList.remove('active');
    }
}

listener();