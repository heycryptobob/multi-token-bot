import numeral from 'numeral'

function internalFormat(data) {

  const price = numeral(data.price).format('0.00000000')
  const marketCap = numeral(data.marketCap).format('0,0')

  let msg = ""
  msg += `<code>${data.symbol}</code>\n`
  // msg += `<strong>Total Supply</strong>: ${data.totalSupply}\n`
  msg += `<strong>Price</strong>: $${price}\n`
  msg += `<strong>MarketCap</strong>: $${marketCap}\n`
  msg += `\n`
  return msg
}

// function getWinner(inputs) {
//   const result = inputs.sort((a, b) => {
//     const fA = parseFloat(a)
//     const fB = parseFloat(b)
//     return (fA > fB) ? 1 : 0
//   })
//   return result[0]
// }

export function format(inputs) {

  let msg = ""
  inputs.forEach(data => { msg += internalFormat(data) })
  return msg
}