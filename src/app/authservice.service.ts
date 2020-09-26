import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  loginUrl ='http://125.22.105.181:11113/login_new';

  constructor(private http : HttpClient) { 
  }

  login(obj:any){    
   return this.http.post(this.loginUrl,obj)
  }

}
