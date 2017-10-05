# The Spot Exchange Decentralized Marketplace
Welcome to the [Spot Exchange](https://thespot.exchange), a submission to the [Unchain the Frame](https://unchaintheframe.com) Hackathon.

The Spot Exchange (https://thespot.exchange) is  a smart, decentralized, blockchain-based marketplace on Hyperledger Fabric on the IBM Z platform. The Spot Exchange enables people to rent physical locations designated for parking traditional and autonomous vehicles. Parking spaces include garages, lots, alleyways, and driveways, which may be located on private residential and commercial property. As a decentralized marketplace, we do not own physical parking spaces, establish asset prices, or set policy. Instead, we serve as the mechanism in which sellers of physical spaces connect with short-term or long-term buyers, and provide an automated service for executing and enforcing contracts. As a smart marketplace, we leverage IBM’s Machine Learning APIs, in conjunction with our unique and comprehensive marketplace data, to build a self-learning ecosystem that automates key components of the buying-selling process, more efficiently connects buyers and sellers, and provides dynamic, real-time price recommendations to sellers.

Our product ecosystem consists of three main applications linked below:

* Hyperledger based Marketplace [(repo)](https://github.com/EthVentures/SpotExchangeLedger) [(api explorer)](https://api.thespot.exchange:3000/explorer/)
* Mobile Front End [(repo)](https://github.com/EthVentures/SpotExchangeApp) [(demo)](https://thespot.exchange)
* IBM Watson based Price Suggestions [(repo)](https://github.com/EthVentures/SpotExchangeML)


## Composer Network
**Participants**
`Spot Users`	`SpotAdmin`

**Assets**
`Contracts`	`Parking Spots`	`Vehicles`

**Transactions**
`Reserve`

For more details about the Phase II submission, [click here](https://goo.gl/n84gDD).


### Prerequisites
* [Node](https://nodejs.org/)
* [Docker](https://www.docker.com/community-edition)
* Hyperledger composer
```bash
npm install -g composer-cli
```
* Hyperledger composer-rest-server
```bash
npm install -g composer-rest-server
```
* Hyperledger Fabric Tools
```bash
mkdir ~/fabric-tools && cd ~/fabric-tools
curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.zip
unzip fabric-dev-servers.zip
```


### Starting Fabric

```bash
cd ~/fabric-tools
./downloadFabric.sh
./startFabric.sh
./createComposerProfile.sh
```

### Compile Business Network

```bash
npm install
npm test
npm run prepublish
```

### Deploying Business Network to Fabric

```bash
composer network deploy -a dist/spot-network.bna -p hlfv1 -i PeerAdmin -s randomString
```

### Generate Rest API
```bash
composer-rest-server -p hlfv1 -n spot-network -i PeerAdmin -s randomString
```
This will start a rest server listening at: <http://localhost:3000>

Browse your REST API at <http://localhost:3000/explorer>

![API Docs](https://i.imgur.com/4YbpUZE.png "API Docs")


### Tearing Down

To tear down your development session
```bash
cd ~/fabric-tools
./stopFabric.sh
./teardownFabric.sh
```
### Team

[![EthVentures](https://github.com/EthVentures/CryptoTracker/raw/master/resources/img/ethventures-logo.png)](https://ethventures.io)
