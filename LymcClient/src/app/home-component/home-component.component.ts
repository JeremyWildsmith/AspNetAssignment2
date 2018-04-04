import { Component, OnInit } from '@angular/core';
import { ReservationsService, Reservation } from '../reservations.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  public reservations: Array<Reservation> = [];

  constructor(private reservationService : ReservationsService) { }

  ngOnInit() {
    this.reservationService.GetReservations()
      .then(r => {
        this.reservations = r;
    }).catch(r => {
      alert("Error getting reservations: " + r);
    });
  }

}
