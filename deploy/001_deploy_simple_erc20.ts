import {HardhatRuntimeEnvironment} from "hardhat/types";
import {DeployFunction} from "hardhat-deploy/types";
import {utils} from "ethers";
import {deploy} from "../utils/utils";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;

  const {deployer, simpleERC20Beneficiary} = await getNamedAccounts();

  await deploy(
    hre,
    "simpleERC20",
    "SimpleERC20",
    [simpleERC20Beneficiary, utils.parseEther("1000000000")],
    false
  );
};
export default func;
func.tags = ["SimpleERC20"];
