import {HardhatRuntimeEnvironment} from "hardhat/types";
import {DeployFunction} from "hardhat-deploy/types";
import {deploy} from "../utils/utils";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployer} = await hre.getNamedAccounts();

  await deploy(
    hre,
    "greetingsRegistryWithProxy",
    "GreetingsRegistry",
    [2],
    true
  );

  await deploy(
    hre,
    "greetingsRegistryNonProxy",
    "GreetingsRegistry",
    [3],
    false
  );
};
export default func;
func.id = "deploy_greetings_registry"; // id required to prevent reexecution
func.tags = ["GreetingsRegistry"];
