# eWallet Suite

The eWallet Suite is a completely free and open source software toolkit developed by OmiseGO to seamlessly onboard merchants and users to the OMG Network. In the early documentation, this was referred to as an eWallet SDK, but that wasn't really the whole picture. An SDK (Software Development Kit) is a set of tools to build out applications on a certain platform. Since the SDKs (there are actually 3, one each for Android, iOS and Ruby) are actually only a component, we've started referring to the whole toolkit as the eWallet Suite.

Once connected to Ethereum and plasma, users will be able to send, receive and store cryptocurrencies such as ERC-20, ERC-721, tokenized fiat, and so on. From there, we will expand the capabilities of the OMG Network to support additional currencies, working toward a fully currency agnostic exchange.

Fiat currency will be supported through plugins when cash-in and cash-out partners are onboarded in each target geography. The eWallet will be able to store fiat currency, noting that eWallet providers are responsible for regulatory compliance.

An eWallet is first and foremost a web application. As a means of interacting with the web-based eWallet platform, the Suite also includes:

* API: API stands for Application Programming Interface, and acts as an interface between different software programs (e.g. the OMG eWallet and a provider's existing wallet platform)
* SDKs: Software Development Kits, toolkits for developers to easily build applications on a platform — in this case the eWallet, which will allow seamless integration with the OMG Network. These toolkits are particularly useful for those implementers who do not have the resources to develop specific software for integration with OMG.
* Front end admin panel for easy customization, account creation, token issuance, activity logs and more
* Back end application accessed either using an API to connect an existing application, or SDK (to build a new app from the ground up). Both server-level and mobile applications are supported, currently in iOS, Android and Ruby.
* Demo applications — currently not available on any app store, these are instead meant to provide a template for how the eWallet can be implemented.

The full suite of eWallet tools allows anyone to build and integrate a front end interface to mint, deposit, transact, track and withdraw digital assets; with tools for providers to customize apps to their specific needs.


## What are integration libraries (SDK) ?

The integration libraries are another tool to help developers easily build on OMG. These exist in the layer between web apps and the blockchain itself, providing the end to end infrastructure for integrating an end-user application, from application to library to watcher to child chain. The eWallet, as a web app, will also make use of this infrastructure to connect to the blockchain.


## Current state

### eWallet Suite

* eWallet 1.0.0 has been released and is open-source and publicly available, with version 1.1 [in the pipeline](https://github.com/omisego/ewallet/milestone/2). In the current iteration, issuers can mint and send tokens within a local ledger.
* iOS, Android and Ruby SDKs are in place
* Merchant and client side Point of Sale applications are being developed for iOS and Android.

### Integration Libraries

* Demo applications are being integrated on internal testnet
* JavaScript (chosen as the first because it's the most widely used) library is up and running.

Devcon4 will be a bit of a coming out party for the integration library — friends from another project have built an app that marks the first full stack integration, running on our internal testnet, which will be available for people to play with during the conference.

### Coming Up

* Integration libraries for other languages and frameworks, starting with elixir
* Blockchain integration for the eWallet beginning with v1.2

### Bi-weekly updates

* [#1 - The "Wendy, I'm home" edition (July 7, 2018)  
](https://kb.omgcommunity.org/deep-dive/ewallet-suite/current-state/ewallet-update-1)
* [#2 - The "Take the ring to Mordor" edition (July 13, 2018)  
](https://kb.omgcommunity.org/deep-dive/ewallet-suite/current-state/ewallet-update-2)
* [#3 - The "Genius Billionaire Playboy Philanthropist" edition (July 20, 2018)  
](https://kb.omgcommunity.org/deep-dive/ewallet-suite/current-state/ewallet-update-3)
* [#4 - The "May The Force Be With You" edition (July 27, 2018)  
](https://kb.omgcommunity.org/deep-dive/ewallet-suite/current-state/ewallet-update-4)
* [#5 - The "All it takes is a little push" edition (August 3, 2018)  
](https://kb.omgcommunity.org/deep-dive/ewallet-suite/current-state/ewallet-update-5)
* [#6 - The "Madness? This. Is. Sparta!" edition (August 18, 2018)  
](https://kb.omgcommunity.org/deep-dive/ewallet-suite/current-state/ewallet-update-6)
* [#7 - The "So where would you rather die? Here? Or in a Jaeger?" edition (September 3, 2018)  
](https://kb.omgcommunity.org/deep-dive/ewallet-suite/current-state/ewallet-update-7)
* [#8 - The "What we do in life echoes in eternity" edition (September 17, 2018)  
](https://kb.omgcommunity.org/deep-dive/ewallet-suite/current-state/ewallet-update-8)
* [#9 - The "Mr. Stark? I don't feel so good..." edition (October 15, 2018)  
](https://kb.omgcommunity.org/deep-dive/ewallet-suite/current-state/ewallet-update-9)
* [#10 - The "And my axe!" edition (October 29, 2018)](https://kb.omgcommunity.org/deep-dive/ewallet-suite/current-state/ewallet-update-10)


## Resources

* OmiseGO [eWallet GitHub](https://github.com/omisego/ewallet/blob/master/assets/provider_setup.jpg)repository
* Initial [public demonstration](https://www.reddit.com/r/omise_go/comments/8wnhjq/demo_ewallet_admin_panel/%C2%A0) of the eWallet
* [Waffle board](https://waffle.io/omisego/ewallet)
* [Chat](https://gitter.im/omisego/ewallet) to the eWallet team!
