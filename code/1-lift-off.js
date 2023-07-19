// ####################################
// ####### ----- Lift Off ----- #######
// ####################################

function liftOff() {
  let count = 10
  let blassOff = 0

  while(count > blassOff) {
    alert(count + '...')
    count = count - 1
  }

  alert('Lift off!')
}

function make1() {
  let maximum = Number(prompt('Enter the maximum: '))
  alert('Enter the maximum: ' + maximum)
  let increment = Number(prompt('Enter the increment: '))
  alert('Enter the increment: ' + increment)
  let count = 0
 
  while (count <= maximum) {
    alert(count)
    count = count + increment
  }
   
  alert('Done!')
}