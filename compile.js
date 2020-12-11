const path = require('path');
const fs = require('fs');
const solc = require('solc');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const lotteryPath = path.resolve(__dirname,'contracts','Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Lottery'];

