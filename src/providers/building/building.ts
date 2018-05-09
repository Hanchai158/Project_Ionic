import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'; 

/*
  Generated class for the BuildingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BuildingProvider {

  constructor(private http: Http) { }
  get_buiding() {
    
    let url = 'http://10.80.39.17/TSP58/nursing/index.php/eqs/service_mobile/AndroidApi/getBuilding';
    return this.http.get(url).map((res)=>res.json());  
  }

}
