# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Installation

Download or clone the repo, then:

    npm install

# Testing

Versions used:

    Truffle v5.1.24 (core: 5.1.24)
    Solidity - ^0.4.25 (solc-js)
    Node v10.7.0
    Web3.js v1.2.1

Unit tests are available with:

    truffle compile
    ganache-cli
    cd eth-contracts
    truffle test

# Contract

## Deployed contract on Rinkeby
[Contract Address: 0x56d51dfe039f13cc9901d5dd4a07837af922ace8](https://rinkeby.etherscan.io/address/0x56d51dfe039f13cc9901d5dd4a07837af922ace8)

[EREM Token Tracking: 0x56d51dfe039f13cc9901d5dd4a07837af922ace8](https://rinkeby.etherscan.io/token/0x56d51dfe039f13cc9901d5dd4a07837af922ace8)

## Open sea marketplace

[OpenSea MarketPlace Storefront: eth-real-estate-marketplace](https://rinkeby.opensea.io/assets/eth-real-estate-marketplace)

## Minted tokens

- [Minted token ID: 1](https://rinkeby.etherscan.io/tx/0x0a977d1cc8319a3e35e54a4fa86c601b8db4ad23dd6202459fe17c1e485d4fae)

- [Minted token ID: 2](https://rinkeby.etherscan.io/tx/0xd77c1f0aa6520da7b10824241428c048882e8acc37da7db78e65b9cec5322276)

- [Minted token ID: 3](https://rinkeby.etherscan.io/tx/0x2a35989ad43ea58f7574d7d623686b45050e1d9fdd5b3cf4f9e83b2e3b1f0cc6)

- [Minted token ID: 4](https://rinkeby.etherscan.io/tx/0x502dadcf93e6a0a6e3b7971e50fdb8ffc424479a49e0b26665bca78bf5975634)


## Contract ABI
    [
        {
        "inputs": [
            {
            "internalType": "string",
            "name": "name",
            "type": "string"
            },
            {
            "internalType": "string",
            "name": "symbol",
            "type": "string"
            },
            {
            "internalType": "string",
            "name": "URI",
            "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
            },
            {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
            },
            {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
            },
            {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
            },
            {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": true,
            "internalType": "address",
            "name": "caller",
            "type": "address"
            }
        ],
        "name": "Paused",
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
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": true,
            "internalType": "address",
            "name": "pastOwner",
            "type": "address"
            },
            {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
            }
        ],
        "name": "TransferedOwnership",
        "type": "event"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": true,
            "internalType": "address",
            "name": "caller",
            "type": "address"
            }
        ],
        "name": "Unpaused",
        "type": "event"
        },
        {
        "constant": false,
        "inputs": [
            {
            "internalType": "bytes32",
            "name": "_myid",
            "type": "bytes32"
            },
            {
            "internalType": "string",
            "name": "_result",
            "type": "string"
            }
        ],
        "name": "__callback",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "internalType": "bytes32",
            "name": "_myid",
            "type": "bytes32"
            },
            {
            "internalType": "string",
            "name": "_result",
            "type": "string"
            },
            {
            "internalType": "bytes",
            "name": "_proof",
            "type": "bytes"
            }
        ],
        "name": "__callback",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "internalType": "address",
            "name": "to",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [
            {
            "internalType": "address",
            "name": "owner",
            "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [
            {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
            "internalType": "address",
            "name": "",
            "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [],
        "name": "getBaseTokenURI",
        "outputs": [
            {
            "internalType": "string",
            "name": "",
            "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [],
        "name": "getOwner",
        "outputs": [
            {
            "internalType": "address",
            "name": "",
            "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [
            {
            "internalType": "address",
            "name": "owner",
            "type": "address"
            },
            {
            "internalType": "address",
            "name": "operator",
            "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
            "internalType": "string",
            "name": "",
            "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [
            {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
            "internalType": "address",
            "name": "",
            "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "internalType": "address",
            "name": "from",
            "type": "address"
            },
            {
            "internalType": "address",
            "name": "to",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "internalType": "address",
            "name": "from",
            "type": "address"
            },
            {
            "internalType": "address",
            "name": "to",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            },
            {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "internalType": "address",
            "name": "to",
            "type": "address"
            },
            {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "internalType": "bool",
            "name": "status",
            "type": "bool"
            }
        ],
        "name": "setOperatingStatus",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [
            {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
            "internalType": "string",
            "name": "",
            "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [
            {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
            }
        ],
        "name": "tokenByIndex",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [
            {
            "internalType": "address",
            "name": "owner",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
            }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [
            {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
            "internalType": "string",
            "name": "",
            "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "internalType": "address",
            "name": "from",
            "type": "address"
            },
            {
            "internalType": "address",
            "name": "to",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "internalType": "address",
            "name": "to",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        }
    ]

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
