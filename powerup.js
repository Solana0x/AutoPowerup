const { Session } = require('@wharfkit/session');
const { WalletPluginPrivateKey } = require('@wharfkit/wallet-plugin-privatekey');
const cron = require('node-cron');

const chain = {
  id: '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4',  // WAX Mainnet chain ID
  url: 'https://wax.greymass.com',  // WAX Mainnet endpoint
};

// Account and Permission Configuration
const accountName = 'WAX_WALLET_ADDRESS';  // Replace with your actual account name
const permissionName = 'PERMISSION_NAME';  // Change to 'owner' if required


const privateKey = 'PRIVATE_KEY';  // Replace with your actual private key
const walletPlugin = new WalletPluginPrivateKey(privateKey);

const session = new Session({
  actor: accountName,
  permission: permissionName,
  chain,
  walletPlugin,
});


// Define the Actions
const actions = [
  {
    account: 'eosio',
    name: 'powerup',
    authorization: [{
      actor: accountName,
      permission: permissionName,
    }],
    data: {
      cpu_frac: 66732210668, // Replace with the CPU needed calc for that is written in the readme.md fole
      days: 1,  // Replace with the receiver's account name
      max_payment: '1.98312389 WAX',  // Replace with the max amount you want to transfer
      net_frac: 0,
      payer: 'PAYER_ADDRESS', // Replace with the payer wallet address 
      receiver: 'RECEIVER_ADDRESS', // Replace with the receiver wallet address
    },
  },
];

async function sendTransactionWithResourceProvider() {
  try {
    console.log('Starting transaction...');
    const result = await session.transact({ actions });
    console.log('Transaction was successfully broadcast!');
    console.log(`Explorer Link: https://wax.bloks.io/transaction/${result.response.transaction_id}`);
  } catch (error) {
    console.error('ERROR CODE :', error.code);
    console.log('ERROR MESSAGE: ', error.message);
  }
}

// Initial test call to ensure the transaction works
sendTransactionWithResourceProvider();

// Schedule the function to run every 24 hours and 58 minutes
cron.schedule('59 0 */24 * * *', () => {
  console.log('Executing scheduled transaction...');
  sendTransactionWithResourceProvider();
});

console.log('Cron job scheduled to run every 24 hours and 59 minutes.');
