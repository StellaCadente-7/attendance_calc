let btnclear = document.getElementById('clear');
let inputs = document.querySelectorAll('input');
let result = document.getElementById("result");

btnclear.addEventListener('click', () => {
    inputs.forEach(input => input.value = '');
    result.innerHTML='';
    result2.innerHTML='';
    result3.innerHTML='';
    result4.innerHTML='';
});
