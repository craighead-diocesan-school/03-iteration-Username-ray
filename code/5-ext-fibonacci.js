// ####################################
// ####### ----- Fibonacci ----- ######
// ####################################

function fibonacci() {
  let maximum = prompt('What number do you want the Fibonacci Sequence up to?')
  // Ask the number want to do, define the number as a maximum.
  let a = 0
  alert(a)
  // Show '0'.
  let b = 1
  if (maximum >= b){
  alert(b)
  // If the number entered is bigger than 1 or the same as 1, show '1'.
  }
  while (maximum >= b) {
    a = a + b
    if (maximum >= a){
      alert(a)
    }  
    b = b + a
    if (maximum >= b){
      alert(b)
    }    
  }
  // During the number is bigger than 1 or the same as 1, first, calculate the sum of the a and the b, next, enter the branch that if the number is bigger than a or not, and if it is, show the number calculated, and if it is not, skip the first if and go to the next code that calculates the sum of the a and the b, and enter the branch that if the number is bigger than b or the same as b, and if it is, show the number calculated, if it is not, skip the if and go back to the calculation of the sum of a and b, and follow the Same process as the first round, and keeping it until the condition of the while loop is no longer met.
}