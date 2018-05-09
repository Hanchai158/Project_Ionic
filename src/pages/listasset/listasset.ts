import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ActionSheetController } from 'ionic-angular';
import { UpdatelistProvider } from '../../providers/updatelist/updatelist';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-listasset',
  templateUrl: 'listasset.html',
})
export class ListassetPage {
  scannedCode = null;
  public codeData: string[];
  public arr_param : string[];
  history_buildID : string;
  history_roomID : string;
  history_build : string;
  history_room : string;
  public arr_codeAsset : Object = {};
 /*  data: Object = {}; */

  constructor(public navCtrl: NavController, public navParams: NavParams, public barcodeScanner: BarcodeScanner, public alertCtrl: ActionSheetController, public updateData : UpdatelistProvider, private toastCtrl: ToastController, private nav:AlertController) {
    this.codeData = [];
    this.arr_param = navParams.get("val");
    this.history_buildID = this.arr_param[0];
    this.history_roomID = this.arr_param[1];
    this.history_build = this.arr_param[2];
    this.history_room = this.arr_param[3];
    this.arr_codeAsset = [{eqs_name:"",eqs_bd_id:"",eqs_rm_id:""}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad listassetPage');
  }

  addCode(val_code) { // เพิ่ม function
    this.codeData.unshift(val_code);
    return false;
  } 

  removeCode(val_code) {
    this.codeData.forEach((element, index) => {
      if (element == val_code) {
        this.codeData.splice(index,1);
      }
    });
  }    

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData=>{
      this.codeData.unshift(barcodeData.text);
    })
  }

  presentAlert() {
    let alert = this.nav.create({
      /* title: 'บันทึกการตรวจสอบครุภัณฑ์', */
      subTitle: 'บันทึกการตรวจสอบครุภัณฑ์', 
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ยืนยัน',
          handler: () => {
            console.log('Confirm clicked');

            this.codeData.forEach((element, index) => {
              console.log(element+"/"+this.history_buildID+"/"+this.history_roomID);
              this.updateData.update_asset(element, this.history_buildID, this.history_roomID).then((data:any)=>{
                console.log(data);
                this.presentToast(data.str);
              });
            })

          }
        }]
    });
    alert.present();
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  
}