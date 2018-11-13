
var chocolateBars=["snickers", "hundred grand", "kitkat",  "skittles"];

function addElementToBeginningOfArray(array,element){

return array=[element,...array]
}


function destructivelyAddElementToBeginningOfArray(array,element){

  const array=array;
  return array.unshift("element")

}
