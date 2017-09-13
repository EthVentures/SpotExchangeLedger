# SpotExchange
[The Spot Exchange](https://thespot.exchange), a submission to the "Unchain the Frame" Hackathon Project.

# Compiling
```shell
npm install
npm test
npm run prepublish
```

# Deploy locally and test

```shell
composer network deploy -a spot-network.bna -p hlfv1 -i PeerAdmin -s randomString

composer network ping -n spot-network -p hlfv1 -i PeerAdmin -s randomString
```

# Generate Rest API for testing
```shell
composer-rest-server
```
![Composer Rest Server](
  https://github.com/EthVentures/SpotExchange/blob/master/res/rest-server-composer.png?raw=true "Composer Rest Server")


This will start a rest server listening at: http://localhost:3000
Browse your REST API at http://localhost:3000/explorer

![application screenshot](
  https://github.com/EthVentures/SpotExchange/blob/master/res/api-docs.png?raw=true "Front End")

# Running Application

```shell
cd app
npm start
```

![application screenshot](
  https://github.com/EthVentures/SpotExchange/blob/master/res/frontend.png?raw=true "Front End")


  # Team

  [![EthVentures](https://github.com/EthVentures/CryptoTracker/raw/master/resources/img/ethventures-logo.png)](https://ethventures.io)
