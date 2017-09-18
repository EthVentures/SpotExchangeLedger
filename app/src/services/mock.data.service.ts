import { Injectable, NgZone } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable()
export class MockDataService {


  constructor(public zone: NgZone) {

  }

  public getSpots() {

    var data = [
      {"spotid":"1","geo":
        [new google.maps.LatLng(41.88909,-87.62148), new google.maps.LatLng(41.88952,-87.62145), new google.maps.LatLng(41.88949,-87.62058), new google.maps.LatLng(41.88909,-87.62071), new google.maps.LatLng(41.88907,-87.6211)]
      },
      {"spotid":"2","geo":
        [new google.maps.LatLng(41.89052,-87.62655), new google.maps.LatLng(41.89082,-87.62655), new google.maps.LatLng(41.89084,-87.62542), new google.maps.LatLng(41.89024,-87.6254), new google.maps.LatLng(41.89024,-87.6257), new google.maps.LatLng(41.89053,-87.6257)]
      },
      {"spotid":"3","geo":
        [new google.maps.LatLng(41.88969,-87.62899), new google.maps.LatLng(41.89,-87.62899), new google.maps.LatLng(41.89,-87.62863), new google.maps.LatLng(41.88987,-87.62861), new google.maps.LatLng(41.88976,-87.62862), new google.maps.LatLng(41.88969,-87.62865)]
      },
      {"spotid":"4","geo":
        [new google.maps.LatLng(41.89028,-87.62267), new google.maps.LatLng(41.89086,-87.62267), new google.maps.LatLng(41.89086,-87.62212), new google.maps.LatLng(41.89054,-87.6221), new google.maps.LatLng(41.89028,-87.62209), new google.maps.LatLng(41.89028,-87.62233)]
      },
      {"spotid":"5","geo":
        [new google.maps.LatLng(41.89043,-87.62147), new google.maps.LatLng(41.89088,-87.62146), new google.maps.LatLng(41.89088,-87.62051), new google.maps.LatLng(41.89063,-87.62046), new google.maps.LatLng(41.89045,-87.62051), new google.maps.LatLng(41.89043,-87.62105)]
      },
      {"spotid":"6","geo":
        [new google.maps.LatLng(41.89188,-87.62091), new google.maps.LatLng(41.89253,-87.62094), new google.maps.LatLng(41.89254,-87.62034), new google.maps.LatLng(41.89229,-87.6203), new google.maps.LatLng(41.89212,-87.62034), new google.maps.LatLng(41.8919,-87.62033)]
      },
      {"spotid":"7","geo":
        [new google.maps.LatLng(41.89185,-87.62252), new google.maps.LatLng(41.89214,-87.62254), new google.maps.LatLng(41.89213,-87.62179), new google.maps.LatLng(41.892,-87.62179), new google.maps.LatLng(41.89204,-87.62178), new google.maps.LatLng(41.89186,-87.62177)]
      },
      {"spotid":"8","geo":
        [new google.maps.LatLng(41.89255,-87.6324), new google.maps.LatLng(41.89314,-87.63241), new google.maps.LatLng(41.89313,-87.63185), new google.maps.LatLng(41.89282,-87.63181), new google.maps.LatLng(41.89301,-87.63187), new google.maps.LatLng(41.89255,-87.63187)]
      },
      {"spotid":"9","geo":
        [new google.maps.LatLng(41.88519,-87.62618), new google.maps.LatLng(41.88537,-87.62619), new google.maps.LatLng(41.88536,-87.62562), new google.maps.LatLng(41.88527,-87.62561), new google.maps.LatLng(41.8852,-87.62564), new google.maps.LatLng(41.88518,-87.62593)]
      },
      {"spotid":"10","geo":
        [new google.maps.LatLng(41.8894,-87.62785), new google.maps.LatLng(41.88965,-87.62787), new google.maps.LatLng(41.88967,-87.62679), new google.maps.LatLng(41.88946,-87.62679), new google.maps.LatLng(41.88941,-87.62694), new google.maps.LatLng(41.8894,-87.62761)]
      }
    ];
    return data;
  }

}
