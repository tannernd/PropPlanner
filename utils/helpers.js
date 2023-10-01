module.exports = {
  formatCurrency: (value) => {
    value = "$" + value.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1,');

    if(value.indexOf('.') === -1)
        return value + '.00';

    var decimals = value.split('.')[1];

    return decimals.length < 2 ? value + '0' : value;
  },
  select:( selected, options ) => {
    return options.fn(this).replace(
      new RegExp(' value=\"' + selected + '\"'),
      '$& selected="selected"');
  },
  ipp: (index) => parseInt(index) + 1,
  limit: (value, length) => value.toString().slice(0, length),
  suffix: (value, character) => (value.toString().endsWith(character)) ? value : value.toString() + character
}
