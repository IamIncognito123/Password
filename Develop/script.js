// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Add event listener to generate button
generateBtn.addEventListener("click", onclick);


// function containing prompts and other functions to generate password

generateBtn.onclick = function(){

  var number = prompt ('Enter a number 8 to 128.', 'default answer');
      if(number === null){
        return;
      }
    if(number<8 || number>128 || typeof number === 'string'){
      do{
        alert ('Please enter a valid answer');
        var number = prompt ('Enter a number 8 to 128.', 'default answer');
        if(number === null){
          return;
        }
      }
      while(number<8 || number>128 || typeof number === 'string');
      }

      // can use confirm
  var letter = prompt('Do you want uppercase letters?', 'yes or no');

      // not operator has to be outside if there is an or (||) statement 
      // cant do (uppercaseLetter !== 'yes' || uppercaseLetter !== 'no')

    if(!(letter == 'yes' || letter == 'no')){
      do{
        alert ('Please enter a valid answer');
        var letter = prompt ('Do you want uppercase letters?', 'yes or no');
      }
      while(!(letter == 'yes' || letter == 'no'));
      }else{}

  // var integer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  var includeNumbers = prompt('Do you want numbers?', 'yes or no')
    if(!(includeNumbers == 'yes' || includeNumbers == 'no')){
      do{
        alert ('Please enter a valid answer');
        var includeNumbers = prompt ('Do you want numbers?', 'yes or no');
      }
      while(!(includeNumbers == 'yes' || includeNumbers == 'no'));
      }else{}

  var includeCharacters = prompt('Would you like to include special characters?', 'yes or no')
    if(!(includeCharacters == 'yes' || includeCharacters == 'no')){
      do{
        alert('Please enter a valid answer');
        var includeCharacters = prompt('Would you like to include special characters?', 'yes or no');
      }
      while(!(includeCharacters == 'yes' || includeCharacters == 'no'));
    }else{}
   
    if(number === null){
      return;
    }


// parseInt used to turn number stored as a string from prompt above into an integer
  var passwordlength = parseInt(number)

    // array var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


    // create separate arrays to store value of password length, letters, capital letters, numbers, and special characters
    // concat the arrays based on yes or no answers with if & if else statments
    // pass the values to Math.random to create password 

  var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  var upperCase = lowerCase.toUpperCase()
  var numberString = '0123456789'
  var specialCharacters = '%*_-'

 

// conditional statments depending on user prompt input 

    if(letter == 'yes' && includeNumbers == 'yes' && includeCharacters == 'yes'){
      var mainArray=''
      var mainArray = lowerCase + upperCase + numberString + specialCharacters
    

        generateBtn.addEventListener("click", writePassword);
        function writePassword() {
          var password = '';
          var passwordText = document.querySelector("#password");


        for(let i = 0; i< passwordlength; i++){
            password += mainArray.charAt(Math.floor(Math.random()*mainArray.length))
          }
        
        
          passwordText.value = password;
        }
        writePassword();
    
  

    }else if(letter == 'no' && includeNumbers == 'yes' && includeCharacters == 'yes'){
      var mainArray=''
      var mainArray = lowerCase + numberString + specialCharacters
    

        generateBtn.addEventListener("click", writePassword);
        function writePassword() {
          var password = '';
          var passwordText = document.querySelector("#password");


        for(let i = 0; i< passwordlength; i++){
            password += mainArray.charAt(Math.floor(Math.random()*mainArray.length))
          }
        
        
          passwordText.value = password;
        }
        writePassword();

    }else if(letter == 'no' && includeNumbers == 'no' && includeCharacters == 'yes'){
      var mainArray=''
      var mainArray = lowerCase + specialCharacters
    

        generateBtn.addEventListener("click", writePassword);
        function writePassword() {
          var password = '';
          var passwordText = document.querySelector("#password");


        for(let i = 0; i< passwordlength; i++){
            password += mainArray.charAt(Math.floor(Math.random()*mainArray.length))
          }
        
        
          passwordText.value = password;
        }
        writePassword();

    }else if(letter == 'yes' && includeNumbers == 'no' && includeCharacters == 'yes'){
      var mainArray=''
      var mainArray = lowerCase + upperCase + specialCharacters 
    

        generateBtn.addEventListener("click", writePassword);
        function writePassword() {
          var password = '';
          var passwordText = document.querySelector("#password");


        for(let i = 0; i< passwordlength; i++){
            password += mainArray.charAt(Math.floor(Math.random()*mainArray.length))
          }
        
        
          passwordText.value = password;
        }
        writePassword();
        
    }else if(letter == 'yes' && includeNumbers == 'no' && includeCharacters == 'no'){
      var mainArray=''
      var mainArray = lowerCase + upperCase 
    

        generateBtn.addEventListener("click", writePassword);
        function writePassword() {
          var password = '';
          var passwordText = document.querySelector("#password");


        for(let i = 0; i< passwordlength; i++){
            password += mainArray.charAt(Math.floor(Math.random()*mainArray.length))
          }
        
        
          passwordText.value = password;
        }
        writePassword();

    }else if(letter == 'yes' && includeNumbers == 'yes' && includeCharacters == 'no'){
      var mainArray=''
      var mainArray = lowerCase + upperCase + numberString
    

        generateBtn.addEventListener("click", writePassword);
        function writePassword() {
          var password = '';
          var passwordText = document.querySelector("#password");


        for(let i = 0; i< passwordlength; i++){
            password += mainArray.charAt(Math.floor(Math.random()*mainArray.length))
          }
        
        
          passwordText.value = password;
        }
        writePassword();

    }else if(letter == 'no' && includeNumbers == 'yes' && includeCharacters == 'no'){
      var mainArray=''
      var mainArray = lowerCase + numberString
    

        generateBtn.addEventListener("click", writePassword);
        function writePassword() {
          var password = '';
          var passwordText = document.querySelector("#password");


        for(let i = 0; i< passwordlength; i++){
            password += mainArray.charAt(Math.floor(Math.random()*mainArray.length))
          }
        
        
          passwordText.value = password;
        }
        writePassword();
    }else if(letter == 'no' && includeNumbers == 'no' && includeCharacters == 'no'){
      var mainArray=''
      var mainArray = lowerCase 
    

        generateBtn.addEventListener("click", writePassword);
        function writePassword() {
          var password = '';
          var passwordText = document.querySelector("#password");


        for(let i = 0; i< passwordlength; i++){
            password += mainArray.charAt(Math.floor(Math.random()*mainArray.length))
          }
        
        
          passwordText.value = password;
        }
        writePassword(); 
    }

    
}
