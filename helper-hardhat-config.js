const networkConfig = {
	5: {
		name: "goerli",
		ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
	},
	31337: {
		name: "localhost",
	},
};

const developmentChains = ["hardhat", "localhost"];

const INITIAL_SUPPLY = "1000000000000000000000000";

module.exports = { networkConfig, developmentChains, INITIAL_SUPPLY };
