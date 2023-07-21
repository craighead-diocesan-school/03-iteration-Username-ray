// ####################################
// ##### ----- Square Series ----- ####
// ####################################

function squareSeries() {
  let count = Number(prompt('What number do you want to the Square Series for?'))
  // Ask the number want and define the number as count. When doing this, the number must be recognised as a 'number'.(Because if it's not, the answer entered will be recognized as just a character string and cannot be calculated later.)
  let squared = ''
  let limitValue = 0
  // Define squared and limit value. Limit value is defined for using in the while loop.

  while (count > limitValue){
    let square = count * count
    count = count - 1
    squared = squared + ' '+ square
  }
  // During count is bigger than limit value, keep to define square and reduce numbers one by one.

  alert('the square series is' + squared)
  // Show a sentence that using the number.
}