# Plasma

**Plasma is a framework for building scalable blockchain applications** without sacrificing security. A plasma chain is its own blockchain and can have whatever functionality and consensus mechanism the builder desires. The defining feature and limitation is that all state transitions must be tracked on the root chain (we're using Ethereum as our root); but rather than every individual transaction being submitted to the root chain, many transactions can be squished together and submitted to the root chain as a single state change. Users can exit funds from a plasma chain onto the root chain whenever they want, and need to do so in the event of a malicious child chain to recover their funds.

**Plasma chains are not side chains.** The biggest distinction is plasma's exit mechanism. Whereas users of a side chain must rely solely on the honesty and security of the side chain, users of a plasma chain have funds secured by the chain's consensus as well as an interactive exit game that detects malicious behavior. In other words, when a side chain breaks, state is lost; when a plasma chain breaks, state is exited but remains intact.

OmiseGO is researching and developing a specific implementation with the required properties and functions for a decentralized exchange, but plasma design and implementation has been a very collaborative effort across the Ethereum community, with many different designs being explored and implemented by many different teams. Just for reference, here are some of the designs being worked on.

## Different Plasma flavors

### Plasma MVP (Minimal Viable Plasma)

The MVP specification lays out a utxo payments blockchain.
[Learn more](https://ethresear.ch/t/minimal-viable-plasma/426)

### Plasma MoreMP (More Minimal Plasma)

Implements the MVP smart contract specification with minor modifications for clarity. 
[Learn more](https://github.com/kfichter/more-minimal-plasma)

### Plasma MoreVP (More Viable Plasma)

Makes security and UX improvements to the MVP design including removal of confirmation signatures and adds the ability to exit inputs as well as outputs.
[Learn more](https://ethresear.ch/t/more-viable-plasma/2160)

### Plasma Cash

Assets deposited into a Plasma Cash chain are represented as non-fungible tokens (NFTs). Blocks are different from Plasma MVP, in that each Plasma Cash block allocates a slot for each token. When a token is transacted, a record of that transaction is places at the corresponding slot. Plasma Cash removes Plasma MVP's exit time constraints and reduces user storage and computation requirements by only requiring users watch their own value.
[Learn more](https://ethresear.ch/t/plasma-cash-plasma-with-much-less-per-user-data-checking/1298)

### Plasma XT

Introduces checkpointing from the plasma chain to the root chain, which allows for periodic finalization of a coin's ownership in order to reduce the amount of data which must be stored and verified by each user to limit the storage and computation requirements per coin.
[Learn more](https://ethresear.ch/t/plasma-xt-plasma-cash-with-much-less-per-user-data-checking/1926)

### Plasma Debit

A proposal for enabling partial balances (spending only part of the value of a non-fungible token) in a Plasma Cash construction by making every token a payment channel between the user and the chain operator.
[Learn more](https://ethresear.ch/t/plasma-debit-arbitrary-denomination-payments-in-plasma-cash/2198)


## Current state

[Tesuji Plasma](https://github.com/omisego/elixir-omg/blob/develop/docs/tesuji_blockchain_design.md) is the first iteration of OmiseGO plasma-based implementation. The design is based on Minimal Viable Plasma. Tesuji is currently on our internal testnet. Audits are in progress with Quantstamp and Synthetic Minds — those audits have already proved useful as we've received and reacted to some preliminary feedback. The internal testnet is an MVP implementation.

### Bi-weekly updates

* [#1 - August 9, 2018](https://kb.omgcommunity.org/contents/deep-dive/plasma/current-state/plasma-update-1)  

* [#2 - August 27, 2018](https://kb.omgcommunity.org/contents/deep-dive/plasma/current-state/plasma-update-2)  

* [#3 - September 10, 2018](https://kb.omgcommunity.org/contents/deep-dive/plasma/current-state/plasma-update-3)  

* [#4 - September 25, 2018](https://kb.omgcommunity.org/contents/deep-dive/plasma/current-state/plasma-update-4)  

* [#5 - October 8, 2018](https://kb.omgcommunity.org/contents/deep-dive/plasma/current-state/plasma-update-5)  

* [#6 - October 22, 2018](https://kb.omgcommunity.org/contents/deep-dive/plasma/current-state/plasma-update-6) 
* [#7 - November 5, 2018](https://kb.omgcommunity.org/contents/deep-dive/plasma/current-state/plasma-update-7)


## Resources

For more on Plasma, see these excellent community-produced resources :

* [Learn Plasma](https://www.learnplasma.org/), a community-led education initiative
* [What is Plasma? Plasma Cash?](https://medium.com/crypto-economics/what-is-plasma-plasma-cash-6fbbef784a) by Jinglan Wang
* This [primer](https://media.consensys.net/the-state-of-plasma-1-6b48c1e4b295) from Consensys
* This nifty [chart](https://www.learnplasma.org/en/learn/compare.html) comparing different plasma designs
* [Plasma Tesuji](https://github.com/omisego/elixir-omg/blob/develop/docs/tesuji_blockchain_design.md) Github repository
* [How OmiseGO will bring Plasma in everyone's daily life](https://blog.goodaudience.com/how-omisego-will-bring-plasma-in-everyones-daily-life-45c9d81a3258) by u/pwolf88
* [An introduction to Plasma](https://medium.com/@acb_/plasma-8bba7e1b1d0f) by Alexander Butler

