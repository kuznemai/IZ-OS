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