// ####################################
// ####### ----- Fibonacci ----- ######
// ####################################

function fibonacci() {
  let maximum = prompt('What number do you want the Fibonacci Sequence up to?')
  let a = 0
  alert(a)
  let b = 1
  alert(b)

  while (maximum > b) {
    a = a + b
    alert(a)
    b = b + a
    alert(b)
  }
}