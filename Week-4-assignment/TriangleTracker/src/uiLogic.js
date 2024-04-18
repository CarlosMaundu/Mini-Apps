import triangleType from './triangleType';

document.getElementById('triangleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const side1 = parseInt(document.getElementById('side1').value, 10);
    const side2 = parseInt(document.getElementById('side2').value, 10);
    const side3 = parseInt(document.getElementById('side3').value, 10);
    const result = triangleType(side1, side2, side3);
    document.getElementById('result').innerText = result;
});
