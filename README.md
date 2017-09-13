# SpotExchange
Unchain the Frame Hackathon Project

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

# Generate Rest API
```shell
composer-rest-server
```
