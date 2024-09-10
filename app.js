const contractAddress = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4';
const abi = [
  [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "deposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawal",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "Deposit",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "Refund",
      "outputs": [],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "Withdrawal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "balance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
];

let web3;
let account;
let contract;

window.onload = async function() {
    // Check if MetaMask is available
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            await ethereum.request({ method: 'eth_requestAccounts' });
            account = (await web3.eth.getAccounts())[0];
            document.getElementById('account').innerText = account;
            contract = new web3.eth.Contract(abi, contractAddress);
            updateBalance();
        } catch (error) {
            console.error(error);
        }
    } else {
        alert('Please install MetaMask to use this DApp!');
    }
};

async function updateBalance() {
    const balance = await contract.methods.balance(account).call();
    document.getElementById('balance').innerText = web3.utils.fromWei(balance, 'ether');
}

async function deposit() {
    const amount = document.getElementById('depositAmount').value;
    if (amount <= 0) return alert('Enter a valid amount!');
    
    await contract.methods.Deposit().send({ from: account, value: web3.utils.toWei(amount, 'ether') });
    updateBalance();
    document.getElementById('status').innerText = `Deposited ${amount} ETH`;
}

async function withdraw() {
    const amount = document.getElementById('withdrawAmount').value;
    if (amount <= 0) return alert('Enter a valid amount!');
    
    await contract.methods.Withdrawal(web3.utils.toWei(amount, 'ether')).send({ from: account });
    updateBalance();
    document.getElementById('status').innerText = `Withdrew ${amount} ETH`;
}

async function transfer() {
    const to = document.getElementById('transferTo').value;
    const amount = document.getElementById('transferAmount').value;
    if (!to || amount <= 0) return alert('Enter valid address and amount!');
    
    await contract.methods.Transfer(to, web3.utils.toWei(amount, 'ether')).send({ from: account });
    updateBalance();
    document.getElementById('status').innerText = `Transferred ${amount} ETH to ${to}`;
}

async function refund() {
    try {
        await contract.methods.Refund().send({ from: account });
    } catch (error) {
        document.getElementById('status').innerText = error.message;
    }
}