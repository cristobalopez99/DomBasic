const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(
    {
        h1, p, parrafito, pid, input,
    }
)

 h1.innerHTML = 'Que pasa Doc'; 
console.log(h1.getAttribute('pantalla'));

const img = document.createElement('img');
img.setAttribute('src', './rb.jpg' );
console.log(img);

pid.append(img); 