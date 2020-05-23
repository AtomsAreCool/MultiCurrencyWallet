// Uncomment this for enable custom erc20 tokens

window.widgetERC20Tokens = {
  // Symbol of ERC20 token in lowerCase
  belifex: {
    // Address of ERC20 contract
    address: '0xb91c2a2b953d72f3ef890490669a0a41b0add5f7',
    // Count of decimals after dot
    decimals: 8,
    // Display name in wallet (By default - its symbol of ERC20, but can be other userfriendy text)
    fullName: 'Belifex',
    // Icon of currency (image)
    icon: 'https://belifex.com/assets/befx.png',
    // Background color of icon
    iconBgColor: '#ccc',
  },
  usdt: {
    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    decimals: 6,
    fullName: 'Usdt'
  },
}
*/

// Uncomment this for enable comisions
window.widgetERC20Comisions = {
  btc: {
    fee: 1,   // percent from withdraw amount
    address: '3ER1nNvcqM2o5d77HvU2cx3qaiKEJqj1nG',  // wallet for fee
    min: 0.00001 // minimal fee amount
  },
  eth: {
    fee: 1,
    address: '0x78D2a5611a726A9FfE297174edEff9F07012EC5F',
    min: 0.01
  },
  erc20: {
    fee: 1,
    address: '0x78D2a5611a726A9FfE297174edEff9F07012EC5F',
    min: 1,
  }
}
*/
window.buildOptions = {
  showWalletBanners: true, // Allow to see banners
} 
