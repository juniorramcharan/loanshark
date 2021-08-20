//get values from the interface
function getValues(){

    //get values from the page
        let amount = document.getElementById('amount').value;
        let term = document.getElementById('term').value;
        let rate = document.getElementById('rate').value;
        amount = parseInt(amount);
        term = parseInt(term);
        rate = parseInt(rate);

    //call generate numbers

 let lsDataArray =  createData(amount, term, rate);
       
    //call display numbers
    displayValues(lsDataArray);
}
function createData(amount, term, rate){
    lsArray =[];
    let lsObject = {};
    
   
    let payment = calculateMonthlyPayment(amount, term, rate);
    
    
   let totalInterest = 0;
   let currentBalance = amount;
   
        for (let i = 1; i <= term; i++) {
            
           let interest = calculateMonthlyInterestPayment(currentBalance, rate);
           
           principal = payment - interest; 
           let balance = currentBalance - principal;      

           totalInterest += interest;     
                      
            lsArray.push({month: i,payment: payment,principal: principal,  interest: interest, totalinterest: totalInterest, balance: balance});
            currentBalance -= principal;
        }
            
        
    return lsArray;
}


function calculateMonthlyPayment(amount, term, rate){

    let monthlyPayment = (amount)*(rate/1200)/(1-(1+rate/1200)**-term);

    return monthlyPayment;

}
function calculateMonthlyInterestPayment(currentBalance, rate){
 let interestPayment = currentBalance * (rate/1200);
 return interestPayment;

}

function displayValues(arrayValue){
  
 let tableBody =   document.getElementById('results');
 let templateRow =   document.getElementById('fbTemplate');
 tableBody.innerHTML ="";

 for (let index = 0; index < arrayValue.length; index ++) {
    let tableRow = document.importNode(templateRow.content,true);
    let rowCols = tableRow.querySelectorAll("td");
    rowCols[0].textContent = arrayValue[index].month;
    rowCols[1].textContent = arrayValue[index].payment.toFixed(2);
    rowCols[2].textContent = arrayValue[index].principal.toFixed(2);
    rowCols[3].textContent = arrayValue[index].interest.toFixed(2);
    rowCols[4].textContent = arrayValue[index].totalinterest.toFixed(2);
    rowCols[5].textContent = arrayValue[index].balance.toFixed(2);

    tableBody.appendChild(tableRow);
 }
}