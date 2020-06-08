## Basics

- `Account`: An object containing an `address`, `balance`, `nonce`, and `optional storage` and code. An account can be a contract account or an externally owned account (EOA).
- `Address`: Most generally, this represents an `EOA or contract` that can receive (destination address) or send (source address) transactions on the blockchain. More specifically, it is the rightmost 160 bits of a Keccak hash of an `ECDSA` public key.
- `Assert`: In Solidity, `assert(false)` compiles to `0xfe`, an invalid `opcode`, which uses up all remaining gas and reverts all changes. When an assert() statement fails, something very wrong and unexpected is happening, and you will need to fix your code. You should use assert() to avoid conditions that should never, ever occur.
- `Big-endian`: A positional number representation where the most significant digit is first. The opposite of little-endian, where the least significant digit is first.
- `BIPs`: Bitcoin Improvement Proposals. A set of proposals that members of the Bitcoin community have submitted to improve Bitcoin. For example, `BIP-21` is a proposal to improve the `Bitcoin uniform resource identifier (URI)` scheme.
- `Block`: A collection of required information (a block header) about the comprised transactions, and a set of other block headers known as `ommers`. Blocks are added to the Ethereum network by `miners`.
- `Blockchain`: In Ethereum, a sequence of blocks validated by the `proof-of-work` system, each linking to its `predecessor` all the way to the genesis block. This varies from the Bitcoin protocol in that it does not have a block size limit; it instead uses `varying gas limits`.
- `Bytecode`: An abstract instruction set designed for efficient execution by a software interpreter or a virtual machine. Unlike human-readable source code, `bytecode` is expressed in numeric format.
- `Compiling`: Converting code written in a `high-level` programming language (e.g., **Solidity**) into a `lower-level` language (e.g., **EVM bytecode**).
- `Consensus`: When numerous nodes—usually most nodes on the network—all have the same
  blocks in their locally validated best blockchain. Not to be confused with consensus
  rules.
- `Consensus rules`: The **block validation rules** that full nodes follow to stay in consensus with other nodes. Not to be confused with consensus.
- `Constantinople fork`: The second part of the Metropolis stage, originally planned for mid-2018. Expected to include a switch to a hybrid `proof-of-work/proof-of-stake` consensus
  algorithm, among other changes.
- `Contract account`: **An account containing code that executes whenever it receives a transaction from another account** (EOA or contract).
- `Contract creation transaction`: A special transaction, with the `“zero address”` as the recipient, that is used to register a contract and record it on the Ethereum blockchain (see “zero address”).
- `DAO`: **Decentralized Autonomous Organization**. A company or other organization that
  operates without hierarchical management. Also may refer to a contract named “The DAO” launched on April 30, 2016, which was then hacked in June 2016; this ultimately motivated a hard fork (codenamed DAO) at block #1,192,000, which reversed the hacked DAO contract and caused Ethereum and Ethereum Classic to `split into two competing systems`.

## What is Ethereum?

**Ethereum** is often described as `“the world computer.”`

From a computer science perspective, Ethereum is a deterministic but practically
unbounded state machine, consisting of a globally accessible singleton state and a virtual
machine that applies changes to that state.

From a more practical perspective, Ethereum is an `open source`, `globally decentralized`
computing infrastructure that executes programs called **`smart contracts`**. It uses a
blockchain to synchronize and store the system’s state changes, along with a cryptocurrency
called `ether` to meter and constrain execution resource costs.

The Ethereum platform enables developers to build powerful decentralized applications
with built-in economic functions. While providing high `availability`, `auditability`,
`transparency`, and `neutrality`, it also reduces or eliminates censorship and reduces certain
counterparty risks.

### Components of a Blockchain

The components of an open, public blockchain are (usually):

- A peer-to-peer (P2P) network connecting participants and propagating transactions and blocks of verified transactions, based on a standardized `“gossip”` protocol
- Messages, in the form of transactions, representing state transitions
- A set of `consensus rules`, governing what constitutes a transaction and what makes for a valid state transition
- A state machine that processes transactions according to the consensus rules
- A chain of cryptographically secured blocks that acts as a journal of all the verified
  and accepted state transitions
- A consensus algorithm that decentralizes control over the blockchain, by forcing
  participants to cooperate in the enforcement of the consensus rules
- A game-theoretically sound incentivization scheme (e.g., proof-of-work costs
  plus block rewards) to economically secure the state machine in an open
  environment
- One or more open source software implementations of the above (“clients”)

### Components of Ethereum

- `P2P network`: Ethereum runs on the `Ethereum main network`, which is addressable on `TCP port 30303`, and runs a protocol called ÐΞVp2p.
- `Consensus rules`: Ethereum’s consensus rules are defined in the reference specification, the `Yellow` Paper. - - - `Transactions`: Ethereum transactions are network messages that include (among other things) a sender, recipient, value, and data payload.
- `State machine`: Ethereum state transitions are processed by the Ethereum Virtual Machine (EVM), a stack-based virtual machine that executes bytecode (machine-language
  instructions). EVM programs, called `“smart contracts,”` are written in high-level languages (e.g., `Solidity`) and compiled to `bytecode` for execution on the EVM.
- `Data structures`: Ethereum’s state is stored locally on each node as a database (usually `Google’s LevelDB`), which contains the transactions and system state in a serialized hashed data structure called a **Merkle Patricia Tree**.
- `Consensus algorithm`: Ethereum uses Bitcoin’s consensus model, `Nakamoto` Consensus, which uses sequential single-signature blocks, weighted in importance by `PoW` to determine the longest chain and therefore the current state. However, there are plans to move to a PoS weighted voting system, codenamed Casper, in the near future.
- `Economic security`: Ethereum currently uses a PoW algorithm called `Ethash`, but this will eventually be dropped with the move to PoS at some point in the future.
- `Clients`: Ethereum has several interoperable implementations of the client software, the most prominent of which are `Go-Ethereum (Geth)` and `Parity`.

### Decentralized Applications (DApps)

`DApp` is a web application that is built on top of open, decentralized, peer-to-peer infrastructure services.

A DApp is composed of at least:

- Smart contracts on a blockchain
- A web frontend user interface

In addition, many DApps include other decentralized components, such as:

- A decentralized (P2P) storage protocol and platform
- A decentralized (P2P) messaging protocol and platform

### The Third Age of the Internet

The concept of DApps is meant to take the `World Wide Web` to its next natural evolutionary stage, introducing `decentralization with peer-to-peer protocols` into every aspect of a web application. The term used to describe this evolution is web3, meaning the `third “version”` of the web. First proposed by `Dr. Gavin Wood`, `web3` represents a new vision and focus for web applications: from centrally owned and managed applications, to applications built on decentralized protocols.

The `web3.js` library also includes an interface to a P2P storage network called **`Swarm`** and a P2P messaging service called `Whisper`.

### Why Learn Ethereum

**Blockchains have a very steep learning curve,** as they combine multiple disciplines into one domain: programming, information security, cryptography, economics, distributed systems, peer-to-peer networks, etc. Ethereum makes this learning curve a lot less steep, so you can get started quickly. But just below the surface of a deceptively simple environment lies a lot more. As you learn and start looking deeper,
there’s always another layer of complexity and wonder.

Ethereum is a great platform for learning about blockchains and it’s building a massive
community of developers, faster than any other blockchain platform. More than
any other, Ethereum is a developer’s blockchain, built by developers for developers. A
developer familiar with JavaScript applications can drop into Ethereum and start producing
working code very quickly. For the first few years of Ethereum’s life, it was
common to see T-shirts announcing that you can create a token in just five lines of
code. Of course, this is a `double-edged sword`. **It’s easy to write code, but it’s very hard
to write good and secure code.**

## Ether Basics

### Ether Currency Units

Ethereum’s currency unit is called `ether`, identified also as `“ETH”` or with the symbols
`Ξ` (from the Greek letter `“Xi”` that looks like a stylized capital E) or, less often, ♦: for
example, 1 ether, or 1 ETH, or Ξ1, or ♦1.

Ether is subdivided into smaller units, down to the smallest unit possible, which is
named `wei`. `One ether is 1 quintillion wei` (1 * 10^18 or 1,000,000,000,000,000,000).

`Ethereum is the system, ether is the currency.`

### Choosing and Ethereum Wallet

The following are some good starter wallets:

- `MetaMask`: MetaMask is a browser extension wallet that runs in your browser (Chrome, Firefox, Opera, or Brave Browser). It is easy to use and convenient for testing, as it is able to connect to a variety of Ethereum nodes and test blockchains. `MetaMask is a web-based wallet`.
- `Jaxx`: Jaxx is a multiplatform and multicurrency wallet that runs on a variety of operating systems, including Android, iOS, Windows, macOS, and Linux. It is often a good choice for new users as it is designed for simplicity and ease of use. Jaxx is `either a mobile or a desktop wallet`, depending on where you install it.
- `MyEtherWallet (MEW)`: MyEtherWallet is a web-based wallet that runs in any browser. It has multiple
sophisticated features we will explore in many of our examples. MyEtherWallet is
a `web-based wallet`.
- `Emerald Wallet`: Emerald Wallet is designed to work with the Ethereum Classic blockchain, but is compatible with other Ethereum-based blockchains. It’s an open source desktop application and works under `Windows, macOS, and Linux`. Emerald Wallet `can run a full node or connect to a public remote node`, working in a `“light”` mode. It
also has a companion tool to do all operations from the command line.

### Switching Networks

As we can see on the MetaMask account page, we can choose between multiple Ethereum networks. `By default, MetaMask will try to connect to the main network`. The other choices are public testnets, any Ethereum node of your choice, or nodes running private blockchains on your own computer (localhost):

- `Main Ethereum Network`: The main public Ethereum blockchain. Real ETH, real value, and real consequences.
- `Ropsten Test Network`: Ethereum public test blockchain and network. ETH on this network has `no value`.
- `Kovan Test Network`: Ethereum public test blockchain and network using the `Aura consensus protocol` with proof of authority (federated signing). ETH on this network has `no value`. The Kovan test network is supported by Parity only. Other Ethereum clients use the Clique consensus protocol, which was proposed later, for proof of authority–
based verification.
- `Rinkeby Test Network`: Ethereum public test blockchain and network, using the Clique consensus protocol with proof of authority (federated signing). ETH on this network `has no value`.
- `Localhost 8545`: Connects to a node running on the same computer as the browser. The node can be part of any public blockchain (main or testnet), or a private testnet.
- `Custom RPC`: Allows you to connect MetaMask to any node with a `Geth-compatible` Remote Procedure Call (RPC) interface. The node can be part of any public or private blockchain.

### Externally Owned Accounts (EOAs) and Contracts

`The type of account you created in the MetaMask wallet is called an externally owned account (EOA)`. Externally owned accounts are those that `have a private key`; having the private key means control over access to funds or contracts. Now, you’re probably guessing there is another type of account. 

That other type of account is a `contract account`. A contract account has **smart contract code**, which a simple EOA can’t have. Furthermore, a contract account `does not have a private key`. Instead, it is owned (and
controlled) by the logic of its smart contract code: the software program recorded on the Ethereum blockchain at the contract account’s creation and executed by the EVM. `Contracts have addresses, just like EOAs`. Contracts can also send and receive ether, just like EOAs. However, when a transaction destination is a contract address, it causes that contract to run in the EVM, using the transaction, and the transaction’s data, as its input. In addition to ether, transactions can contain data indicating which specific function in the contract to run and what parameters to pass to that function.

In this way, transactions can call functions within contracts. Note that because `a contract account does not have a private key, it cannot initiate a transaction`. **Only EOAs can initiate transaction**s, but contracts can react to transactions by calling other contracts, building complex execution paths. One typical use of this is an EOA sending a request transaction to a multisignature smart contract wallet to send some ETH on to another address.

A typical DApp programming pattern is to have Contract A calling Contract B in order to maintain a shared state across users of Contract A.

### Interacting with the Contract

**Ethereum contracts are programs that control money, which run inside a virtual machine called the EVM**. They are created by a special transaction that submits their bytecode to be recorded on the blockchain. Once they are created on the blockchain, they have an Ethereum address, just like wallets. Anytime someone sends a transaction to a contract address it causes the contract to run in the EVM, with the transaction as its input.

Transactions sent to contract addresses may have` ether or data or both`. If they contain ether, `it is “deposited`”
to the contract balance. If they contain data, the data can specify a named function in the contract and call it, passing arguments to the function.

## Ethereum Clients

An Ethereum client is a `software application` that implements the Ethereum specification and `communicates over the peer-to-peer network` with other Ethereum clients. Different Ethereum clients interoperate if they comply with the reference specification and the standardized communications protocols. While these different clients are implemented by different teams and in different programming languages, they all `“speak” the same protocol and follow the same rules`. As such, they can all be used to operate and interact with the same Ethereum network.

### Ethereum Networks

There exist a variety of Ethereum-based networks that largely conform to the formal specification defined in the Ethereum Yellow Paper, but which may or may not interoperate with each other.

Currently, there are six main implementations of the Ethereum protocol, written in six different languages:

- Parity, written in Rust
- Geth, written in Go
- cpp-ethereum, written in C++
- pyethereum, written in Python
- Mantis, written in Scala
- Harmony, written in Java

## Wallets

- a wallet is a software application that serves as the primary user interface
to Ethereum.
- The wallet controls access to a user’s **money, managing keys and
addresses, tracking the balance, and creating and signing transactions**.

### Wallet Technology Overview

The most convenient Ethereum wallet is one with `a single private key and address that
you reuse for everything`. Unfortunately, such a solution is a `privacy nightmare`, as
anyone can easily track and correlate all your transactions. Using a new key for every
transaction is best for privacy, but becomes very difficult to manage. The correct balance
is difficult to achieve, but that’s why `good wallet design is paramount`.

A common misconception about Ethereum is that Ethereum wallets contain ether or
tokens. In fact, very strictly speaking, `the wallet holds only keys`. The ether or other tokens ae recorded on the Ethereum blockchain. Users control the `tokens on the network by signing transactions with the keys` in their wallets.

The bank, can see the money in your account, and you only need convince the bank that you want to move funds to make a transaction) to the decentralized system of blockchain platforms (where `everyone can see the ether balance of an account, although they probably don’t know the account’s owner`, and everyone needs to be convinced the owner wants to move funds for a transaction to be enacted)

> **"Ethereum wallets contain keys, not ether or tokens. Wallets are like
keychains containing pairs of private and public keys. Users sign
transactions with the private keys, thereby proving they own the
ether. The ether is stored on the blockchain."**

### Types of Wallets

There are `two` types of wallets:

1. `nondeterministic wallet`: where each key is independently generated
from a different random number. The keys are not related to each other. This type of
wallet is also known as a `JBOK` wallet, from the phrase **“Just a Bunch of Keys.”**

2. `deterministic wallet`: where all the keys are `derived from a single master key`, known as the `seed`. All the keys in this type of wallet are related to each other and can be generated again if one has the original `seed`. To make deterministic wallets slightly `more secure against data-loss accidents`, such as having your `phone stolen` or dropping it in the toilet, the seeds are often encoded as a `list of words` (in English or another language) for you to write down and use in the event of an accident. These are known as the `wallet’s mnemonic code words`.

## Transactions

Transactions are `signed` messages originated by an externally owned account, transmitted
by the Ethereum network, and recorded on the Ethereum blockchain. Ethereum is a `global singleton state machine`, and transactions are what make that state machine `“tick,”` changing its state. Contracts don’t run on their own. Ethereum doesn’t run autonomously. Everything `starts with a transaction`.

### The Structure of a Transaction

`A transaction is a serialized binary message` that contains the following data:

- `Nonce:` A sequence number, issued by the originating EOA, used to prevent message replay. the nonce is an attribute of the originating address; that is, it only has meaning in the context of the sending address. However, the nonce is not stored explicitly as part of an account’s state on the blockchain. Instead, it is calculated dynamically, by `counting the number of confirmed transactions` that have originated from an address. In summary, it is important to note that the use of the nonce is actually vital for an account-based protocol, in contrast to the “Unspent Transaction Output” (UTXO) mechanism of the Bitcoin protocol.
- `Gas Price:` The price of gas (in `wei`) the originator is willing to pay
- `Gas Limit:` the maximum amount of gas the originator is willing to buy for this transaction
- `Recipient:` The destination Ethereum address
- `Value:` The amount of ether to send to the destination
- `Data:` The variable-length binary data payload

you may notice there is no “from” data in the address identifying the originator EOA. That is because the EOA’s public key can be derived from the v,r,s components of the ECDSA signature. The address can, in turn, be derived from the public key. When you see a transaction showing a “from” field, that was added by the software used to visualize the transaction. Other metadata frequently added to the transaction by client software includes the block number (once it is mined and included in the blockchain) and a transaction ID (calculated hash). Again, this data is derived from the transaction, and does not form part of the transaction message itself.

### Keeping Track of Nonces

n practical terms, the nonce is an up-to-date count of the number of confirmed (i.e., on-chain) transactions that have originated from an account. To find out what the nonce is, you can interrogate the blockchain, for example via the `web3` interface. Open a JavaScript console in a browser with MetaMask running, or use the truffle `console` command to access the JavaScript web3 library, then type:

```js
web3.eth.getTransactionCount("0x9e713963a92c02317a681b9bb3065a8249de124f")
40 // output
```

> The nonce is a zero-based counter, meaning the first transaction has nonce 0. In this example, we have a transaction count of 40, meaning nonces 0 through 39 have been seen. The next transaction’s nonce will need to be 40.

When you create a new transaction, you assign the next nonce in the sequence. But until it is confirmed, it will not count toward the `getTransactionCount total`.

Parity’s JSON RPC interface offers the `parity_nextNonce` function, which returns the next nonce that should be used in a transaction. The parity_nextNonce function `counts nonces correctly`, even if you construct several transactions in rapid succession without confirming them.