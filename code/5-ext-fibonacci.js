// ####################################
// ####### ----- Fibonacci ----- ######
// ####################################

function fibonacci() {
  let maximum = prompt('What number do you want the Fibonacci Sequence up to?')
  let a = 0
  alert(a)
  let b = 1
  if (maximum >= b){
  alert(b)
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
}