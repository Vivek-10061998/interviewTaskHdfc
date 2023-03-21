import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }
//connect Frontend To Backend
  apiUrl='http://localhost:3000/product';
  apiUrlLog='http://localhost:3000/auth/signup';
  apiurllogin='http://localhost:3000/auth/getUser';

  //get all data
  getAllData():Observable<any>{
return this._http.get(`${this.apiUrl}`);
  }
  //Create the data
  createData(data:any):Observable<any>{
    console.log(data,'createApi HIT')
    return this._http.post(`${this.apiUrl}`,data);
  }

  //delete the data by id
  deleteData(id:any):Observable<any>{
let ids=id
    return this._http.delete(`${this.apiUrl}/${ids}`)
  }
  //update data
  updateData(data:any,id:any):Observable<any>{
    let ids=id;
    return this._http.put(`${this.apiUrl}/${ids}`,data)
  }
  //singleData
getSingleData(id:any):Observable<any>{
    let ids=id;
    return this._http.get(`${this.apiUrl}/${ids}`)
  }
  userSignup(data:any):Observable<any>{
    console.log(data,'SignupAPI HIT')
    return this._http.post(`${this.apiUrlLog}`,data);
  }
  getUserList():Observable<any>{
    return this._http.get(`${this.apiurllogin}`);
  }
}
