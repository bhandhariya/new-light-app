import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(@Inject(Http) public http) { }
  Total_patients;
  ngOnInit() {
    var token=localStorage.getItem('token');
    var obj={
      token:token
    }
    this.http.post('api/doctor/patcount',obj).subscribe(dt=>{
      this.Total_patients=dt._body

      
    })
  }

}
