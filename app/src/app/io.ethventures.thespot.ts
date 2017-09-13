import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace io.ethventures.thespot{
   export class ParkingSpot extends Asset {
      parkingSpotID: string;
      description: string;
      city: string;
      rate: number;
      owner: SpotUser;
   }
   export class SpotUser extends Participant {
      userId: string;
      firstName: string;
      lastName: string;
   }
   export class Reserve extends Transaction {
      parkingspot: ParkingSpot;
      newOwner: SpotUser;
   }
// }
