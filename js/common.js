function getElementByIdValue(element){
    const phoneTotal = document.getElementById(element);
    const phoneTotalString = phoneTotal.innerText;
    const phoneValueAmount = parseInt(phoneTotalString);
    return phoneValueAmount;
    }

    function setTotalAmount (element, total){
        const subTotals = document.getElementById(element);
        subTotals.innerText = total;
    }

    
    function subTotal(){
      const subTotalPhone = getElementByIdValue('phone-blance');
      const subTotalCase = getElementByIdValue('case-blance')
      const totalAmount = subTotalPhone + subTotalCase;
    
      setTotalAmount('subtotal-amount', totalAmount);

      const taxAmountString =(totalAmount * 0.1).toFixed(2);
      const taxAmountValue = parseFloat(taxAmountString);
      setTotalAmount('tax', taxAmountValue);

      const finalAmount = taxAmountValue + totalAmount;
      setTotalAmount('final-total', finalAmount);
    }