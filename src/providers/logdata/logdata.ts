import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'; 

@Injectable()
export class LogdataProvider {

  constructor(private http: Http) { }
  get_history(build_id,room_id) {    
    let url = 'http://10.80.39.17/TSP58/nursing/index.php/eqs/service_mobile/AndroidApi/getHistory_Equipments/'+build_id+"/"+room_id;
    return this.http.get(url).map((res)=>res.json());  
  }

}
