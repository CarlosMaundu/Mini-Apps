import triangleType from './triangleType';
import '../css/styles.css';

const form = document.getElementById('triangleForm');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const side1 = Number(document.getElementById('side1').value);
    const side2 = Number(document.getElementById('side2').value);
    const side3 = Number(document.getElementById('side3').value);

    const triangle = triangleType(side1, side2, side3);

    result.textContent = `Triangle type: ${triangle}`;
});
