import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {parseEther} from 'ethers/lib/utils';
import {artifacts} from 'hardhat';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;

  const {deployer} = await getNamedAccounts();

  const quantToken = await deploy('QuantToken', {
    from: deployer,
    args: [],
    log: true,
  });

  const c = artifacts.readArtifact('TestToken');
  //console.log(c);
  await deploy('MasterChef', {
    from: deployer,
    args: [
      quantToken.address,
      '0x10e38dfffcfdbaaf590d5a9958b01c9cfcf6a63b',
      '0x10e38dfffcfdbaaf590d5a9958b01c9cfcf6a63b',
      11,
      134,
    ],
    log: true,
  });
};
export default func;
func.tags = ['deploy_all'];
