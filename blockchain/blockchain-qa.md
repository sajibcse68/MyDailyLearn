### Why gas fee, what is mining?

When tokens are sent over the network, each node in the network can propose new entries to be added to the ledger. These nodes validate transactions and compete with each other to solve a complex computational puzzle. In this process, they have to collect all recent network transactions, including some metadata, verify the transactions, guess a pseudo random number (**'nonce'**), and run all the data trough a `cryptographic algorithm (SHA-256)` to find the hash of the new block. This means that they have to perform computational work, which is the reason why this process is referred to as `"Proof-of-Word"`.

If a node is the first one in the network to find the hash value, it can add the block to its ledger and broadcast the hash value of the new block, including all the block data, to the rest of the network. The nodes can now verify the validity of the hash. If they accept this newly added block of transactions as valid, they add the new block to their copy of the ledger.

Proof-of-Work is designed in a way that the hash is difficult to find, whereas the solutions can be easily verified as true. By participating in this race of finding the hash value, mining nodes collectively make sure that all transactions included in a block are valid. The winning node is rewarded with the "block reward" in the form of newly minted network tokens (plus potential transaction fee / gas fee). This is why the process is referred to as "mining"!


### How to adjust the difficulty of finding a hash value?

The “difficulty” of finding that hash value, and therefore creating a block, adjusts over time in order to keep the interblock-time of 10 minutes4 relatively constant. It is adjusted periodically as a function of how much hashing power has been deployed by the network of miners. If blocks are
created in less time than 10 minutes, difficulty increases. Likewise, if blocks take longer than 10 minutes to be created, difficulty decreases. Difficulty also increases with the level of competition—the number of other computers competing to validate a block.

### What is DEX?

DEX stands for `“decentralized exchange”` and refers to a platform that enables the peer to peer trading of digital assets, otherwise known as cryptocurrencies. A DEX runs on a decentralized or ‘distributed’ database, called a `Blockchain`.

Users sign up to a DEX via a web or mobile app. Then, they can use it to exchange digital assets anonymously with other traders all over the globe, 24/7, and in real-time.

Each DEX has many different trading pairs available for exchange, for example, Bitcoin and Ethereum, or XLM and USDT. Because the trades are happening on a decentralized exchange using a blockchain ledger, they happen very quickly, cheaply, and from any location or time zone.

### What are the 6 Methods of ERC20 Standard Tokens?

1. totalSupply
2. balanceOf
3. transfer
4. transferFrom
5. approve
6. allowance

### Coin vs Token vs Blockchain vs Protocol

Blockchain is the general technology. Then there are different protocols based on blockchain, and finally you have tokens for the various applications on a protocol.

Very broadly, a crypto `coin` is just that: a coin, or means of payment, whilst a `token` has wider functionality.

Coins are native to their own blockchain. Whilst tokens have been built on top of another blockchain, like Ethereum, NEO, or Waves.

Coins are most often used simply as money; however, some coins do have other uses. These include being used to fuel applications, being used as a stake to validate a transaction on a network, or being used to fuel smart contract and token transactions.

Tokens serve a different purpose. If they were created to be used on a dApp, then their purpose will depend on the application itself. In some cases, they are for features such as voting rights. In other cases, they are used for transactions on the dApp (like Civic) or to reward the users with things like discounted fees, etc. (like Binance).

Protocol are rules & regulations how to communicate with each other in Blockchain.

### What is Smart Contract and its characteristics?

Smart contract refer to immutable computer programs that run deterministically in the contest of an Ethereum Virtual Machine as part of the Ethereum network protocol -- i.e, on the decentralized Ethereum world computer!

**Characteristics:**

- `Computer programs`: Smart contracts are simply computer programs. The word “contract” has no legal meaning in this context.

- `Immutable`: Once deployed, the code of a smart contract cannot change. Unlike with traditional software, the only way to modify a smart contract is to deploy a new instance.

- `Deterministic`: The outcome of the execution of a smart contract is the same for everyone who runs it, given the context of the transaction that initiated its execution and the state of the Ethereum blockchain at the moment of execution.

- `EVM context`: Smart contracts operate with a very limited execution context. They can access their own state, the context of the transaction that called them, and some information about the most recent blocks.

`Decentralized world computer`: The EVM runs as a local instance on every Ethereum node, but because all instances of the EVM operate on the same initial state and produce the same final state, the system as a whole operates as a single “world computer.”