const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();
bitcoin.createNewBlock(789457, 'SDASDAWQWFGQAWF2001', '78ASDASDQWR56');

bitcoin.createNewTransaction(100, 'ALEXHT845SJ5TKCJ2', 'JENN5BG5DF6HT8NG9');

bitcoin.createNewBlock(548764, 'AKCASDAS1ADS59', 'WPLDASD1ASD1SAG2');

bitcoin.createNewTransaction(50, 'ALEXHT845SJ5TKCJ2', 'JENN5BG5DF6HT8NG9');
bitcoin.createNewTransaction(200, 'ALEXHT845SJ5TKCJ2', 'JENN5BG5DF6HT8NG9');
bitcoin.createNewTransaction(300, 'ALEXHT845SJ5TKCJ2', 'JENN5BG5DF6HT8NG9');

bitcoin.createNewBlock(15115, 'WPLDASD1ASD1SAG2', 'ASFCASQW131WE');
console.log(bitcoin.chain[2]);