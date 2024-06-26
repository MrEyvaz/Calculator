const button = document.querySelector('.btn')

const text = document.querySelector('.text')

const num1 = +prompt('Choose the first value')

const num2 = +prompt('Choose the second value')

const values = []

values.push(num1)

values.push(num2)

console.log(values);

button.addEventListener('click', function () {
    let result = 1
    values.forEach(function(value) {
        result *= value
        text.innerHTML = result
    })  
})