import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListassetPage } from '../listasset/listasset';
import { HistoryassetPage } from '../historyasset/historyasset';
import { BuildingProvider } from '../../providers/building/building';
import { RoomProvider } from '../../providers/room/room';

@Component({
  selector: 'page-assetcheck',
  templateUrl: 'assetcheck.html',
})

export class AssetcheckPage {
  public arr_buildings : Building[];
  public arr_rooms : Room[];
  val_build: number;
  val_room: number;
  build_id: number;
  room_id: number;
  demo:number;
  arr_paramiter : string[];
  arr_historyname : string[];
  count:number;
  isEnabled: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public buildings : BuildingProvider, public rooms : RoomProvider) {
    this.demo = 1;
    this.arr_paramiter = [];//arr_paramiter
    this.arr_historyname = [];//arr_historyname
    this.count = 0;
  }

  ionViewDidLoad() {
    this.getBuilding();
    //this.changeBuilding(this.count);
  } 

  getBuilding(){
    /* console.log("getBuilding : "+this.val_build); */
    this.buildings.get_buiding().subscribe((response) => {      
      this.arr_buildings = response; 
    });

  }

  getRoom(build_id){
    console.log("getRoom : "+build_id);
    this.rooms.get_room(build_id).subscribe((response) => {
      this.arr_rooms = response;
    }); 
    console.log("last:"+this.arr_paramiter); 
  }  

  changeBuilding(selectedValue){
    this.count =1;
    console.log('isEnabled: '+this.count); 
    this.val_build = selectedValue.bd_id;
    console.log("SelectedBuild:"+this.val_build);

    this.arr_paramiter[0] = selectedValue.bd_id;
    this.arr_paramiter[1] = "0";
    this.arr_paramiter[2] = selectedValue.bd_name_abbr;
    this.arr_paramiter[3] = "";
    this.getRoom(this.val_build);
    
      if (this.val_build!=0){
      console.log('No elements ')
      this.isEnabled=true;
    } else {
      console.log('Elements ')
      this.isEnabled=false;
    } 
  }

  changeRoom(selectedValue){
    this.val_room = selectedValue.rm_id;
    console.log("SelectedRoom:"+this.val_room+"=>"+selectedValue.rm_name);
    this.arr_paramiter[1] = selectedValue.rm_id;
    this.arr_paramiter[3] = selectedValue.rm_name;
    console.log(this.arr_paramiter); 
  }
  
  checkAsset() {
    this.navCtrl.push(ListassetPage,{
      val: this.arr_paramiter
    });
  }    

  historyAsset() {
    this.navCtrl.push(HistoryassetPage,{
      val: this.arr_paramiter
    });
  }  
  
}
interface Building {  
  bd_id: number;
  bd_eqs_id: number;
  bd_name_abbr: string;
  bd_amount_room: number;
  bd_amount_floor: number;
  bd_area: number;
}

interface Room{
  rm_id: number;
  rm_name: string;
  rm_no: string;
  rm_floor: number;
  rm_capacity: number;
  rm_area: number;
  rm_fmst_id: number;
  rm_bd_id: number;
  rm_bdtype_id: number;
  rm_dpid: number;
}