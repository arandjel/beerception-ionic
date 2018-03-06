import { Injectable } from '@angular/core';
import { ConfigProvider } from '../config/config';
import { ApiProvider } from '../api/api';

@Injectable()
export class BeerProvider {

  constructor(
    private apiService: ApiProvider,
    private config: ConfigProvider
  ) { }

  getBeerceptionInfo() {
    console.log("getting beerception info: " + this.config.beerception_info_url);
    return this.apiService.get(this.config.beerception_info_url);
  }

  beerUp(body: any) {
    return this.apiService.post(this.config.beerception_url + '/beerup', {});
  }

  beerDown(body: any) {
    return this.apiService.post(this.config.beerception_url + '/beerdown', {});
  }

}
