module.exports = {
  formatCurrency: (value) => {
    value = "$" + value.replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1,');

    if(value.indexOf('.') === -1)
        return value + '.00';

    var decimals = value.split('.')[1];

    return decimals.length < 2 ? value + '0' : value;
  }
}
 