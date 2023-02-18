// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface IERC20Custom {
    function balanceOf(address account) external view returns (uint256);
}

contract TokenBalanceReader {
    function getBalances(address _address, address[] calldata _tokens) external view returns (uint256[] memory) {
        uint256[] memory balances = new uint256[](_tokens.length);
        for (uint i = 0; i < _tokens.length; i++) {
            IERC20Custom token = IERC20Custom(_tokens[i]);
            balances[i] = token.balanceOf(_address);
        }
        return balances;
    }
}