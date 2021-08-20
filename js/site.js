//get values from the interface
function getValues(){

    //get values from the page
        let amount = document.getElementById('amount').value;
        let term = document.getElementById('term').value;
        let rate = document.getElementById('rate').value;
        
        let currentBalance = amount;
    //call generate numbers

    let payment = calculateMonthlyPayment(amount, term, rate);
    let interest = calculateMonthlyInterestPayment(currentBalance, rate);
    let principal = payment - interest;
    //call display numbers

}
function createData(month,term,amount, payment,interest){
    
    let lsObject = {};
    let balance = 0;
    let totalInterest
        
            lsObject["month"] = month;
            lsObject["payment"] = payment;
            lsObject["principal"] = payment - interest;
            lsObject["interest"] = interest;
            lsObject["totalInterest"] = totalInterest;
            lsObject["balance"] = balance;
            lsArray.push(lsObject);
        
    return lsObject;
}


function calculateMonthlyPayment(amount, term, rate){

    let monthlyPayment = (amount)*(rate/1200)/(1-(1+rate/1200)**-term);

    return monthlyPayment;

}
function calculateMonthlyInterestPayment(currentBalance, rate){
 let interestPayment = currentBalance * (rate/1200);.3
 return interestPayment;

}