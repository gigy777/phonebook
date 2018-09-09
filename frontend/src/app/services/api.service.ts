import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class ApiService {

  url: string;

  constructor(
    private http: Http,
  ) {
    // this.url = 'http://45.32.157.171:8000/api/';
    this.url = 'http://localhost:8000/api/';
  };

  postAny(route, p) {
    console.log(route);
    return this.http.post(this.url + route, p, this.jwt())
      .map(Response => Response.json())
      .catch(res => {
        return Observable.throw(res.json());
      });
  }; S

  putAny(route, id, p) {
    console.log(route);
    return this.http.put(this.url + route + '/' + id, p, this.jwt())
      .map(Response => Response.json())
      .catch(res => {
        return Observable.throw(res.json());
      });
  };


  getAll(route) {
    return this.http.get(this.url + route, this.jwt())
      .map(Response => Response.json())
      .catch(res => {
        return Observable.throw(res.json());
      });
  };

  getWithId(route, id) {
    return this.http.get(this.url + route + '/' + id, this.jwt())
      .map(Response => Response.json())
      .catch(res => {
        return Observable.throw(res.json());
      });
  };

  getSearch(route, p) {
    return this.http.get(this.url + route + '?letters=' + p, this.jwt())
      .map(Response => Response.json())
      .catch(res => {
        return Observable.throw(res.json());
      });
  };

  deleteAny(route,id){
    return this.http.delete(this.url + route + '/'+id, this.jwt())
    .map(Response => Response.json())
    .catch(res => {
      return Observable.throw(res.json());
    });
  }

  private jwt() {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    // create authorization header with jwt token
    return new RequestOptions({ headers: headers });
  }


}







