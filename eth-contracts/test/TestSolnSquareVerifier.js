var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var SquareVerifier = artifacts.require('SquareVerifier');
var Config = require("../config/config.js");

contract('SolnSquareVerifier', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];

    const {name, symbol, uri } = Config.token;

    let proof = {
        "A": ["0x854289cd15216e227a1626fbdc2fe0ffce529803af5be51337926b0e49ef481", "0x24a2f03f55aa0f11c987bdb7c58c3b50b9b898039cf62cfdab69e07837b585cb"],
        "A_p": ["0x431fd81525b644ef5965679ee0a7a4f756ce9f2a655bd38b9b9b911f6c7abf", "0x29ae929d68f18ec647ba4a61bd518b427dcfcc8168aacb7f398f424dd087593f"],
        "B": [["0x2a29339d1345909531fa8ed9d4b12bcc80064b718598b8250739309c828a95d0", "0x2e1ee2ea536e6f9be1136d6901f89fd77304b5e413323e617f87135120dd3073"], ["0x1338fead9b7a781f5b505b6bf1ec0d1d9323b073ef139d3b89dd0ce71e70efc4", "0xadcd229f4f3587690b91f02350c7fe180bc89df91417fc8fe1e36e385aa4328"]],
        
        "B_p": ["0x2accfcc2da3643e8099f34c9214e958e3b9763a749786b3226980270cb69c46f", "0x98e9a5611bb8f7bc9a32951c31efec32b8c7892af3c5e435624347a6e7f9327"],
        "C": ["0xdeaf4e82fa66da2c239ae290c7dfe3fe924304d1ccf3b64d7100befa9bc605f", "0x221829875c68554e6c8bc03f59508b588159c9dec75dee522d00d593c58b3397"],
        "C_p": ["0x12c2ea64ee787db156db4abe8578a4cc7560ad8161014d4c8a10520b6de776d5", "0x9fe8cb20d490d88294649ba87739b8876ff512f1464de7ef1067dfa6e79641"],
        "H": ["0x274ae54d33b2d45f7ecd4ebb089b350b1aa9097b58161bad93accb742c67cac5", "0x4c8d2618ce87e42f733f860a7078396239d55857de7dc49712a10c23bf44cf9"],
        "K": ["0x1d39aa0cb931e1e1099401e2e52d3d9061708fd57ddf697af2b2d77151336a21", "0x5711472998eaa00acd8c4cdf98b141d0b86666d8d1c5ff37d4288b290f257a6"],
        "input":[9,1]
    };

    describe('testing SolnSquareVerifier', function () {
        beforeEach(async function () {
            SquareVerifierContract = await SquareVerifier.new({from: account_one});
            this.contract = await SolnSquareVerifier.new(name, symbol, uri, SquareVerifierContract.address, {from: account_one});
        })

        // Test if a new solution can be added for contract - SolnSquareVerifier
        // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
        it('Test if an ERC721 token can be minted for contract - SolnSquareVerifier', async function () {
            let mintTokenId = 1;
            await this.contract.mintToken(account_two, mintTokenId,
                proof.A,
                proof.A_p,
                proof.B,
                proof.B_p,
                proof.C,
                proof.C_p,
                proof.H,
                proof.K,
                proof.input,
                {from: account_one}
                );

            let mintedTokenOwner = await this.contract.ownerOf.call(mintTokenId);
            let minterBalance = await this.contract.balanceOf.call(account_two);

            assert.equal(mintedTokenOwner, account_two, "Token wasn't minted for the caller");
            assert.equal(minterBalance, 1, "Minter doesn't own any tokens");
        })

        it('Solution has to be unique for the token to be minted', async function () {
            let mintTokenId = 2;
            try {
            await this.contract.mintToken(account_two, mintTokenId,
                proof.A,
                proof.A_p,
                proof.B,
                proof.B_p,
                proof.C,
                proof.C_p,
                proof.H,
                proof.K,
                proof.input,
                {from: account_one}
                );
            } catch (error) {
                //console.log(error)
            }
            minterBalance = await this.contract.balanceOf.call(account_two);    
            
            assert.equal(minterBalance, 1, "Token was minted with an already used proof");
        })

        it('Solution has to be valid for the token to be minted', async function () {
            let mintTokenId = 3;
            try {
            await this.contract.mintToken(account_three, mintTokenId,
                proof.C,
                proof.A_p,
                proof.B,
                proof.B_p,
                proof.A, //Exchanged for C
                proof.C_p,
                proof.H,
                proof.K,
                proof.input,
                {from: account_one}
                );
            } catch (error) {
                //console.log(error)
            }
            minterBalance = await this.contract.balanceOf.call(account_three);    
            
            assert.equal(minterBalance, 0, "Token was minted with an invalid proof");
        })
    });
})