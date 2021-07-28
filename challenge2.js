function reverseString(str) {
   
    let array = str.split("");
    str = '';
    //console.log(array)
    //console.log(array.length)
        for (let index = array.length-1; index >= 0; index--) {
          //str = str + array[index];
          //console.log(array[index])
          str = str +  array[index];
          //console.log(newName)
        }
        

        return str;
    }
  
var result = reverseString("hello");
console.log(result)


