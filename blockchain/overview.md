## Basics

- `Account`: An object containing an `address`, `balance`, `nonce`, and `optional storage` and code. An account can be a contract account or an externally owned account (EOA).
- `Address`: Most generally, this represents an `EOA or contract` that can receive (destination address) or send (source address) transactions on the blockchain. More specifically, it is the rightmost 160 bits of a Keccak hash of an `ECDSA` public key.
- `Assert`: In Solidity, `assert(false)` compiles to `0xfe`, an invalid `opcode`, which uses up all remaining gas and reverts all changes. When an assert() statement fails, something very wrong and unexpected is happening, and you will need to fix your code. You should use assert() to avoid conditions that should never, ever occur.
- `Big-endian`: A positional number representation where the most significant digit is first. The opposite of little-endian, where the least significant digit is first.
- `BIPs`: Bitcoin Improvement Proposals. A set of proposals that members of the Bitcoin community have submitted to improve Bitcoin. For example, `BIP-21` is a proposal to improve the `Bitcoin uniform resource identifier (URI)` scheme.
- `Block`: A collection of required information (a block header) about the comprised transactions, and a set of other block headers known as `ommers`. Blocks are added to the Ethereum network by `miners`.
- `Blockchain`: In Ethereum, a sequence of blocks validated by the `proof-of-work` system, each linking to its `predecessor` all the way to the genesis block. This varies from the Bitcoin protocol in that it does not have a block size limit; it instead uses `varying gas limits`.
- `Bytecode`: An abstract instruction set designed for efficient execution by a software interpreter or a virtual machine. Unlike human-readable source code, `bytecode` is expressed in numeric format.
