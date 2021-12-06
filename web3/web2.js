const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");

const mnemonic = "12 kelimelik özel anahtar";
const provider = new HDWalletProvider(mnemonic,"infura bağlantı linki", 9);
const web3 = new Web3(provider);
let itemCount = 0;

let a
// Kontrat ABI
let contract = new web3.eth.Contract([
        {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
        },
        {
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
                                "name": "id",
                                "type": "uint256"
                        },
                        {
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                        },
                        {
                                "internalType": "bytes",
                                "name": "data",
                                "type": "bytes"
                        }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
        },
        {
                "inputs": [
                        {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                        }
                ],
                "name": "uri",
                "outputs": [
                        {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                        }
                ],
                "stateMutability": "view",
                "type": "function"
        }
], "Kontrat adresi");

async function mintItem(address, collection, amount){

        contract.methods.mint(address, collection, amount, []).send({from:"Basma adresi", gas:100000});
}

async function numberMinted(address, collection){

        contract.methods.balanceOf(address, collection).call().then((value) => {console.log(address, value)});
}

mintItem("Adres",0,1); 
numberMinted("Adres",0);