const fly = document.createElement('div');
const docEl = document.documentElement;

fly.style.cssText = `
position: fixed;
width: 50px;
height: 50px;
left: 0;
top: 0;
pointer-events: none;
background: url('image/fly.svg') center/contain no-repeat;
`;

document.body.append(fly);

const calcPositionFly = () => {
    const maxLeft = docEl.scrollWidth - fly.clientWidth; // вычисление ширины экрана
        const maxScroll = docEl.scrollHeight - docEl.clientHeight; // вычисление высоты экрана
        const percentScroll = (window.pageYOffset * 100) / maxScroll; // процент от экрана
        const left = maxLeft * (percentScroll / 100); //вычисленни координаты самолета при скроле
        fly.style.transform = `translateX(${left}px)`;
};

window.addEventListener('scroll', () => requestAnimationFrame(calcPositionFly));
