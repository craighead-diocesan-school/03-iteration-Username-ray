// ####################################
// ####### ----- Attendees ----- ######
// ####################################

function attendees() {
  let count = 0
  let numOfAttendees = 5
  let attendeeList = ''
  // Define the three valiables.
  
  while (count < numOfAttendees) {
    let attendee = prompt('Who is in attendance today?')
    attendeeList = attendeeList + attendee
    attendeeList = attendeeList + ', '
    count = count + 1
    // During the count is smalleer than the number of attendees, loop that asking the attendee and define it as an attendees, and redefine the attendees list that includes the attendee who was inputed and the count counts up by one.
  }
  
  alert(attendeeList)
  // Show the ultimate of the attendees list.
}

function make2() {
  let numOfNumbers = Number(prompt('How many numbers do you wanna add?'))
  // Ask the number want to add and define it as a number of numbers.
  
  let count = 0
  let total = 0
  // Define both the count and total number to 0.
  while (count < numOfNumbers) {
    let whatever = prompt('Nek number: ')
    total = total + whatever
    count = count + 1
    // During the count is smaller than the number of numbers, loop the codes that asks the Nek number and defines it as a whatever and redefines the total, and the count counts up by one.
  }

  alert('total: ' + total)
  // At last, show the total number.
}