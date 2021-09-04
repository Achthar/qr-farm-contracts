import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {parseEther} from 'ethers/lib/utils';
import {artifacts} from 'hardhat';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy, execute} = deployments;

  const {deployer} = await getNamedAccounts();

  const greeter = await deploy('Greeter', {
    from: deployer,
    args: ['weird'],
    log: true,
  });
  /*
  const masterChef = await deploy('MasterChef_ERC20', {
    from: deployer,
    args: [
      quantToken.address,
      '0x10e38dfffcfdbaaf590d5a9958b01c9cfcf6a63b',
      '0x10e38dfffcfdbaaf590d5a9958b01c9cfcf6a63b',
      5,
      134,
    ],
    log: true,
  });

  await execute(
    'QuantToken_ERC20',
    {from: deployer, log: true},
    'mint_natural',
    deployer,
    100
  );

   await execute(
    'QuantToken_ERC20',
    {from: deployer, log: true},
    'transferOwnership',
    masterChef.address
  );*/
};

export default func;
func.tags = ['test'];
