//Function to submit a property to the database
const addPropertySubmit = async (event) => {
    event.preventDefault();
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
    const offerAmt = $('#offer_amount').val();
    const propertyValue = $('#property_value').val();
    const closingAmt = $('#closing_amount').val();
    const taxRate = $('#tax_rate').val();
    const appreciation = $('#appreciation').val();
    const rentIncrease = $('#annual_rent_increase').val();
    const expenseIncrease = $('#annual_expense_increase').val();
    const vacancy = $('#vacancy').val();
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
        },
        financial:{
            offer_amount:offerAmt,
            property_value:propertyValue,
            closing_amount:closingAmt,
            tax_rate:taxRate
        },
        market:{
            appreciation:appreciation,
            annual_rent_increase:rentIncrease,
            annual_expense_increase: expenseIncrease,
            vacancy:vacancy
        }
    }
    //Send the property info data
    const propertyResponse = await fetch('/api/property', {
        method: 'POST',
        body: JSON.stringify(payload.propertyInfo),
        headers: { 'Content-Type': 'application/json' },
    });   
    //Get the JSON response to obtain the newly created property ID   
    const propertyInfo = await propertyResponse.json();
    //Set the property ID
    payload.financial.property_id = propertyInfo.id;
    payload.market.property_id = propertyInfo.id;
    //Send the financial data
    const financialResponse = await fetch('/api/property/financial', {
        method: 'POST',
        body: JSON.stringify(payload.financial),
        headers: { 'Content-Type': 'application/json' },
    }); 
    //Send the market data
    const marketResponse = await fetch('/api/property/market', {
    method: 'POST',
    body: JSON.stringify(payload.market),
    headers: { 'Content-Type': 'application/json' },
    }); 
    //If responses are Ok, then redirect to the property listing page. 
    if (propertyResponse.ok && financialResponse.ok && marketResponse.ok) {        
    document.location.replace('/property/'+propertyInfo.id);
    } else {
    alert('Failed save property.');
    }
    
};
if(window.location.pathname === '/addproperty') {
    $('#property_type').chosen({width: "100%"});
    $('#state').chosen({width: "100%"});
    document.querySelector('#add-property').addEventListener('submit',addPropertySubmit);
}