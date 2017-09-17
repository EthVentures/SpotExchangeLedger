# SpotExchange
[The Spot Exchange](https://thespot.exchange), a submission to the "Unchain the Frame" Hackathon Project.
# Prerequisites
## Hyperledger composer

Follow the instructions below to get the required Hyperledger Composer development tools and stand up a Hyperledger Fabric. <https://hyperledger.github.io/composer/installing/development-tools.html>

## Global NPM Packages

```bash
npm install -g passport-google-oauth2
```

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

## Local Environment Variables

Export connection providers as environmental variables.

```bash
export COMPOSER_PROVIDERS='{
   "google": {
     "provider": "google",
     "module": "passport-google-oauth2",
     "clientID": "your-client-id",
     "clientSecret": "your-client-secret",
     "authPath": "/auth/google",
     "callbackURL": "/auth/google/callback",
     "scope": "https://www.googleapis.com/auth/plus.login",
     "successRedirect": "/",
     "failureRedirect": "/"
   }
}'
```

## Generate Rest API for testing
```shell
composer-rest-server -p hlfv1 -n spot-network -i PeerAdmin -s randomString -a true
```
This will start a rest server listening at: <http://localhost:3000>

Browse your REST API at <http://localhost:3000/explorer>

Authenticate <http://localhost:3000/auth/google>

## Running Application

```shell
cd app
npm start
```

![application screenshot](https://github.com/EthVentures/SpotExchange/blob/master/res/frontend.png?raw=true "Front End")

## Team

[![EthVentures](https://github.com/EthVentures/CryptoTracker/raw/master/resources/img/ethventures-logo.png)](https://ethventures.io)
