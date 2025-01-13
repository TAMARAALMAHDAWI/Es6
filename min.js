//1//

function stringToArray(str) {

    
    return str.split(" ");
}
 
var result = stringToArray("Orange Jordan");
console.log(result); 

//2//
function hidePhoneNumber(phoneNumber) {
    
    let hiddenPart = "*".repeat(7);
    
    
    let visiblePart = phoneNumber.slice(-3);
     
    return hiddenPart + visiblePart;
}


var result = hidePhoneNumber("0776807777");
console.log(result);

//3//


function hideEmail(email) {
    
    let parts = email.split("@");
    
    
    let hiddenPart = parts[0] + "...";
    
    
    let domainPart = parts[1];
    
    return hiddenPart + "@" + domainPart;
}


var result = hideEmail("orange_academy@orange.jo");
console.log(result); 

//4//
function capitalizeFirstLetter(str) {
    
    let words = str.split(" ");
    
    
    let capitalizedWords = words.map(function(word) {
        
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    
   
    return capitalizedWords.join(" ");
}


var result = capitalizeFirstLetter("coding academy by orange");
console.log(result); 


//6//
{

function flipNumber(num) {
    
    let numStr = num.toString();
    
    
    let reversedStr = numStr.split("").reverse().join("");
    
    
    return parseInt(reversedStr);
}

let result = flipNumber(92485);
console.log(result);  
}

//7//

function swapValues(a, b) {
    
    let temp = a;
    a = b;
    b = temp;

    
    console.log("a =", a, "b =", b);

    
    a = a + b; 
    b = a - b;  
    a = a - b;  

    
    console.log("a =", a, "b =", b);

    
     [a, b] = [b, a];

    
     console.log("a =", a, "b =", b);

}
swapValues(3, 4);

//8//


function removeCharacter(str, index) {
    
    if (index < 0 || index >= str.length) {
        return str;  
    }

    
    let part1 = str.slice(0, index);

    
    let part2 = str.slice(index + 1);

    
    return part1 + part2;
}


//9//
{

function mergeStrings(str1, str2) {
    
    let modifiedStr1 = str1.slice(1);
    let modifiedStr2 = str2.slice(1);

    
    return modifiedStr1 + modifiedStr2;
}


let result = mergeStrings("lora", "inge");
console.log(result); 

}

//10//
{

function isCharacterAtEdges(char, str) {
    
    return str[0] === char || str[str.length - 1] === char;
}


console.log(isCharacterAtEdges("o" , "orange"));  
console.log(isCharacterAtEdges("z", "orange")); 
}

 //11//
{
 function splitStringIntoWordsWithCapitalFirstLetter(str) {
    
    let words = str.split(" ");
    
    
    let capitalizedWords = words.map(word => {
    
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    
    return capitalizedWords;
}


let result = splitStringIntoWordsWithCapitalFirstLetter("coding academy by orange");
console.log(result);  
}

//12//

function reorderString(s) {
    
    return s.toLowerCase().split('').sort().join('');
  }
  console.log(reorderString("Orange"));

  //13//

  function measureExecutionTime() {
    console.time("executionTime"); 
  
    
    for (let i = 0; i < 1000000; i++) {
      
    }
  
    console.timeEnd("executionTime"); 
  }
  
  measureExecutionTime();
  

  