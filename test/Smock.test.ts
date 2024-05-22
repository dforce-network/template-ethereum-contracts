import chai, {expect} from "chai";
import hre, {
  ethers,
  deployments,
  getNamedAccounts,
  getUnnamedAccounts,
} from "hardhat";
import {IERC20} from "../typechain-types";
import {setupUsers} from "./utils";
import {
  FakeContract,
  smock,
  MockContract,
  MockContractFactory,
} from "@defi-wonderland/smock";
import {Contract, Signer, utils} from "ethers";

chai.use(smock.matchers);

describe("Smock", async function () {
  let token: FakeContract<IERC20>;
  let totalSupply = ethers.utils.parseEther("10000000");

  async function setupMock() {
    const mockERC20 = await smock.fake<IERC20>("IERC20");

    mockERC20.totalSupply.returns(totalSupply);

    return {
      mockERC20,
    };
  }

  before(async () => {
    ({mockERC20: token} = await setupMock());
  });

  describe("MockERC20", async function () {
    it("totalSupply should return preset value", async () => {
      expect(await token.totalSupply()).eq(totalSupply);
    });
  });
});
