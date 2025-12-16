//ЛОГИКИ АНИМАЦИИ ТЕКСТА НА ГЛАВНОМ ЭКРАНЕ
document.addEventListener('DOMContentLoaded', function () {
    /*
    const currentText = document.getElementById('current-text');
    const wordList = document.getElementById('word-list');
    const words = Array.from(wordList.querySelectorAll('li')).map(li => li.textContent);

    let currentIndex = 0;

    // Функция: падение сверху → появление → волна
    function fallFromTopAndAnimate(text) {
        // Устанавливаем начальное положение — выше центра
        currentText.style.opacity = 0;
        currentText.style.transform = 'translate(-50%, -100px)'; // начальная позиция — выше
        currentText.style.transition = 'none'; // сначала без анимации

        // Вставляем текст
        currentText.innerHTML = text;

        // Через кадр включаем плавность и "падение"
        setTimeout(() => {
            currentText.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'; // мягкая "пружинящая" анимация
            currentText.style.opacity = 1;
            currentText.style.transform = 'translate(-50%, -50%)'; // падаем к центру
        }, 10);

        // После падения — анимация волны
        // Через 1.5 секунды — исчезновение вниз
        setTimeout(() => {
            fadeOutDown();
        }, 2500);
    }

    // Исчезновение вниз
    function fadeOutDown() {
        currentText.style.opacity = 0;
        currentText.style.transform = 'translate(-50%, 50px)';
        currentText.style.transition = 'all 0.5s ease-out';

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % words.length;
            const newWord = words[currentIndex];

            // Следующее слово — снова падает сверху
            fallFromTopAndAnimate(newWord);
        }, 1000);
    }

    // 🚀 Запуск: первое слово тоже падает сверху
    if (words.length > 0) {
        fallFromTopAndAnimate(words[0]);
    }*/
});