const Contracts = artifacts.require("./DappToken.sol");

module.exports = function (deployer) {
  deployer.deploy(Contracts, 1000000);
};