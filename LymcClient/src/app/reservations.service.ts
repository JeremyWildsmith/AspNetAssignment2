import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';
import { AccountService } from './account.service';

export class Reservation {
  public Id: string;
  public StartDate: string;
  public EndDate: string;
  public CreatedBy: string;
  public ReservedBoat: any;
}

@Injectable()
export class ReservationsService {
  private reservationEndpoint: string;

  constructor(private client: HttpClient, private accountService : AccountService) {
    this.reservationEndpoint = environment.endpoint + "reservations/";
  }

  public GetReservations(): Promise<Reservation[]> {
    return new Promise<Reservation[]>((resolve, reject) => {
      
      this.client.get(this.reservationEndpoint, this.accountService.getAuthHttpOptions()).toPromise().then((resultSet : any) => {
        resolve(resultSet as (Reservation[]));
      }).catch(r => {
        reject(r);
      });
    });
  }

  public CreateReservation(resv: Reservation): Promise<boolean> {
    resv.CreatedBy = resv.Id = undefined;
    
    return new Promise<boolean>((resolve, reject) => {
      this.client.post(this.reservationEndpoint, resv, this.accountService.getAuthHttpOptions()).toPromise().then(r => {
        resolve(true);
      }).catch(r => {
        reject(r);
      });
    });
  }

}
