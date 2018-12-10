import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(@Inject(Http) public http,public router:Router) { }

  ngOnInit() {
  }
  username;password;email;
  docLogin(){
    var obj={
      username:this.username,
      password:this.password,
      email:this.email
    }
    this.http.post('api/doctor/login',obj).subscribe(dt=>{
     var token=JSON.parse((dt._body));
      localStorage.setItem('token',token);
      if(token){
        this.router.navigate(['/dashboard'])
      }
    });
  }

}
