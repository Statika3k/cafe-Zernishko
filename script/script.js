document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.menu__filter-button');
    const menuItems = document.querySelectorAll('.menu-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('menu__filter-button--active'));
            this.classList.add('menu__filter-button--active');

            const category = this.dataset.category;

            menuItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.booking-form');
    const message = document.querySelector('.confirmation-message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nameInput = form.querySelector('input[name="name"]');
        const phoneInput = form.querySelector('input[name="phone"]');
        const commentInput = form.querySelector('input[name="comment"]');

        const name = nameInput.value;
        const phone = phoneInput.value;
        const comment = commentInput.value;

        if (!name || !phone) {
            alert('Пожалуйста, заполните все обязательные поля.');
            return;
        }

        form.style.display = 'none';
        message.style.display = 'block';

        setTimeout(() => {
            form.style.display = 'block';
            message.style.display = 'none';
            form.reset();
        }, 3000);
    });
});
