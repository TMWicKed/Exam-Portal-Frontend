import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import baseUrl from 'src/app/services/helper';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  userDetails: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    this.http.get(`${baseUrl}/question/sendToAdmin`).subscribe(
      (data: any) => {
        this.userDetails = data;
        console.log(this.userDetails)
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }

}
