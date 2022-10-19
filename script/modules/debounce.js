let count = 0;
// уменьшили количество вызовов события ДЛЯ АНИМАЦИИ ПРИ НАВЕДЕНИИ КУРСОРА МЫШКИ
// паттерн, который не дает вызываться функции чаще чем RAF может сработать
const debounce = (fn, raf = NaN) => (...args) => {
        if(raf) return;
        raf = requestAnimationFrame(() => {
            fn(...args);
            raf = NaN;
        });
    };

const handle = () => {
    console.log(count++);
};

const debounceHandle = debounce(handle);
const circle = document.querySelector('.circle');
circle.addEventListener('mousemove', debounceHandle);