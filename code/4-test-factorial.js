// ####################################
// ####### ----- Factorial ----- ######
// ####################################

function factorial() {
  let factorial = prompt('What number do you want for factorial?')
  // Ask the number want, define it as factorial.
  let count = factorial
  let total = 1
  // Defune the factorial as count, and define the total to 1.

  while (count > 1) {
    total = total * count
    count = count - 1
  }
  // During the count is bigger than 1, keep calculating that total times count is total and count minus 1 is count.

  alert('The factorial of ' + factorial + ' is ' + total + '.')
  // After exiting the while loop, show the result of the factorial and total.
}