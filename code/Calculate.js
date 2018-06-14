module.exports.function = function calculate (value1, value2, operator) {
  
  var result
           
  console.log('SomeAction variable: ', operator)
  
  switch(operator.toString()){
    case 'Minus':
    console.log('inside the switch -', operator)
    result = value1 - value2
    break
      
    case 'Plus':
    console.log('inside the switch +', operator)
    result = value1 + value2
    break
      
    case 'Divide':
    console.log('inside the switch /', operator)
    result = value1 / value2
    break
      
    default:
    console.log('inside the switch default //', 'someAction variable: ' + typeof operator)
    result = value1 * value2
    }
  
  
    if(result == 3) {
      throw fail.checkedError("Sorry, something went wrong. You should try again later", Error1);
    }
  

  
  
  return {
    value1:value1,
    value2: value2,
    result: result,
    operator: operator
  }}

  
//   if (operator === '-') {
//     operation = value1 - value2
//   }
//   
//   else if (operator === '+') {
//     operation = value1 + value2
//   }
//   
//   else if (operator === '/'){
//     operation = value1 / value2
//   }
//   
//   else {
//     operation = value1 * value2
//   }