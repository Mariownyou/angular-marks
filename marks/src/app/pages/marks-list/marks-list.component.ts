import { Component, OnInit } from '@angular/core';
import { MarkService } from 'src/app/services/mark.service';

@Component({
  selector: 'app-marks-list',
  templateUrl: './marks-list.component.html',
  styleUrls: ['./marks-list.component.scss']
})
export class MarksListComponent implements OnInit {

  token: any

  constructor(private markService: MarkService) { }

  ngOnInit(): void {
  }

  getToken(): void {
    this.markService.password = "11Leva11"
    this.markService.login = "kondratev_l"
    this.markService.getToken().subscribe(
      response => {
        console.log(response);
        this.token = response.accessToken;
        console.log(this.token)
      },
      error => {
        console.log(error);
      });
    console.log(this.markService.login)
  }
}
