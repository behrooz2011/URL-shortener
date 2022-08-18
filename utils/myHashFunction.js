//#####################################################################################################
//                          Custom Designed Hash Function : Created by Bruce Bakshi (me!)
//
//                            Give the number of the characters to the function and it
//                              will generate a string with the same length.
//#####################################################################################################
exports.hashB = (charLength)=>{
  //alphanumeric table : 62 elements
  const source = [
      "0","1","2","3","4","5","6","7","8","9",
      "a","A" ,"b","B", "c","C", "d","D", "e","E", "f","F",
      "g","G", "h","H", "i","I", "j","J", "k","K", "l","L",
      "m","M", "n","N", "o","O", "p","P", "q","Q", "r","R",
      "s","S", "t","T", "u","U", "v","V", "w","W", "x","X", "y","Y", "z","Z"
  ];
  let result =''
  for(let i=0; i<charLength; i++){
      result+= source[Math.floor(62*Math.random())]
  }
  return result
}

// console.log(hashB(1));
// console.log(hashB(2));
// console.log(hashB(3));
// console.log(hashB(4));
// console.log(hashB(10))