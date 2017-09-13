import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ParkingSpotService } from './ParkingSpot.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-ParkingSpot',
	templateUrl: './ParkingSpot.component.html',
	styleUrls: ['./ParkingSpot.component.css'],
  providers: [ParkingSpotService]
})
export class ParkingSpotComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      parkingSpotID = new FormControl("", Validators.required);
  
      description = new FormControl("", Validators.required);
  
      city = new FormControl("", Validators.required);
  
      rate = new FormControl("", Validators.required);
  
      owner = new FormControl("", Validators.required);
  


  constructor(private serviceParkingSpot:ParkingSpotService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          parkingSpotID:this.parkingSpotID,
        
    
        
          description:this.description,
        
    
        
          city:this.city,
        
    
        
          rate:this.rate,
        
    
        
          owner:this.owner
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceParkingSpot.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

  addAsset(form: any): Promise<any> {

    this.asset = {
      $class: "io.ethventures.thespot.ParkingSpot",
      
        
          "parkingSpotID":this.parkingSpotID.value,
        
      
        
          "description":this.description.value,
        
      
        
          "city":this.city.value,
        
      
        
          "rate":this.rate.value,
        
      
        
          "owner":this.owner.value
        
      
    };

    this.myForm.setValue({
      
        
          "parkingSpotID":null,
        
      
        
          "description":null,
        
      
        
          "city":null,
        
      
        
          "rate":null,
        
      
        
          "owner":null
        
      
    });

    return this.serviceParkingSpot.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "parkingSpotID":null,
        
      
        
          "description":null,
        
      
        
          "city":null,
        
      
        
          "rate":null,
        
      
        
          "owner":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "io.ethventures.thespot.ParkingSpot",
      
        
          
        
    
        
          
            "description":this.description.value,
          
        
    
        
          
            "city":this.city.value,
          
        
    
        
          
            "rate":this.rate.value,
          
        
    
        
          
            "owner":this.owner.value
          
        
    
    };

    return this.serviceParkingSpot.updateAsset(form.get("parkingSpotID").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceParkingSpot.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceParkingSpot.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "parkingSpotID":null,
          
        
          
            "description":null,
          
        
          
            "city":null,
          
        
          
            "rate":null,
          
        
          
            "owner":null 
          
        
      };



      
        if(result.parkingSpotID){
          formObject.parkingSpotID = result.parkingSpotID;
        }else{
          formObject.parkingSpotID = null;
        }
      
        if(result.description){
          formObject.description = result.description;
        }else{
          formObject.description = null;
        }
      
        if(result.city){
          formObject.city = result.city;
        }else{
          formObject.city = null;
        }
      
        if(result.rate){
          formObject.rate = result.rate;
        }else{
          formObject.rate = null;
        }
      
        if(result.owner){
          formObject.owner = result.owner;
        }else{
          formObject.owner = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "parkingSpotID":null,
        
      
        
          "description":null,
        
      
        
          "city":null,
        
      
        
          "rate":null,
        
      
        
          "owner":null 
        
      
      });
  }

}
