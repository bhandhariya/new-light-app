import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-my-patient',
  templateUrl: './my-patient.component.html',
  styleUrls: ['./my-patient.component.css']
})
export class MyPatientComponent implements OnInit {

  constructor(@Inject(Http) public http) { }
  Total_patients;
  ngOnInit() {
    var token=localStorage.getItem('token')
    var obj={
      token:token
    }
    this.http.post('api/doctor/getallPatients',obj).subscribe(dt=>{
      this.Total_patients=JSON.parse(dt._body);
    })
  }


}
