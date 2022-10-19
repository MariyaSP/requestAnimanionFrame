let count = 0;
// оптимизирует процесс ввода текста
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