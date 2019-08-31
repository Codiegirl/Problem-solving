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


  //factorial the product of an integer and all the integers below it.
  function factorialize(num){
    var result = 1; //accumulate all the numbers. not 0 because anything times 0 is 0
    for(var i = 1; i<=num; i++){
      //result = result * i
      result *= i
    }
    return result;
  }
  
  factorialize(6)