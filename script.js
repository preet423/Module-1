document.addEventListener('DOMContentLoaded', function () {
  let input = document.getElementById('display');
  let buttons = document.querySelectorAll('button');
  let arrayofbuttons = Array.from(buttons);
  let string = '';

  arrayofbuttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      if (e.target.innerHTML === '=') {
        try {
          string = eval(string);
          input.value = string;
        } catch (error) {
          input.value = 'Error';
        }
      } else if (e.target.innerHTML === 'AC') {
        string = '';
        input.value = ''; // Clear the display
      } else {
        string = string + e.target.innerHTML;
        input.value = string;
      }
    });
  });
});
