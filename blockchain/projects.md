## Compound

### What is Compound

[Compound](www.compound.finance) is an algorithmic money market protocol on Ethereum that lets users earn interest or borrow assets against collateral. Anyone can supply assets to Compound’s liquidity pool and immediately begin earning continuously-compounding interest. Rates adjust automatically based on supply and demand.

Supplied asset balances are represented by cTokens: representations of the underlying asset that earn interest and serve as collateral. Users can borrow up to 50-75% of their cTokens’ value, depending on the quality of the underlying asset. Users can add or remove funds at any time, but if their debt becomes undercollateralized, anyone can liquidate; a 5% discount on liquidated assets serves as incentive for liquidators.

The Compound protocol sets aside 10% of interest paid as reserves; the rest goes to suppliers. Compound initially launched on mainnet in September 2018 and upgraded to v2 in May 2019. The protocol now supports BAT, DAI, SAI, ETH, REP, USDC, WBTC, and ZRX. Compound has been audited and formally verified. As of May 2020, Compound has transitioned to community governance; COMP token-holders and their delegates debate, propose, and vote on all changes to Compound.

## Maker

### What is Maker

[MakerDAO](www.makerdao.com) is a decentralized credit platform on Ethereum that supports `Dai`, a **stablecoin whose value is pegged to USD**. Anyone can use Maker to open a Vault, lock in collateral such as ETH or BAT, and generate Dai as debt against that collateral. Dai debt incurs a stability fee (i.e., continuously accruing interest), which is paid upon repayment of borrowed Dai. That MKR is burned, along with the repaid Dai. Users can borrow Dai up to 66% of their collateral’s value (150% collateralization ratio). Vaults that fall below that rate are subject to a 13% penalty and liquidation (by anyone) to bring the Vault out of default. Liquidated collateral is sold on an open market at a 3% discount.

Holders of Maker’s other token (MKR) govern the system by voting on, e.g., risk parameters such as the stability fee level. MKR holders also act as the last line of defense in case of a black swan event. If system-wide collateral value falls too low too fast, MKR is minted and sold on the open market to raise more collateral, diluting MKR holders.

Maker also has a feature called the Dai Savings Rate (DSR). DAI holders can lock their DAI into Maker’s DSR contract and earn a variable interest rate in DAI, which is generated from stability fees.

## Synthetix

### What is Synthetix

[Synthetix](https://www.synthetix.io/) is a decentralized platform on Ethereum for the creation of Synths: on-chain synthetic assets that track the value of real-world assets. Born as stablecoin project Havven, Synthetix rebranded and expanded its scope prior to launching on mainnet in February 2019. As of March 2020, the Synthetix platform supports over `30 Synths representing fiat currencies`, commodities (e.g., gold), and cryptoassets. Stocks, indices, and other derivatives are planned.

Synthetix has a native token called `SNX`. Holders can lock in collateral such as SNX and ETH to mint Synths, which are freely tradeable ERC20 tokens. Transaction fees from Synths exchanged on Synthetix’s non-custodial DEX (Synthetix.Exchange) go to SNX holders/Synth minters, incentivizing Synth creation and giving value to the underlying collateral (i.e., the SNX token).

## Balancer
`
### What is Balancer

[Balancer](https://balancer.finance/) is a n-dimensional automated market-maker built on Ethereum. It allows anyone to create or add liquidity to customizable pools and earn trading fees. Instead of the traditional constant product AMM model, Balancer’s formula is a generalization that allows any number of tokens in any weights or trading fees. Another way to view Balancer is as an inverse ETF: instead of paying fees to portfolio managers to rebalance your portfolio, you collect fees from traders, who continuously rebalance your portfolio by following arbitrage opportunities.

Balancer protocol is designed to be composable and has a few types of pools: 1) Private Pools where the only owner can contribute liquidity and has full permissions over the pool, being able to update any of its parameters. 2) Shared Pools where the pool’s tokens, weights, and fees are permanently set and the pool creator has no special privileges. Anyone may add liquidity to shared pools and ownership of the pool’s liquidity is tracked with a specific token called `BPT - Balancer Pool Token`. 3) Smart Pools which are a variation of a private pool where the controller is a smart contract, allowing for any arbitrary logic/restrictions on how pool parameters can be changed. Smart pools may also accept liquidity from anyone and issue BPTs to track ownership.

Balancer was launched in March 2020 and has been audited by Trail of Bits. Balancer recently introduced its `native governance tokens called BAL` which are distributed to liquidity providers through a process called liquidity mining.
