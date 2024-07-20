# WAX Power Up Automation Script

This script automates the process of sending a power up transaction on the WAX POWER UP Mechanism every 24 hours and 59 minutes using Node.js and the `@wharfkit/session` package.

![LOGO](https://github.com/user-attachments/assets/ee1bcb66-cbe7-4926-b4ae-f8c2a658d782)

## Prerequisites

- Node.js installed on your machine.
- A WAX account.
- Private key associated with your WAX account.
- The following npm packages:
  - `@wharfkit/session`
  - `@wharfkit/wallet-plugin-privatekey`
  - `node-cron`

## Setup

1. Clone this repository or download the script file.
2. Open a terminal and navigate to the directory containing the script.
3. Install the required packages by running:

    ```sh
    npm install @wharfkit/session @wharfkit/wallet-plugin-privatekey node-cron
    ```

4. Open the script file and replace the placeholders with your actual data:

    ```javascript
    // Replace with your actual WAX wallet address
    const accountName = 'WAX_WALLET_ADDRESS';

    // Replace with the permission name, typically 'active' or 'owner'
    const permissionName = 'PERMISSION_NAME';

    // Replace with your actual private key
    const privateKey = 'PRIVATE_KEY';

    // Replace with the appropriate CPU fraction needed for the power up
    const cpuFrac = 66732210668;

    // Replace with the maximum payment amount you are willing to transfer
    const maxPayment = '1.98312389 WAX';

    // Replace with the payer's wallet address
    const payerAddress = 'PAYER_ADDRESS';

    // Replace with the receiver's wallet address
    const receiverAddress = 'RECEIVER_ADDRESS';
    ```

## Running the Script

1. Save the changes to the script file.
2. Run the script by executing:

    ```sh
    node script.js
    ```

## Configuration Details

- **WAX Mainnet Chain ID**: The script is configured to interact with the WAX Mainnet.
- **Endpoint**: The endpoint used is `https://wax.greymass.com`.

## CPU COST CALC AS 

-------------------------
cpu_frac: 22021630
days: 1
max_payment: 0.00175947 WAX
COST: 0.00117296 
STAKED_WAXP: 1

So, For every 1 WAX You wanted to get staked you need to pay 0.00117296 WAX and write this much cpu_frac: 22021630 for more you can multiply as per your needs !
--------------------------

# FOR ANY KIND OF HELP CONTACT : ```0xphatom``` on Discord https://discord.com/users/979641024215416842


