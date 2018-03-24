import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class User {

  data: any = { };

  constructor(private storage: Storage) {
    this.load();
  }

  safe(payload: any, credentials: any) {
    this.data = Object.assign(payload.data, {credentials: credentials});
    this.storage.set('userdata', this.data);
  }

  remove() {
    this.storage.remove('userdata').then(res => {
      res => console.log(res);
      error => console.log(error);
    });
  }

  getUserPromise() : any {
    return this.storage.get('userdata');
  }

  private load() {
    this.storage.get('userdata').then((val) => {
      this.data = val;
    });
  }

}
