import { Http } from '@angular/http'; 
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UpdatelistProvider {

  constructor(private http: Http) { }

  update_asset(eqs_code_old, eqs_bd_id, eqs_rm_id) {     
    return new Promise((resolve,reject) => { 
      let url = 'http://10.80.39.17/TSP58/nursing/index.php/eqs/service_mobile/AndroidApi/update_Equipments?eqs_code_old='+eqs_code_old+'&eqs_bg_id='+eqs_bd_id+'&eqs_rm_id='+eqs_rm_id;
      console.log(url);
      this.http.get(url).map(res => res.json()).subscribe(data => {resolve(data);}, error => {reject(error);});
    }); 
  }
}