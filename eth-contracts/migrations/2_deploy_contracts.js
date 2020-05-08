// migrating the appropriate contracts
var SquareVerifier = artifacts.require("./SquareVerifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
var Config = require("../config/config.js");

module.exports = function(deployer) {
  const {name, symbol, uri } = Config.token;
  deployer.deploy(SquareVerifier).then(() => 
    deployer.deploy(SolnSquareVerifier, name, symbol, uri, SquareVerifier.address)
  );
};
