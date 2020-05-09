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
