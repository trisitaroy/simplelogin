import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import {Router} from '@angular/router'
import {AuthserviceService} from '../authservice.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginform : FormGroup
  constructor( private formbuilder :FormBuilder, private auth : AuthserviceService, private route:Router ) { }

  ngOnInit() {
    this.loginform = this.formbuilder.group({
      username :[],
      password:[]
    })
  }
  login(){
    const username = this.loginform.controls.username.value;
    const password = this.loginform.controls.password.value;

    const obj = {"username": "abc","password": "abc@123456"};
    this.auth.login(obj).subscribe((resp)=>{
      console.log(resp)
     
    });
    //bypass
    if(username ==="abc"&& password== "abc@123456"){
      this.route.navigate(["/dashboard"]);
      localStorage.setItem('user',JSON.stringify(obj))
    }
  }
  

}
