const DappToken=artifacts.require("./DappToken.sol");

contract("DappToken", function(accounts){

    it("Running test against the DappToken contract", function(){
        return DappToken.deployed().then(function(instance){
            return instance.tokenNum().then(function(n){
                return n.toNumber();
            });
        }).then(function(n){
            assert.equal(n, 1000000);
        });
    });
});