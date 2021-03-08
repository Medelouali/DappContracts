const DappToken=artifacts.require("./DappToken.sol");

contract("DappToken", function(accounts){
    var  tok;

    it("Testing the erc20 token name", function(){
        DappToken.deployed().then(function(inst){
            return inst.name()
        }).then(function(name){
            assert.equal(name, "Dapp Token", "It's correct, the names matche");
        });
    });

    it("Testing the erc20 token symbol", function(){
        DappToken.deployed().then(function(inst){
            return inst.symbol()
        }).then(function(sym){
            assert.equal(sym, "Dapp", "It's correct, the symbols matche");
        });
    });

    it("Running test against the DappToken contract", function(){

        return DappToken.deployed().then(function(token){
            tok=token;
            return token.tokenNum().then(function(n){
                return n.toNumber();
            });
        }).then(function(balance){
            assert.equal(balance, 1000000);
            return tok.balanceOf(accounts[0]);  
        }).then(function(sum){
            assert.equal(sum, 1000000);
        });
    });

    it("testing the transfer function", function(){
        DappToken.deployed().then(function(instance){
            return instance.transfer.call(accounts[2], 99);
        }).then(function(flag){
            assert.equal(flag, true);
        });
    });

});