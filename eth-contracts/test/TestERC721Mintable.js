var RealStateERC721Token = artifacts.require('RealStateERC721Token');
var Config = require("../config/config.js");

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    const minter1 = accounts[2];
    const minter2 = accounts[3];
    const minter3 = accounts[4];
    
    const {name, symbol, uri} = Config.token;

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await RealStateERC721Token.new(name, symbol, uri,  {from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(minter1, 1, {from: account_one});
            await this.contract.mint(minter2, 2, {from: account_one});
            await this.contract.mint(minter2, 3, {from: account_one});
            await this.contract.mint(minter3, 4, {from: account_one});
            await this.contract.mint(minter3, 5, {from: account_one});
        })

        it('should return total supply', async function () { 
            let totalSupply = await this.contract.totalSupply.call();
            assert.equal(totalSupply.toNumber(), 5, "Incorrect total supply");
        })

        it('should get token balance', async function () { 
            const balance1 = await this.contract.balanceOf.call(minter1);
            const balance2 = await this.contract.balanceOf.call(minter2);
            const balance3 = await this.contract.balanceOf.call(minter3);
            assert.equal(balance1, 1, "Incorrect balance1");
            assert.equal(balance2, 2, "Incorrect balance2");
            assert.equal(balance3, 2, "Incorrect balance3");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let uri3 = await this.contract.tokenURI.call(3); //tokenId
            let uri4 = await this.contract.tokenURI.call(4);
            assert.equal(uri3, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/3", "Incorrect uri3");
            assert.equal(uri4, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/4", "Incorrect uri5");
        })

        it('should transfer token from one owner to another', async function () { 
            let transferTokenId = 3;
            let currentOwner = await this.contract.ownerOf.call(transferTokenId);
            assert.equal(currentOwner, minter2, "Address 2 doesn't own this token");

            await this.contract.transferFrom(minter2, minter3, transferTokenId, {from: minter2});

            let newOwner = await this.contract.ownerOf.call(transferTokenId);
            assert.equal(newOwner, minter3, "Transfer wasn't successful");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await RealStateERC721Token.new(name, symbol, uri, {from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let unauthorized = false;
            try {
                await this.contract.mint(minter1, 1, {from: minter1});
            } catch (error) {
                unauthorized = true;
            }
            assert.equal(unauthorized, true, "The contract has been compromised!");
        })

        it('should return contract owner', async function () { 
            const contractOwner = await this.contract.getOwner.call();
            assert.equal(contractOwner, account_one, "Incorrect contract owner");
        })

    });
})