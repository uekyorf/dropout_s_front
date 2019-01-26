import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Ble } from '../../providers/interfaces/Ble';
import { IBeacon, IBeaconPluginResult } from '@ionic-native/ibeacon';
import { Platform } from 'ionic-angular';

import { CreateLetterPage } from '../create-letter/create-letter';
import { OtherPage } from '../other/other';;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bles: Ble[];
  private uuid: string = '00000000-0000-0000-0000-000000000000';
  constructor(public navCtrl: NavController, public api: ApiProvider, private readonly ibeacon: IBeacon, private readonly platform: Platform) {
    this.enableDebugLogs();
  }

  public enableDebugLogs(): void {
    this.platform.ready().then(async () => {
      this.ibeacon.enableDebugLogs();
      this.ibeacon.enableDebugNotifications();
    });
  }

  public onStartClicked(): void {
    this.platform.ready().then(() => {
      this.startBleFun();
    });
  }

  public startBleFun(): void {

    // Request permission to use location on iOS
    this.ibeacon.requestAlwaysAuthorization();
    // create a new delegate and register it with the native layer
    let delegate = this.ibeacon.Delegate();

    // Subscribe to some of the delegate's event handlers
    delegate.didRangeBeaconsInRegion().subscribe(
      (pluginResult: IBeaconPluginResult) => console.log('didRangeBeaconsInRegion0: ', pluginResult),
      (data: any) => { console.log(`didRangeBeaconsInRegion1:`, JSON.stringify(data,null,4)) },
      // (error: any) => console.error(`Failure during ranging: `, error),
    );
    delegate.didStartMonitoringForRegion().subscribe(
      (pluginResult: IBeaconPluginResult) => console.log('didStartMonitoringForRegion: ', pluginResult),
      (error: any) => console.error(`Failure during starting of monitoring: `, error)
    );

    delegate.didEnterRegion().subscribe(
      (pluginResult: IBeaconPluginResult) => {
        console.log('didEnterRegion: ', pluginResult);
      }
    );

    delegate.didExitRegion().subscribe(
      (pluginResult: IBeaconPluginResult) => {
        console.log('didExitRegion: ', pluginResult);
      }
    );

    console.log(`Creating BeaconRegion with UUID of: `, this.uuid);
    const beaconRegion = this.ibeacon.BeaconRegion('nullBeaconRegion', this.uuid, 1, 1);
    // const beaconRegion = this.ibeacon.BeaconRegion('nullBeaconRegion', '');

    this.ibeacon.startMonitoringForRegion(beaconRegion).then(
      () => console.log('Native layer recieved the request to monitoring'),
      (error: any) => console.error('Native layer failed to begin monitoring: ', error)
    );

    this.ibeacon.startRangingBeaconsInRegion(beaconRegion)
      .then(() => {
        console.log(`Started ranging beacon region: `, beaconRegion);
      })
      .catch((error: any) => {
        console.error(`Failed to start ranging beacon region: `, beaconRegion);
    });
  }
  // めんどいので各ページでFunctionを作成
  public pushCreatePage() {
    this.navCtrl.push(CreateLetterPage);
  }
  public pushMessagePage() {
    this.navCtrl.push(CreateLetterPage);
  }
  public pushContactPage() {
    this.navCtrl.push(CreateLetterPage);
  }
  public pushOtherPage() {
    this.navCtrl.push(OtherPage);
  }
}
