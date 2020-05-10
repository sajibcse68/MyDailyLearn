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

