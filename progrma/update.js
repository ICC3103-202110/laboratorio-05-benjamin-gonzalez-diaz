
function update(billAmount,porcentual,Question){
  return {
    ...Question,
    billAmount: billAmount,
    porcentual: porcentual
  }
}
module.exports = {
  update
}