/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const AdminConnection = require('composer-admin').AdminConnection;
const BrowserFS = require('browserfs/dist/node/index');
const BusinessNetworkConnection = require('composer-client').BusinessNetworkConnection;
const BusinessNetworkDefinition = require('composer-common').BusinessNetworkDefinition;
const path = require('path');

require('chai').should();

const bfs_fs = BrowserFS.BFSRequire('fs');
const NS = 'io.ethventures.thespot';

describe('The Spot Exchange', () => {

    // let adminConnection;
    let businessNetworkConnection;

    before(() => {
        BrowserFS.initialize(new BrowserFS.FileSystem.InMemory());
        const adminConnection = new AdminConnection({ fs: bfs_fs });
        return adminConnection.createProfile('defaultProfile', {
            type: 'embedded'
        })
            .then(() => {
                return adminConnection.connect('defaultProfile', 'admin', 'adminpw');
            })
            .then(() => {
                return BusinessNetworkDefinition.fromDirectory(path.resolve(__dirname, '..'));
            })
            .then((businessNetworkDefinition) => {
                return adminConnection.deploy(businessNetworkDefinition);
            })
            .then(() => {
                businessNetworkConnection = new BusinessNetworkConnection({ fs: bfs_fs });
                return businessNetworkConnection.connect('defaultProfile', 'spot-network', 'admin', 'adminpw');
            });
    });

    describe('#reserveParkingSpot', () => {

        it('should be able to trade a parkingspot', () => {
            const factory = businessNetworkConnection.getBusinessNetwork().getFactory();

            // create the traders
            const dan = factory.newResource(NS, 'SpotUser', 'dan@email.com');
            dan.firstName = 'Dan';
            dan.lastName = 'Selman';

            const simon = factory.newResource(NS, 'SpotUser', 'simon@email.com');
            simon.firstName = 'Simon';
            simon.lastName = 'Stone';

            // create the parkingspot
            const parkingspot = factory.newResource(NS, 'ParkingSpot', 'EMA');
            parkingspot.description = '430 N Michigan Ave';
            parkingspot.city = 'Chicago';
            parkingspot.ratePerHour = 5;
            parkingspot.spotRating = 'GOOD';
            parkingspot.owner = factory.newRelationship(NS, 'SpotUser', dan.$identifier);

            // create the trade transaction
            const trade = factory.newTransaction(NS, 'Reserve');
            trade.newOwner = factory.newRelationship(NS, 'SpotUser', simon.$identifier);
            trade.parkingspot = factory.newRelationship(NS, 'ParkingSpot', parkingspot.$identifier);

            // the owner should of the parkingspot should be dan
            parkingspot.owner.$identifier.should.equal(dan.$identifier);

            // Get the asset registry.
            return businessNetworkConnection.getAssetRegistry(NS + '.ParkingSpot')
                .then((assetRegistry) => {

                    // add the parkingspot to the asset registry.
                    return assetRegistry.add(parkingspot)
                        .then(() => {
                            return businessNetworkConnection.getParticipantRegistry(NS + '.SpotUser');
                        })
                        .then((participantRegistry) => {
                            // add the traders
                            return participantRegistry.addAll([dan, simon]);
                        })
                        .then(() => {
                            // submit the transaction
                            return businessNetworkConnection.submitTransaction(trade);
                        })
                        .then(() => {
                            return businessNetworkConnection.getAssetRegistry(NS + '.ParkingSpot');
                        })
                        .then((assetRegistry) => {
                            // re-get the parkingspot
                            return assetRegistry.get(parkingspot.$identifier);
                        })
                        .then((newParkingSpot) => {
                            // the owner of the parkingspot should not be simon
                            newParkingSpot.owner.$identifier.should.equal(simon.$identifier);
                        });
                });
        });
    });
});
