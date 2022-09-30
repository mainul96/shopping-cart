function updatePhoneNumber(isIncrase){
    const caseNumberInputField = document.getElementById('phone-field');
    const caseNumberString = caseNumberInputField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    
    let newCaseNumber;
    if(isIncrase === true){
        newCaseNumber = previousCaseNumber + 1;
    }else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberInputField.value = newCaseNumber;
    return newCaseNumber;
}

function updatePhoneBlance(phoneNumber){
    const phoneNumberIncrase = phoneNumber * 1219;
  const phoneBlance = document.getElementById('phone-blance'); 
  phoneBlance.innerText = phoneNumberIncrase;
  
}



document.getElementById('btn-phone-plus').addEventListener('click', function(){
  const phoneNumber = updatePhoneNumber(true);
  updatePhoneBlance(phoneNumber)

 subTotal()
  
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
   const phoneNumber = updatePhoneNumber(false);
   updatePhoneBlance(phoneNumber)

   subTotal()
})