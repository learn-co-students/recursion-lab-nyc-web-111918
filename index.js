// Code your solution here!

// Write out a recursive function to reverse a string.

function printString(str){
  console.log(str[0])
  if (str.length > 1){
    let subStr = str.substring(1, str.length)
    printString(subStr)
  } else {
    return true
  }
  return true
}


function reverseString(str){
  if (str.length > 0){
    return reverseString(str.substring(1))+str.charAt(0)
  } else{
    return ""
  }
  return
}

// Write out a recursive function to see if a word is a palindrome. Returns a boolean.

// if first letter === last letter, slice
function isPalindrome(str){
  if (str.length > 1){
    if (str[0]===(str[str.length-1])){
      return isPalindrome(str.substring(1, str.length-1))
    } else {
      return false
    }
  }
  return true
}


// Given an array and an index, write a recursive function to add up the elements of an array.

function addUpTo(array, index){
  console.log(array[index])
  if (index > 0){
    return addUpTo(array, index-1) + array[index]
  }else{
   return array[index]
  }
}

// Write a recursive function to find the largest integer in an array.

function maxOf(array){
  if (array.length > 1){
    if(array[0]<array[1]){
      return maxOf(array.slice(1))
    } else if (array[0]>array[1]){
      return maxOf(array.filter(el=>el!==array[1]))
    }
    return
  }else{
    return array[0]
  }
  return
}

// Write out a function to see if an array includes a given element.

function includesNumber(array, num){
  if(array.length > 0){
      if (array[0] === num){
      return true
    } else{
      return includesNumber(array.slice(1), num)
    }
  }else{
    return false
  }
  return false
}
