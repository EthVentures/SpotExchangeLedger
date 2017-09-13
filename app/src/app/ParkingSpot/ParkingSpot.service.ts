import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { ParkingSpot } from '../io.ethventures.thespot';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ParkingSpotService {

	
		private NAMESPACE: string = 'ParkingSpot';
	



    constructor(private dataService: DataService<ParkingSpot>) {
    };

    public getAll(): Observable<ParkingSpot[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<ParkingSpot> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<ParkingSpot> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<ParkingSpot> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<ParkingSpot> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
