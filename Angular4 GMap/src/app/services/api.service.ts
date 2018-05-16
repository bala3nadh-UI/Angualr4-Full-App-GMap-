import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

   constructor(private http: Http) { }

  getLocation() {
      var url = environment.LOCATION_BASE_PATH;    
        return this.http.get(url).map((res) => {
          return res.json();
        });
  }

}
