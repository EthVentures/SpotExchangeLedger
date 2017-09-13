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

/**
 * Track the trade of a parkingspot from one trader to another
 * @param {io.ethventures.thespot.Reserve} trade - the reservation to be processed
 * @transaction
 */
function reserveParkingSpot(trade) {
    trade.parkingspot.owner = trade.newOwner;
    return getAssetRegistry('io.ethventures.thespot.ParkingSpot')
        .then(function (assetRegistry) {
            return assetRegistry.update(trade.parkingspot);
        });
}
