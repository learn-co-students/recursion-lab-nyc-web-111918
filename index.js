function printString(myString) {
  console.log(myString[0]);
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(str) {
  if (str === '') {
    return ''
  }
  else {
    return reverseString(str.substring(1)) + str.charAt([0])
  }
}

function isPalindrome(str) {
  if (str.length < 2) {
    return true
  }
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1))
  }
  return false
}

function addUpTo(arr, index) {
  if (index === 0) {
    return arr[0]
  }
  else {
    return arr[index] + addUpTo(arr, --index)
  }
}

function maxOf(arr) {
  if (arr.length === 1) {
    return arr[0]
  }
    else if (arr[0] < arr[1]) {
      return maxOf(arr.slice(1))
    }
    else {
      arr.splice(1,1)
      return maxOf(arr)
    }
}


function includesNumber(arr, n) {
  if (arr.length === 1 && arr[0] !== n) {
    return false
  }
  else if (arr[0] !== n) {
    return includesNumber(arr.slice(1), n)
  }
  return true
}
