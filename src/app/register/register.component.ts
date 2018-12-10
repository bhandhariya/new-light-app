import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(@Inject(Http) public http,public router:Router) { }

  ngOnInit() {
  }
  first_name;last_name;role;password;username;email;address;age;
  register(){
    var obj={
      first_name:this.first_name,
      last_name:this.last_name,
      age:this.age,
      role:this.role,
      password:this.password,
      username:this.username,
      email:this.email,
      address:this.address
    }
    this.http.post('api/doctor/register',obj).subscribe(dt=>{
      alert(dt._body)
    
      //  alert('login success')
    //  this.router.navigateByUrl('login')
    })
  }


}
