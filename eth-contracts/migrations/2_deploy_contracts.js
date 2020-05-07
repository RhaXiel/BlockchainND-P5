// migrating the appropriate contracts
var SquareVerifier = artifacts.require("./SquareVerifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function(deployer) {
  deployer.deploy(SquareVerifier);
  deployer.deploy(SolnSquareVerifier, "ETH Real Estate Marketplace", "EREM", "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/");
};
