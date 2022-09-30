function updateCaseNumber(isIncrase){
    const inputField = document.getElementById('case-input');
    const inputFieldString = inputField.value;
    const casePlusInputValue = parseInt(inputFieldString);

    let caseValue;
    if(isIncrase){
    caseValue = casePlusInputValue + 1;
    }else{
        caseValue = casePlusInputValue - 1;
    }
   
    inputField.value = caseValue;
    return caseValue;
   
}

function updateCaseBlance (caseValue){
    const totalCaseBlance = caseValue * 59;
    const caseBlance = document.getElementById('case-blance');
    caseBlance.innerText = totalCaseBlance;
}

document.getElementById('case-plus').addEventListener('click',function(){
 const caseValue =  updateCaseNumber(true);
updateCaseBlance(caseValue);
 


subTotal();

})


document.getElementById('case-minus').addEventListener('click', function(){
 const caseValue = updateCaseNumber(false);
updateCaseBlance(caseValue);

subTotal();
})



