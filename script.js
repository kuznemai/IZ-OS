// Плавное появление элементов
document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const appearOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4; // Положение верхней границы для появления

        fadeInElements.forEach(element => {
            const boxTop = element.getBoundingClientRect().top; // Положение элемента относительно видимости

            if (boxTop < triggerBottom) {
                element.classList.add('visible'); // Добавляем класс видимости
            }
        });
    };

    window.addEventListener('scroll', appearOnScroll);
    appearOnScroll(); // Запускаем функцию при загрузке страницы для проверки видимости изначально
});



// Button


// Добавляем в корзину


document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.buy-button');
    const cart = document.getElementById('cart');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-product');
            const productPrice = button.getAttribute('data-price');

            const listItem = document.createElement('li');
            listItem.textContent = `${productName} - $${productPrice}`;
            cart.appendChild(listItem);
        });
    });
});



