// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;

contract DappToken{
    string public name;
    string public symbol;
    uint256 public tokenNum;
    address minter;
    mapping(address => uint256) public balanceOf;

    constructor(uint256 _initialSupply)public{
        balanceOf[msg.sender]=_initialSupply;
        tokenNum = _initialSupply;
        minter=msg.sender;
        name="Dapp Token";
        symbol="Dapp";
    }

    event Transfer(address indexed _from, address indexed _to, uint256 _amount);

    function transfer(address _to, uint256 _amount) public returns(bool sucess){
        require(minter == msg.sender, "Anauthorized Transaction");
        require(_amount<=balanceOf[msg.sender], "Insufficient amount");
        balanceOf[msg.sender]-=_amount;
        balanceOf[_to]+=_amount;
        emit Transfer(msg.sender, _to, _amount);
        return true;
    }
}
