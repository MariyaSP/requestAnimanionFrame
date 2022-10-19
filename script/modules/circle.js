const duration = 3000;
const distance = 1000;
let requestId = NaN;


const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const circle = document.querySelector('.circle');

const startAnimation = (duration, callback) => {
    let startAnimation = NaN;
    requestId = requestAnimationFrame(function step(timestamp) {
        startAnimation ||= timestamp;

        const progress = (timestamp - startAnimation) / duration;

        callback(progress);

        if(progress < 1){
            requestId = requestAnimationFrame(step);
        }

    });
};

const easeInOut = time => 0.5 * (1 - Math.cos(Math.PI * time));

start.addEventListener('click', () => {
    startAnimation(duration, (progress) => {  //перемещение объекта
        const left = easeInOut(progress) * distance ;
        circle.style.transform = `translateX(${left}px)`;

    });
});

stop.addEventListener('click', () => {
    cancelAnimationFrame(requestId);
})