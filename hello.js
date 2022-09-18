document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('form').onsubmit = function(){
    const name = document.querySelector('#name').value;
    alert(`Hello, ${name}!`);
   }


     // Colors

    //Change font color to red

    // first method

    // document.querySelector('#red').onclick = function(){
    //     document.querySelector('#bon').style.color = 'red';
    // }

    //  second method

   // document.querySelectorAll('button').forEach(function(button){
   //     button.onclick = function(){
   //       document.querySelector('#bon').style.color = button.dataset.color;
   //     }

   // })
      //  third method


      document.querySelectorAll('button').forEach(button => {
          button.onclick = function(){
            document.querySelector('#bon').style.color = button.dataset.color;
          }
      });

        // toggle color picker

      document.querySelector('select').onchange = function () {
            document.querySelector('#bondia').style.color = this.value
      }

    })









