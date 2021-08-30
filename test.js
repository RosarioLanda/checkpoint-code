const Blockchain = require('./blockchain.js');

const stonecoin = new Blockchain(); //makes a new instance (or Brand) of our blockchain data structure (module)

// console.log(stonecoin);

//remember .createNewBlock() needs these 3 parameters: nonce, previousBlockHash, hash
stonecoin.createNewBlock(12342, 'Q340NAPGAGB', 'AAJABJSABBOB0');
stonecoin.createNewBlock(5365, 'UJJAGJIAJIAD', 'PAJJDKJJJJ');
stonecoin.createNewBlock(8676, 'GYYY899UB0A9', 'ZJJPAJPOGOIOI');

stonecoin.createNewTransaction(100, 'SEND9AB8AJBAPDI', 'RECAOIJBAB0SSA');
stonecoin.createNewTransaction(20, 'ND9AB8ASDFASBAPDI', 'AGABRECAOIJBAB0SSA');
stonecoin.createNewTransaction(1, 'SEND9AB8AJBAPDI', 'SEND9AB8AJBAPDI');
stonecoin.createNewTransaction(17, 'SENDB8AJBAPDI', 'RECAOIJBAB0SSA');

const previousBlockHash = 'A9089AUD8A8UA8GSDA';
const currentBlockData = [{
        "amount": 50,
        "sender": "ALEX00IIO99GHAHBA1",
        "recipient": "RODRIGOOOIJOI9ABAABAS1",
    },
    {
        "amount": 150,
        "sender": "ALEX00IIO99GHAHBA2",
        "recipient": "RODRIGOOOIJOI9ABAABAS2",
    },
    {
        "amount": 5,
        "sender": "ALEX00IIO99GHAHBA3",
        "recipient": "RODRIGOOOIJOI9ABAABAS3",
    }
];
// const nonce = 100;


let nonce = stonecoin.proofOfWork(previousBlockHash, currentBlockData);
console.log('nonce from Proof of Work : ' + nonce);

console.log(stonecoin.hashBlock(previousBlockHash, currentBlockData, nonce));

console.log(stonecoin);

// console.log(stonecoin.newTransactions[stonecoin.newTransactions.length - 1]);