// Mirror contracts
import Collector from './collector';
import Factory from './factory';
import Gov from './gov';
import Mint from './mint';
import Oracle from './oracle';
import Staking from './staking';
import MirrorToken from './mirror-token';

// Terraswap contracts
import TerraswapFactory from './terraswap';
import Token from './token';

export const mirror = [
  Collector,
  Factory,
  Gov,
  Mint,
  Oracle,
  Staking,
  MirrorToken,
];

export const terraswap = [TerraswapFactory, Token];
