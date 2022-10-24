function getPin(){
 const pin = Math.round(Math.random()*10000);
 const pinString = pin +'';
 if(pinString.length == 4){
    return pin ;
 }
 else{
    // console.log('got 3 digit and calling again',pin);
    return getPin();
 }
}
function generatePin(){
    const pin = getPin();
//    console.log(pin);
document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click',function(event){
    const calcInput = document.getElementById('typed-numbers');
  const number = event.target.innerText;
//   if (isNaN(number)){
//    console.log(number);
//   }
  if (number=='C'){
   calcInput.value='';
  }
 else{
  const previousNumber = calcInput.value;
  const newNumber = previousNumber + number;
  calcInput.value =newNumber;
  }
})
function verifyPin(){
   // console.log('going to verify');
   const pin = document.getElementById('display-pin').value;
   const typeNumbers = document.getElementById('typed-numbers').value;
 const successMessage = document.getElementById('notify-success');
const error = document.getElementById('notify-fail');
if(pin==typeNumbers){
      // console.log('matched.YAY');
     successMessage.style.display='block';
     error.style.display='none';
   }
   else{
      // console.log('opps!');
      error.style.display='block';
      successMessage.style.display='none';
   }
}