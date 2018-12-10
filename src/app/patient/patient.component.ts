import { Component, OnInit,Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(@Inject(Http) public http) { }
  first_name;last_name;age;gender;primary_number;secondry_number;adhar;present_address;
  permanent_address;marital_status;father_name;education;occupation;postal_code;
  monthly_income;religion;family_type;locality;town;country;nationality;email;state;token;
  ngOnInit() {
    this.token=localStorage.getItem('token');
    
  }
  addNewPatient(){
    var obj={
      first_name:this.first_name,
      last_name:this.last_name,
      age:this.age,
      gender:this.gender,
      primary_number:this.primary_number,
      secondry_number:this.secondry_number,
      adhar:this.adhar,
      present_address:this.present_address,
      permanent_address:this.permanent_address,
      marital_status:this.marital_status,
      father_name:this.father_name,
      education:this.education,
      occupation:this.occupation,
      // identification_mark:this.identification_mark,
      monthly_income:this.monthly_income,
      religion:this.religion,
      family_type:this.family_type,
      locality:this.locality,
      town:this.town,
      country:this.country,
      nationality:this.nationality,
      email:this.email,
      state:this.state,
      postal_code:this.postal_code,
      token:this.token
    }
    // console.log(obj)
    this.http.post('api/doctor/createPatient',obj).subscribe(dt=>{
      alert(dt._body)
    })

  }
}
