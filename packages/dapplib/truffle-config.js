require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture bread tail tragic educate ranch remain hole hockey problem breeze ten'; 
let testAccounts = [
"0x6d1f308ab26414d856c95894c90f305e8f3626ff0cae01a67d93637d2b3ed641",
"0x3671c91ce22fe8c81bbe3413bc67abeef1225d14cfa0d2f507319f94e50d6a0a",
"0x744a79fce58cd830a10c95b2ef0554944f456c9fff0c533da16fcc12c1f30761",
"0x2da7ec75d58b10b80478aae293e32cbb28afa5a76ad8cc102785026fbd357622",
"0x6af3f4992ea7c12b4cfea9808dea2a38868ebcae9ba2c7eda68a458b7eb4c453",
"0x8edfe23c712f31abadb1ca4877a5fef891dbce0a479a0f75b92fe5516f1eaaa4",
"0xc66c6f2c1d41f08a9d0b478c7f64c374542510fd4b2825f2ec2ebe32f4b530ca",
"0xe4971cb8008886896f7be2704705262b0e48cbb0e22cca30da51db7e06102c38",
"0x1f1e06b586704c490d43b6e08da10d35d8b3b23e37903c93e5453c0e860ea3ba",
"0x9dbcc2d0d7ac845b7a468e49330ca22cae007e9ca89730a879e990bd361a2e37"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
