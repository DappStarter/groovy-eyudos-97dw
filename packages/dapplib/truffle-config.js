require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess nature swift undo name razor total prosper hunt office army genuine'; 
let testAccounts = [
"0x562a48f41d03db8f04b834c1ebb5d99d4ec2c4cf4671e1ada3c2d3e4db7a9555",
"0x17a3e27b6fcf8725c6a8e880dbaa289b92f3dc5e59d78458e2bb9a2ab4221925",
"0xefe2f8b8a743e57bb3d15dd6a15b6ce853fedc5f25fcab48fe9bc545f85f505f",
"0xd84973e1fef313afeaa16536f8efcbdeed31930e11630ff4a2fbd625b40de24b",
"0xeb71f2c68e580e449e8677f09843c62acd47a07b59b8556527c63897ddcee1f1",
"0x92624de3ae2fde897287d6e5f90f51a276964daf2ef1f319595a587540e63360",
"0x7cc47f684e43db0ab43f9d5991f7e41e813eba2a302a86ff13306f2745a9c079",
"0x85ecd48cf87381be06a1e170abecda9d6105fa688e6f200f2391fe5723e38c0d",
"0xced1640c7ecb42b1456f87e0e9c274108da990cab106921e6603694c43cd4ad6",
"0xaad3e3d29831d2d9315c4a99b6650077f0440e9a1f65cebb0d2e03ec1ef78b7f"
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
            version: '^0.8.0'
        }
    }
};

