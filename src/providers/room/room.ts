import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'; 


/*
  Generated class for the RoomProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RoomProvider {

  constructor(private http: Http) { }
  get_room(build_id) {    
    let url = 'http://10.80.39.17/TSP58/nursing/index.php/eqs/service_mobile/AndroidApi/getRoom/'+build_id;
    return this.http.get(url).map((res)=>res.json());  
  }

}
