import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogdataProvider } from '../../providers/logdata/logdata';

@IonicPage()
@Component({
  selector: 'page-historyasset',
  templateUrl: 'historyasset.html',
})
export class HistoryassetPage {
  public arr_historys : History[];
  public arr_param : string[];
  build_id: string;
  room_id: string;
  history_build: string;
  history_room: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public historys : LogdataProvider) {
    console.log("Data :"+navParams.get("val"));    
    this.arr_param = navParams.get("val");
    this.build_id = this.arr_param[0];
    this.room_id = this.arr_param[1];
    this.history_build = this.arr_param[2];
    this.history_room = this.arr_param[3];
    //console.log(this.historyname);
    //console.log("Para:"+ this.build_id+"/"+this.room_id);
  }

  ionViewDidLoad() {
   /*  this.getParamiter();  */
    this.getHistory(this.build_id, this.room_id);
  }

  getHistory(build_id, room_id){
    //console.log("Para:"+ build_id+"//"+room_id);
    this.historys.get_history(build_id, room_id).subscribe((response) => {      
      console.log("log :"+response);      
      this.arr_historys = response; 
    });
  }

 /*  getParamiter(){
    this.build_id = this.arr_param[0];
  } */

}

interface History {  
  eqs_id: number;  
  eqs_unit: number; 
  eqs_amount: number;
  eqs_name: string;  
  eqs_fmst_id: number;
  eqs_fmnd_id: number;
  eqs_code_old: string;
  eqs_bd_id: number;
  eqs_rm_id: number;
  eqs_status: string;
  eqs_detail: string;
  eqs_active: string;
  fmst_id: number;
  fmst_name: string;
  fmst_abbr: string;
  fmst_year: number;
}