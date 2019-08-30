//.reverse for an array, not for a string.
function reverseString(str){
    
    var strArr = str.split("");
    var reverseStrArray = strArr.reverse();
    var reversedString = reverseStrArray.join("")
    return(reversedString)

}
console.log(reverseString("hello"));

//one line
function reversedString(str){
    return str.split("").reverse().join("");
  }
  
  console.log(reversedString("hello"));

  //from scratch
  function reverseString(str){
    var final= ""
    //create a descending for loop
    for(var i = str.length - 1; i>=0; i--){
      final += str[i];
    }
    return final;
  }
  console.log(reverseString("hello"))