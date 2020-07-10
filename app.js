
function validateRegister() {
  
  let x1 = document.forms["registration"]["name"].value;
  let x2 = document.forms["registration"]["password"].value;
  let x3 = document.forms["registration"]["email"].value;
  let x4 = document.forms["registration"]["date"].value;
  let x5 = document.forms["registration"]["usrtel"].value;
  if (x1 == "") {
    alert("Name must be filled.");
    return false;
  }else if (x2 == "") {
    alert("Password must be filled.");
    return false;
  }else if (x3 == "") {
    alert("Email must be filled");
    return false;
  }else if (x4 == "") {
    alert("Date of birth must be filled");
    return false;
  }else if (x5 == "") {
    alert("Telephone must be filled");
    return false;
  }
  if(validateName()==false ){
    return false;
  }else if(validatePassword()==false){
    return false;
  }else if(validateTel()==false){
    return false;
  }
}

function validateName(){
  let x1 = document.forms["registration"]["name"].value;
  for(let i=0 ; i<x1.length ;i++ ){
    if(!((65<=x1.charCodeAt(i) && x1.charCodeAt(i)<=90) || x1.charCodeAt(i)==32 || (97<=x1.charCodeAt(i) && x1.charCodeAt(i)<=122))){
      alert("Name must contain only letters without Turkish characters.");
      return false;
    }
  }
}

function validatePassword(){
  let x2 = document.forms["registration"]["password"].value;
  if(!(8<=x2.length && x2.length<=16)){
    alert("Your password must be at least 8 and at most 16 characters long.")
    return false;
  }else if(numberOfUpperCase()==0){
    alert("Your password must contain at least one uppercase letter.")
    return false;
  }else if(numberOfDigit()==0){
    alert("Your password must contain at least one digit.")
    return false;
  }else if(numberOfSpecialCharacter()==0){
    alert("Your password must contain at least one special character.")
    return false;
  }
}

function validateTel(){
  let x5 = document.forms["registration"]["usrtel"].value;
  for(let i=0 ; i<x5.length;i++ ){
    if(x5.length!=11){
      alert("Telephone must contain 11 digit.");
      return false;
    }
    if(!(48<=x5.charCodeAt(i) && x5.charCodeAt(i)<=57 )){
      alert("Telephone must contain only digit.");
      return false;
    }
  }
}


function numberOfUpperCase(){
  let x2 = document.forms["registration"]["password"].value;
  let number=0;
  for(let i=0;i<x2.length;i++){
    if(65<=x2.charCodeAt(i) && x2.charCodeAt(i)<=90){
      number++;
    }
  }
  return number;
}
function numberOfDigit(){
  let x2 = document.forms["registration"]["password"].value;
  let number=0;
  for(let i=0;i<x2.length;i++){
    if(48<=x2.charCodeAt(i) && x2.charCodeAt(i)<=57){
      number++;
    }
  }
  return number;
}
function numberOfSpecialCharacter(){
  let x2 = document.forms["registration"]["password"].value;
  let number=0;
  for(let i=0;i<x2.length;i++){
    if(33<=x2.charCodeAt(i) && x2.charCodeAt(i)<=47){
      number++;
    }
  }
  return number;
}
