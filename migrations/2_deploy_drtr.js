const DRTRToken = artifacts.require("Crypt2Token");

module.exports = async function (deployer) {
    let tokenURI = "";
    let contractURI = ""

    console.log("tokenURI", tokenURI);
    console.log("contractURI", contractURI);

    await deployer.deploy(DRTRToken, tokenURI, contractURI);
};
