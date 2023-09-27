const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();
const previousBlockHash = 'OINAISDASDASDASD';
const currentBlockData = [
    {
        amount : 10,
        sender : 'ALEXHT845SJ5TKCJ2',
        recipient : 'JENN5BG5DF6HT8NG9z'
    },
    {
        amount : 300,
        sender : 'ASDASD1AS21DD',
        recipient : 'QTQWRDASDASD'
    },
    {
        amount : 800,
        sender : 'ASDASD1QW56R1QW',
        recipient : 'ASFGQEGQEGNASD'
    }
];
console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 74406));
// console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
// bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);


// bitcoin.createNewBlock(789457, 'SDASDAWQWFGQAWF2001', '78ASDASDQWR56');

// bitcoin.createNewTransaction(100, 'ALEXHT845SJ5TKCJ2', 'JENN5BG5DF6HT8NG9');

// bitcoin.createNewBlock(548764, 'AKCASDAS1ADS59', 'WPLDASD1ASD1SAG2');

// bitcoin.createNewTransaction(50, 'ALEXHT845SJ5TKCJ2', 'JENN5BG5DF6HT8NG9');
// bitcoin.createNewTransaction(200, 'ALEXHT845SJ5TKCJ2', 'JENN5BG5DF6HT8NG9');
// bitcoin.createNewTransaction(300, 'ALEXHT845SJ5TKCJ2', 'JENN5BG5DF6HT8NG9');

// bitcoin.createNewBlock(15115, 'WPLDASD1ASD1SAG2', 'ASFCASQW131WE');
// console.log(bitcoin.chain[2]);