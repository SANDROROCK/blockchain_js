const crytpo = require('crypto');

const transaction = require('./src/transaction');

class Block{
    constructor(index,previousBlockHas,previousProof,transaction){
        this.index = index;
        this.proof = previousProof;
        this.previousBlockHas = previousBlockHas;
        this.transaction = transaction;
        this.timestamp = Date.nou();
    }

    hashValue(){
        const {index,proof,transaction,timestamp} = this;
        const blockString = `${index}-${proof}-${JSON.stringify(transaction)}-${timestamp}`;
        const hashFunction = crypto.createHash('sha256');
        hashFunction.update(blockString);
        return hashFunction.digest('hex');
    }

    setProof(proof){
        this.proof = proof;
    }

    getProof(){
        return this.proof;
    }

    getIndex(){
        return this.index;
    }

    getPreviousBlockHash(){
        return this.previousBlockHas;
    }


}

module.exports = Block;