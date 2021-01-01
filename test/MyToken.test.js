const MyToken = artifacts.require("MyToken");

contract("MyToken", (accounts) => {
  var tokenInstance;
  describe("token attributes", () => {
    it("has the correct name", () => {
      return MyToken.deployed()
        .then((result) => {
          tokenInstance = result;
          return tokenInstance.name();
        })
        .then((name) => {
          assert.equal(name, "MyToken");
        });
    });
    it("has the correct symbol", () => {
      return MyToken.deployed()
        .then((result) => {
          tokenInstance = result;
          return tokenInstance.symbol();
        })
        .then((symbol) => {
          assert.equal(symbol, "MT");
        });
    });
    it("has the correct decimals", () => {
      return MyToken.deployed()
        .then((result) => {
          tokenInstance = result;
          return tokenInstance.decimals();
        })
        .then((decimals) => {
          assert.equal(decimals.toNumber(), 18);
        });
    });
  });
});
