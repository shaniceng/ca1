import { ethers } from 'ethers';

async function retrieveHolders() {
  // Addresses to look up
  const addresses = [
    '0xb5d4f343412dc8efb6ff599d790074d0f1e8d430',
    '0x0020c5222a24e4a96b720c06b803fb8d34adc0af',
    '0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392'
  ];

  // Connect to the Binance Smart Chain network
  const provider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed.binance.org/');

  // Load the $SWTH token contract
  const contractAddress = '0xc0ecb8499d8da2771abcbf4091db7f65158f1468';
  const abi = [
    'function balanceOf(address account) view returns (uint256)',
  ];
  const contract = new ethers.Contract(contractAddress, abi, provider);

  // Get the balance of each address and output the results
  for (const address of addresses) {
    const balance = await contract.balanceOf(address);
    const balanceAsNumber = parseFloat(ethers.utils.formatUnits(balance, 8));
    console.log(`${address} ${balanceAsNumber.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 8 })}`);
  }
}

retrieveHolders();