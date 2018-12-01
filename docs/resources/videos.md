# Videos

## The path to a more viable plasma

<iframe width="560" height="315" src="https://www.youtube.com/embed/ONbrhJDCpi8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Just in case people don't have time to watch the video, I have written a brief summary of Kasima's presentation here:

Kasima Tharnpipitchai runs through a brief overview of the plasma architecture, outlining that it is a layer 2 scaling solution for Ethereum, and that it is still heavily under research. He shows graphically how the plasma chain will interact with the root chain contract on Ethereum, and includes a simple overview of deposits and exits. Plasma is then split into two 'flavours' as he calls them, one being **fungible** and the other **non-fungible**.

**Non-fungible plasma** is outlined as the root chain contract holding a portion of value, that is then represented on the plasma chain as a token, this cannot be split up and is therefore \(at this moment in time\) not suitable for the OMG DeX architecture.

**Fungible plasma** is outlined as the root chain contract holding a single allocation of value, that will be shared by everyone on the plasma chain, in Omisego's case, this value will be allocated by UTXOs \(unspent transaction outputs\). The current fungible plasma specifications are **Minimal Viable Plasma** and **More Viable Plasma**.

The characteristics of **Minimal Viable Plasma** are:

* Fungible
* It is a single plasma chain
* Transacts using UTXOs
* Exit priority- this ensures safety of funds on the plasma chain, allowing for exits back to the root chain: Ethereum. However, this requires a user to constantly watch their funds, and would require them to initiate an exit protocol
* Uses confirmation signatures- Kasima refers to this as a 'pessimistic setup' whereby all transactions are assumed invalid until they are included in a block and then signed off by the sender.

The characteristics of **More Viable Plasma** are the same, with the exception of the final two \(and a small modification to exit priority\), which are:

* No confirmation signatures are used- Kasima refers to this as an 'optimistic setup' whereby all transactions are assumed valid when sent.
* In-flight exit game- this allows people to exit safely if they are unsure their transaction has been included in the chain.

Finally, Kasima runs through the **next steps for plasma** and what the aims are for the immediate future:

* More work on mass exits for the fungible version of plasma.
* More scale, including more plasma chains within chains.
* Developing the next stage of More Viable Plasma, possibly called EMVP \(Even More Viable Plasma.\)


## Decentralizing Consensus

<iframe width="560" height="315" src="https://www.youtube.com/embed/iOAD3IpOJ0A" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

**People and blockchains**

David Knott introduces the concept of social networks, highlighting the different levels of trust that exist interpersonally within a diverse population. David then contrasts this setup with that of a blockchain, emphasizing that anyone running a full node has the exact same information as anyone else within the network, meaning that a person's biases, life experiences and consequent trust levels are irrelevant in order for them to come to consensus. **Consensus** is defined as the process of network participants agreeing upon a proposed truth \(data\) and adding this to their respective chains.

**Proof of Work** is then introduced as the first consensus mechanism, used currently by Bitcoin and Ethereum \(although Ethereum plans to transition to Proof of Stake over the next few years.\) PoW has the following **drawbacks**:

* It benefits economies of scale, meaning it rewards greater numbers of mining hardware disproportionally when compared to smaller numbers.
* Miners are only rewarded once they mine a new block, this creates volatility in the reward distribution within the mining pool.
* Mining hardware is somewhat difficult to set up and maintain, it requires a level of knowledge far beyond that of the average person.

The aforementioned drawbacks have caused a lack of decentralization within the mining community of Bitcoin, wherein a large percentage of mining hardware is concentrated in the hands of a few companies; this therefore has the potential for exploitation in the form of a 51% attack and aids in the negation of the most attractive **benefits of decentralization**:

* Decentralized networks should be more resilient to accidental failures.
* There are greater challenges to attacking said networks, such as difficulty colluding.

Decentralization however, is not binary, in the sense that a project is not either decentralized or centralized, there exists a spectrum of possibilities with various factors baring influence; in order to judge the level of decentralization that exists within a project/network, is it vital to consider the following **points of failure**:

1. **The client software**- who is responsible for writing the code that miners/validators are running, and how many people are involved; if the number is significantly low, then there is a strong risk of failure.
2. **The location of nodes**- due to the nature of decentralized networks, and the potential for such a paradigm shift across various industries, there are significant hurdles in regards to adoption in the form of jurisdictional regulation. If a project's nodes are concentrated in a single geographical area, and regulation is then implemented that outlaws running said nodes, failure is a very likely possibility.
3. Who chooses the direction and frequency of **software upgrades**. In order to maintain balance within the community, it is beneficial for many people to dictate the direction of future upgrades, as opposed to one single group.
4. **Consensus participation**- this refers back to the distribution of miners/validators and the potential for collusion around what data is included in future blocks. If there is poor distribution, there is a possibility for fraudulent activity.

**Proof of Stake** is introduced as the 'next generation' of consensus mechanism \(soon to be adopted by Ethereum.\) The basic **qualities** of PoS are:

* Rewards are proportional to stake- meaning larger stakes are not rewarded disproportionally and there exists incentive for staking regardless of initial investment.
* Expensive hardware is not a prerequisite to validating, it is much easier to bootstrap with a small initial investment, leading to greater decentralization in the form of validator distribution.

Some **drawbacks** of Proof of Stake are that validator nodes are difficult to setup, and minimum staking requirements may out-price a portion of the population, leading to incentivized custodial staking services. In order to counteract centralization caused by this minimum fee, threshhold staking pools have been proposed, allowing people to come together and meet the minimum requirements via their accumulative total investment. The main **challenges faced in setting up a validator node**are:

* Private key management, as cold storage is not a possibility, this can be alleviated by usage of a hardware wallet within a secure facility.
* Constant network access is required, and validators will often be penalized when they do not keep \(close to\) 100% up time.
* Denial of service protection. In this case, a nefarious actor will not require a private key to launch an attack, they will simply be able to attack the validator node directly, or locate the node that is in correspondence with the validator node and flood it indirectly.

In order to overcome these difficulties, it would be beneficial to standardize the validator setup process, however it is important to avoid completely standardizing the software used, as this can lead to cascading failures. Hopefully, in time, David envisages this process becoming easier and leading to standardized staking becoming the norm within the blockchain space, allowing for the emergence of a P2P layer, enabling staking regardless of a person's economic status.


## Dear bank, where did my 100 bucks go?

<iframe width="560" height="315" src="https://www.youtube.com/embed/mC--g57lylQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Vansa begins her presentation by outlining a major pain-point that exists within the online banking industry: coordination and interoperability. Specifically, the financial and time costs that are incurred as a result of the current antiquated infrastructure. At present, it is a greatly labored process, when wanting to transact funds between two different banking services. Sending funds across boarders and jurisdictions is difficult because:

* There is limited visibility of in-flight transactions. The banks that are sending and receiving payments have no visibility of pending transactions and therefore they cannot be easily tracked.
* Payments can incur financial and time costs, depending on the bank's chosen payment rails.
* A user's balance is not updated in real-time as it can take days or even weeks to receive confirmation of payment.

Throughout Asia, financial inclusion continues to be a challenging feat, with Asia representing around 50% of the world's under-served population, in countries such as China, India, Pakistan, and Indonesia; the majority of online transactions of physical goods rely heavily on cash-on-delivery for payment. Within this population, however, at least 66% of people have access to mobile services, providing a potential avenue for future development that could help to alleviate these issues, and open the possibility for greater levels of international trade and e-commerce.

#### eWallets

In an attempt to overcome the poor banking infrastructure in Asia, eWallets are now being offered by banking institutions or non-financial institutions such as telecommunication companies, e-commerce platforms, and messaging apps. The eWallet industry has experienced explosive growth throughout Asia, especially in China, whereby Alipay and WeChat have captured around 50% market share each. These eWallets are not simply used for financial transactions, they are also used as all-encompassing utility apps, whereby a user can pay utility bills, book appointments, and interact with various social services, further highlighting the need for greater levels of accessibility, leading to proliferation of social services within the developing populations.

#### eWallet challenges

Despite the advantages of eWallets and their rapid adoption throughout the Asian population, there remains friction points in the communication- and flow of money- between the different providers. The current infrastructure sees eWallets and their users confined to their respective silos, erecting unnecessary jurisdictional barriers and preventing much needed coordination between the poorest population of society. The global remittance market is one area of society that is greatly affected by this lack of interoperability, in 2017 the global aggregate remittance flow to developed nations reached $466b. Along side the coordination issues, time, and financial costs, exists the issue of currency exchange when sending money across boarders; there currently exists no easy-to-use and cheap infrastructure for exchanging small amounts of currencies.

#### Potential Solutions

Any solution to these problems must avoid transferring the financial power dynamic of old, onto the new technological landscape, and ensure to mitigate any long term risks of monopoly. A potential framework for doing so, would embrace interoperability through an open-source public infrastructure, and would enable the transaction of any asset, anytime, anywhere. A shared-ownership model of a public infrastructure would have perfect incentive alignment with the goal of inclusion, as there would be no 'gatekeepers' elected into positions of power. Blockchain technology as a base-layer for such a solution, would allow for transparency and tracking of payments, without the reliance on a third party legacy system. In order to maintain these features, while facilitating the seamless transition between currencies and different tokenized values, this payment rail would take the form of a permissionless decentralized exchange. The result of building an eWallet on this infrastructure for the end user, would be the ability to transact using any currency, with no uncertainty in exchange rate.

In an attempt to solve these problems, while maintaining all necessary elements of a public permissionless decentralized exchange, OmiseGo are building two open source products: a white-label eWallet SDK, and the OMG network (a massively scalable decentralized exchange.)
