const TestToken = artifacts.require("TestToken");
const TokenBalanceReader = artifacts.require("TokenBalanceReader");

module.exports = async function (deployer) {
	await deployer.deploy(TestToken);
	await deployer.deploy(TokenBalanceReader);
};
