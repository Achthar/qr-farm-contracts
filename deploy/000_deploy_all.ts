import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {parseEther} from 'ethers/lib/utils';
import {ethers} from 'ethers';
import {artifacts} from 'hardhat';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy, execute} = deployments;

  const {deployer} = await getNamedAccounts();

  /*const quantToken = await deploy('QuantToken', {
    from: deployer,
    args: [],
    log: true,
  });*/

  const quantToken = await deploy('Timelock', {
    from: deployer,
    args: ['0x10e38dfffcfdbaaf590d5a9958b01c9cfcf6a63b', 1],
    log: true,
  });

  const masterChef = await deploy('MasterChef', {
    from: deployer,
    args: [
      quantToken.address,
      '0x10e38dfffcfdbaaf590d5a9958b01c9cfcf6a63b',
      '0x10e38dfffcfdbaaf590d5a9958b01c9cfcf6a63b',
      1,
      11966425,
    ],
    log: true,
  });

  await execute(
    'QuantToken',
    {from: deployer, log: true},
    'transferOwnership',
    masterChef.address
  );
};
export default func;
func.tags = ['deploy_all'];
