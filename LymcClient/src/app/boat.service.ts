import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AccountService } from './account.service';

export class Boat {
  public boatId: number;
  public boatName: string;
}

@Injectable()
export class BoatService {
  private boatEndpoint: string;

  constructor(private client: HttpClient, private accountService : AccountService) {
    this.boatEndpoint = environment.endpoint + "boats/";
  }

  public GetBoats(): Promise<Boat[]> {
    return new Promise<Boat[]>((resolve, reject) => {
      this.client.get(this.boatEndpoint, this.accountService.getAuthHttpOptions()).toPromise().then((resultSets : any) => {
        resolve(resultSets as (Boat[]));
      }).catch(r => {
        reject(r);
      });
    });
  }

}
