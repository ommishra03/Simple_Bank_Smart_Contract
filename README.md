# Functions-and-Errors---ETH-AVAX
# Simple Bank Smart Contract

This project is a simple bank smart contract written in Solidity. It allows users to deposit, withdraw, and transfer funds between accounts. It also includes a demonstration of the `revert` function.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Truffle](https://www.trufflesuite.com/truffle)
- [Ganache](https://www.trufflesuite.com/ganache) (or any other Ethereum test network)
- [MetaMask](https://metamask.io/) (for interacting with the contract)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/simple-bank.git
   cd simple-bank
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Compile the contract:
   ```bash
   truffle compile
   ```

4. Deploy the contract to the network:
   ```bash
   truffle migrate
   ```

## Usage

### Deposit Funds

To deposit funds into your account, call the `Deposit` function and send some Ether along with the transaction.

### Withdraw Funds

To withdraw funds from your account, call the `Withdrawal` function with the amount you wish to withdraw.

### Transfer Funds

To transfer funds to another account, call the `Transfer` function with the recipient's address and the amount you wish to transfer.

### Demonstrate Revert

To demonstrate the revert function, call the `Refund` function. This will revert the transaction with an error message.

## Functions

`Deposit`: Allows users to deposit Ether into their account.
`Withdrawal`: Allows users to withdraw Ether from their account.
`Transfer`: Allows users to transfer Ether to another account.
`Refund`: Demonstrates a revert function with an error message.

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request

## Author
Name - [Om Mishra](ommishra03)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
