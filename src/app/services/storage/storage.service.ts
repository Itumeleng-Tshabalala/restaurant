import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }    

  public set(settingName,value){
    return this.storage.set(`setting:${ settingName }`,value);
  }

  public async get(settingName){
    return await this.storage.get(`setting:${ settingName }`);
  }

  public async remove(settingName){
    return await this.storage.remove(`setting:${ settingName }`);
  }

  public clear() {
    this.storage.clear().then(() => {
      console.log('all keys cleared');
    });
  }
}
