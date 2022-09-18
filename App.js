// part I

// let counter = 0;

if (!localStorage.getItem('counter')) {
  localStorage.setItem('counter', 0)
}

function count() {
  let counter = localStorage.getItem('counter');
  counter++;
  document.querySelector('h2').innerHTML = counter;
  localStorage.setItem('counter', counter);

  // if ( counter % 10 === 0) {
  //   alert(`Count is now $(counter)`);
  // }
}

// document.addEventListener('DOMContentLoaded', function(){

// })

document.querySelector('h2').innerHTML = localStorage.getItem('counter');
document.querySelector('#hit').onclick = count;

setInterval(count, 1000);

// Part II

function hello() {
  const heading = document.querySelector('h1');
  if (heading.innerHTML === 'Hello!') {
      heading.innerHTML='Byee!';

  } else {
     heading.innerHTML = 'Hello!';
  }

}