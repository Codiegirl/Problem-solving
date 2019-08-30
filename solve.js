//.reverse for an array, not for a string.
function reverseString(str){
    
    var strArr = str.split("");
    var reverseStrArray = strArr.reverse();
    var reversedString = reverseStrArray.join("")
    return(reversedString)

}
console.log(reverseString("hello"));
