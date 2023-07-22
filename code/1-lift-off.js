// ####################################
// ####### ----- Lift Off ----- #######
// ####################################

function liftOff() {
  let count = 10
  let blassOff = 0
  // Defined the first number(count) and the limit number(blass off).

  while(count > blassOff) {
    alert(count + '...')
    count = count - 1
    // Show number to decrease by one until the count reach the blass off.
  }

  alert('Lift off!')
  // At last, show a message that means it's end.
}

function make1() {
  let maximum = Number(prompt('Enter the maximum: '))
  alert('Enter the maximum: ' + maximum)
  let increment = Number(prompt('Enter the increment: '))
  alert('Enter the increment: ' + increment)
  // Ask the number want a maximum and a increment and define them as the maximum and the increment. At this time, those inputs are recognised as numbers. And Shoe the sentence that make sure the numbers.
  let count = 0
  // Define count to 0.
 
  while (count <= maximum) {
    alert(count)
    count = count + increment
  }
  // During the count is smaller or the same as maximum, loop the codes to show the count and calculate and redefine the count.
   
  alert('Done!')
  // Show a message that means it's end.
}