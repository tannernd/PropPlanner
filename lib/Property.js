const { Expenses, Financials, Income, Market, Mortgage, Property } = require('../models');

class PropertyObj {
constructor (prop_id) {
    const property = Property.findByPk(prop_id,{
        include: [{ model: Expenses }, { model: Financials }, { model: Income }, { model: Market }, { model: Mortgage }]});
    const propertyData = property.get({plain:true})
    
}

}