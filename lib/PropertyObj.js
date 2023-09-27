const { Expenses, Financials, Income, Market, Mortgage, Property } = require('../models');

class PropertyObj {
constructor (prop_id) {
    const property = Property.findByPk(prop_id,{
        include: [{ model: Expenses }, { model: Financials }, { model: Income }, { model: Market }, { model: Mortgage }]});
    const propertyData = property.get({plain:true})
    
    this.prop_id = propertyData.prop_id;
    this.user_id = propertyData.user_id;
    this.prop_name = propertyData.prop_name;
    this.prop_desc = propertyData.prop_desc;
    this.prop_type = propertyData.prop_type;
    this.prop_address1 = propertyData.prop_address1;
    this.prop_address2 = propertyData.prop_address2;
    this.prop_city = propertyData.prop_city;
    this.prop_state = propertyData.prop_state;
    this.prop_zip = propertyData.prop_zip;
    this.prop_year = propertyData.prop_year;
    this.prop_status = propertyData.prop_status;
    this.prop_totalunits = propertyData.prop_totalunits;
    this.prop_purchase_date = propertyData.prop_purchase_date;
    this.prop_sell_date = propertyData.prop_sell_date;
    this.expenses = propertyData.expenses;
    this.financial = propertyData.financials;
    this.income = propertyData.incomes;
    this.market = propertyData.markets;
    this.mortgage = propertyData.mortgages
}

}