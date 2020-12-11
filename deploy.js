const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {  bytecode, interface } = require('./compile');
console.log(interface);
const provider = new HDWalletProvider(
 'YOUT_MYNOMIC_PHARSE',
 'YOUR_NODE_API_LINK'
); 

const web3 = new Web3(provider); 

const deploy = async () => {
	const accounts = await web3.eth.getAccounts(); 

	console.log('Attemping to deploy from account', accounts[0]); 

	const result = await new web3.eth.Contract(JSON.parse(interface))
	.deploy({ data:bytecode }) 
	.send({ gas: '1000000', from: accounts[0] }) 

	console.log('Contract deployed to', result.options.address);
};
deploy();
/*
Attemping to deploy from account 0x31Ae519999B2b0F18547d1137FB546dDb118555B
Contract deployed to 0x26B8d32A6d315Eba2214A46A21e92eC470fEB1aa
*/