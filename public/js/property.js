//Function to update a property's info
const addPropertyInfoSubmit = async (event) => {
    event.preventDefault();
    const pathArray = window.location.pathname.split('/');
    const propertyName = $('#property_name').val();
    const propertyType = $('#property_type').val();
    const description = $('#property_desc').val();
    const address1 = $('#address1').val();
    const address2 = $('#address2').val();
    const city = $('#city').val();
    const state = $('#state').val();
    const zip = $('#zip').val();
    const yearBuilt = $('#year_built').val();
    const totalUnits = $('#total_units').val();
    
    //create the payload object
    const payload = {
        propertyInfo:{
            name:propertyName,
            type:propertyType,
            description:description,
            address1:address1,
            address2:address2,
            city:city,
            state:state,
            zip:zip,
            year:yearBuilt,
            total_units:totalUnits  
        }
    }
    //Send the property info data
    const propertyResponse = await fetch('/api/property/'+pathArray[2], {
        method: 'PUT',
        body: JSON.stringify(payload.propertyInfo),
        headers: { 'Content-Type': 'application/json' },
    });       
    //If response is Ok, then redirect to the property listing page. 
    if (propertyResponse.ok) {
    document.location.replace('/property/'+pathArray[2]);
    } else {
    alert('Failed save property.');
    }
};

//Function to update finanicals
const addFinancialInfoSubmit = async (event) => {
    event.preventDefault();    
    const pathArray = window.location.pathname.split('/');
    const offerAmt = $('#offer_amount').val();
    const propertyValue = $('#property_value').val();
    const closingAmt = $('#closing_amount').val();
    const taxRate = $('#tax_rate').val();
    const financialId = $('#financial_id').val();
    
    //create the payload object
    const payload = {
        financial:{
            offer_amount:offerAmt,
            property_value:propertyValue,
            closing_amount:closingAmt,
            tax_rate:taxRate
        }
    }
    //Send the financial info data
    const financialResponse = await fetch('/api/property/financial/'+financialId, {
        method: 'PUT',
        body: JSON.stringify(payload.financial),
        headers: { 'Content-Type': 'application/json' },
    });       
    //If response is Ok, then redirect to the property listing page. 
    if (financialResponse.ok) {
    document.location.replace('/property/'+pathArray[2]);
    } else {
    alert('Failed save financial info.');
    }
};

//Function to update market data
const addMarketInfoSubmit = async (event) => {
    event.preventDefault();    
    const pathArray = window.location.pathname.split('/');
    const appreciation = $('#appreciation').val();
    const rentIncrease = $('#annual_rent_increase').val();
    const mortgageIncrease = $('#annual_mortgage_increase').val();
    const vacancy = $('#vacancy').val();
    const marketId = $('#market_id').val();
    
    //create the payload object
    const payload = {
        market:{
            appreciation:appreciation,
            annual_rent_increase:rentIncrease,
            annual_mortgage_increase: mortgageIncrease,
            vacancy:vacancy
        }
    }
    //Send the market info data
    const marketResponse = await fetch('/api/property/market/'+marketId, {
        method: 'PUT',
        body: JSON.stringify(payload.market),
        headers: { 'Content-Type': 'application/json' },
    });       
    //If response is Ok, then redirect to the property listing page. 
    if (marketResponse.ok) {
    document.location.replace('/property/'+pathArray[2]);
    } else {
    alert('Failed save market info.');
    }
};

//Function to add income data
const addIncomeSubmit = async (event) => {    
    const pathArray = window.location.pathname.split('/');
    const incomeDesc = $('#income_desc').val();
    const incomeAmount = $('#income_amount').val();
    const incomeId = $('#income_id').val();

    //create the payload object
    const payload = {
        income:{
            property_id:pathArray[2],
            description:incomeDesc,
            amount:incomeAmount
        }
    }
    if(incomeId == '') {
        //Send the income data
        const incomeResponse = await fetch('/api/property/income/', {
            method: 'POST',
            body: JSON.stringify(payload.income),
            headers: { 'Content-Type': 'application/json' },
        });       
        //If response is Ok, then redirect to the property listing page. 
        if (incomeResponse.ok) {
        document.location.replace('/property/'+pathArray[2]);
        } else {
        alert('Failed save income info.');
        }
    } else {
        const incomeResponse = await fetch('/api/property/income/'+incomeId, {
            method: 'PUT',
            body: JSON.stringify(payload.income),
            headers: { 'Content-Type': 'application/json' },
        });       
        //If response is Ok, then redirect to the property listing page. 
        if (incomeResponse.ok) {
        document.location.replace('/property/'+pathArray[2]);
        } else {
        alert('Failed save income info.');
        }
    }
}

//Function to add expense data
const addExpenseSubmit = async (event) => {    
    const pathArray = window.location.pathname.split('/');
    const expenseDesc = $('#expense_desc').val();
    const expenseAmount = $('#expense_amount').val();
    const expenseId = $('#expense_id').val();

    //create the payload object
    const payload = {
        expense:{
            property_id:pathArray[2],
            description:expenseDesc,
            amount:expenseAmount
        }
    }
    if(expenseId == '') {
        //Send the expense data
        const expenseResponse = await fetch('/api/property/expense/', {
            method: 'POST',
            body: JSON.stringify(payload.expense),
            headers: { 'Content-Type': 'application/json' },
        });       
        //If response is Ok, then redirect to the property listing page. 
        if (expenseResponse.ok) {
        document.location.replace('/property/'+pathArray[2]);
        } else {
        alert('Failed save expense info.');
        }
    } else {
        const expenseResponse = await fetch('/api/property/expense/'+expenseId, {
            method: 'PUT',
            body: JSON.stringify(payload.expense),
            headers: { 'Content-Type': 'application/json' },
        });       
        //If response is Ok, then redirect to the property listing page. 
        if (expenseResponse.ok) {
        document.location.replace('/property/'+pathArray[2]);
        } else {
        alert('Failed save expense info.');
        }
    }
}

//Function to add income data
const addMortgageSubmit = async (event) => {    
    const pathArray = window.location.pathname.split('/');
    const lender = $("#lender").val();
    const loanAmount = $("#loan_amount").val();
    const rate = $("#rate").val();
    const term = $("#term").val();
    const payment = $("#payment").val();
    const mortgageId = $('#mortgage_id').val();

    //create the payload object
    const payload = {
        mortgage:{
            property_id:pathArray[2],
            lender:lender,
            loan_amount:loanAmount,
            rate:rate,
            term:term,
            payment:payment
        }
    }
    if(mortgageId == '') {
        //Send the mortgage data
        const mortgageResponse = await fetch('/api/property/mortgage/', {
            method: 'POST',
            body: JSON.stringify(payload.mortgage),
            headers: { 'Content-Type': 'application/json' },
        });       
        //If response is Ok, then redirect to the property listing page. 
        if (mortgageResponse.ok) {
        document.location.replace('/property/'+pathArray[2]);
        } else {
        alert('Failed save mortgage info.');
        }
    } else {
        const mortgageResponse = await fetch('/api/property/mortgage/'+mortgageId, {
            method: 'PUT',
            body: JSON.stringify(payload.mortgage),
            headers: { 'Content-Type': 'application/json' },
        });       
        //If response is Ok, then redirect to the property listing page. 
        if (mortgageResponse.ok) {
        document.location.replace('/property/'+pathArray[2]);
        } else {
        alert('Failed save mortgage info.');
        }
    }
}
// function to delete a submitted item
const deleteSubmit = async (event) => {
    const id = $('#id').val()
    const deleteType = $('#type').val();    
    const pathArray = window.location.pathname.split('/');

    const deleteResponse = await fetch('/api/property/'+deleteType+'/'+id, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });       
    //If response is Ok, then redirect to the property listing page. 
    if (deleteResponse.ok) {
    document.location.replace('/property/'+pathArray[2]);
    } else {
    alert('Failed delete nfo.');
    }
}

//Function to get income data when applicable.
const getIncomeData = async (event) => {
    //if there is an income id, get the info and update the fields.
    //Else set the fields to the default values.
    if(event.relatedTarget.dataset.incomeId !== undefined) {
        const incomeId = event.relatedTarget.dataset.incomeId;
        const income = await fetch('/api/property/income/'+incomeId);
        const incomeData = await income.json();
        $('#income_desc option').removeAttr('selected'); 
        $('#income_desc option[value="'+incomeData.description+'"]').attr('selected', 'selected');        
        $("#income_amount").val(incomeData.amount);
        $("#income_id").val(incomeData.id);
        $("#income_desc").trigger("chosen:updated");
    } else {        
        $('#income_desc option').removeAttr('selected'); 
        $('#income_desc option[value="Rent"]').attr('selected', 'selected');
        $("#income_amount").val('');
        $("#income_id").val('');        
        $("#income_desc").trigger("chosen:updated");
    }
};

//Function to get income data when applicable.
const getExpenseData = async (event) => {
    //if there is an expense id, get the info and update the fields.
    //Else set the fields to the default values.
    if(event.relatedTarget.dataset.expenseId !== undefined) {
        const expenseId = event.relatedTarget.dataset.expenseId;
        const expense = await fetch('/api/property/expense/'+expenseId);
        const expenseData = await expense.json();
        $('#expense_desc option').removeAttr('selected'); 
        $('#expense_desc option[value="'+expenseData.description+'"]').attr('selected', 'selected');        
        $("#expense_amount").val(expenseData.amount);
        $("#expense_id").val(expenseData.id);
        $("#expense_desc").trigger("chosen:updated");
    } else {        
        $('#expense_desc option').removeAttr('selected'); 
        $('#expense_desc option[value="Rent"]').attr('selected', 'selected');
        $("#expense_amount").val('');
        $("#expense_id").val('');        
        $("#expense_desc").trigger("chosen:updated");
    }
};
//Function to check if the payment amount has been populated and if so, 
//enable the submit button
const paymentCheck = () => {
    if( $("#payment").val() == '') {
        $('#mortgage_submit').attr('disabled', 'disabled');
    } else {        
        $('#mortgage_submit').removeAttr('disabled');
    }
};
//Function to get income data when applicable.
const getMortgageData = async (event) => {
    //if there is an mortgage id, get the info and update the fields.
    //Else set the fields to the default values.
    if(event.relatedTarget.dataset.mortgageId !== undefined) {
        const mortgageId = event.relatedTarget.dataset.mortgageId;
        const mortgage = await fetch('/api/property/mortgage/'+mortgageId);
        const mortgageData = await mortgage.json();     
        $("#lender").val(mortgageData.lender);
        $("#loan_amount").val(mortgageData.loan_amount);
        $("#rate").val(mortgageData.rate);
        $("#term").val(mortgageData.term);
        $("#payment").val(mortgageData.payment);
        $("#mortgage_id").val(mortgageData.id);
    } else {
        $("#lender").val('');
        $("#loan_amount").val('');
        $("#rate").val('');
        $("#term").val('');
        $("#payment").val('');        
        $("#mortgage_id").val('');
    }
    paymentCheck();
};
//function to calculate the mortgage payment.
const mortgageCalc = () => {
    const loanAmount = $("#loan_amount").val();
    const rate = $("#rate").val();
    const term = $("#term").val();

    if (loanAmount !== '' && rate !== '' && term !== '') {
        // Convert annual interest rate to monthly rate
        const monthlyRate = rate / 12 / 100;
        // Calculate the number of monthly payments
        const numberOfPayments = term;
        // Calculate the monthly mortgage payment
        const payment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

        $('#payment').val(Math.round(payment*100)/100);
        paymentCheck();
    }
    
};

//Function to set delete data 
const setDeleteData = async (event) => {
    switch (event.relatedTarget.dataset.type) {
        case 'income':
            $('#id').val(event.relatedTarget.dataset.incomeId);
            $('#type').val('income');
            break;
        case 'expense':
            $('#id').val(event.relatedTarget.dataset.expenseId);
            $('#type').val('expense');
            break;
        case 'mortgage':
            $('#id').val(event.relatedTarget.dataset.mortgageId);
            $('#type').val('mortgage');
            break;
    }        
};
//Chosen dropdowns
$('#property_type').chosen({width: "100%"});
$('#state').chosen({width: "100%"});
$('#income_desc').chosen({width: "100%"});
$('#expense_desc').chosen({width: "100%"});
//Event Listeners
document.querySelector('#add-property-info').addEventListener('submit',addPropertyInfoSubmit);
document.querySelector('#add-financial-info').addEventListener('submit',addFinancialInfoSubmit);
document.querySelector('#add-market-info').addEventListener('submit',addMarketInfoSubmit);
document.querySelector('#add-income-info').addEventListener('submit',addIncomeSubmit);
document.querySelector('#add-expense-info').addEventListener('submit',addExpenseSubmit);
document.querySelector('#add-mortgage-info').addEventListener('submit',addMortgageSubmit);
document.querySelector('#delete-info').addEventListener('submit',deleteSubmit);
document.querySelector('#incomeInfoModal').addEventListener('show.bs.modal', getIncomeData);
document.querySelector('#expenseInfoModal').addEventListener('show.bs.modal', getExpenseData);
document.querySelector('#mortgageInfoModal').addEventListener('show.bs.modal', getMortgageData);
document.querySelector('#deleteConfirmModal').addEventListener('show.bs.modal', setDeleteData);
document.querySelector('#loan_amount').addEventListener('keyup',mortgageCalc);
document.querySelector('#term').addEventListener('keyup',mortgageCalc);
document.querySelector('#rate').addEventListener('keyup',mortgageCalc);