# SpotExchange
[The Spot Exchange](https://thespot.exchange), a submission to the "Unchain the Frame" Hackathon Project.
# Prerequisites
## Hyperledger composer

Follow the instructions below to get the required Hyperledger Composer development tools and stand up a Hyperledger Fabric. <https://hyperledger.github.io/composer/installing/development-tools.html>

## Launch fabric

```bash
cd fabric-tools
./startFabric.sh
```

## Compile Business Networks

```javascript
npm install
npm test
npm run prepublish
```

## Deploy locally to fabric

```javascript
composer network deploy -a dist/spot-network.bna -p hlfv1 -i PeerAdmin -s randomString
```

## Generate Rest API for testing
```shell
composer-rest-server -p hlfv1 -n spot-network -i PeerAdmin -s randomString
```
This will start a rest server listening at: <http://localhost:3000>

Browse your REST API at <http://localhost:3000/explorer>

Authenticate <http://localhost:3000/auth/google>

## Running Application

```shell
cd app
npm install
ionic serve
```

## Team

[![EthVentures](https://github.com/EthVentures/CryptoTracker/raw/master/resources/img/ethventures-logo.png)](https://ethventures.io)
