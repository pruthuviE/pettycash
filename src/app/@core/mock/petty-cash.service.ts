import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {PettyCash, PettycashData} from '../data/petty-cash';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token ' + environment.token}),
};


@Injectable()
export class PettycashService extends PettycashData {
  constructor(private http: HttpClient) {
    super();
  }

  getPettyCash(): Observable<any> {
    const apiUrl = 'http://localhost:4200/api/voucher/';
    return this.http.get(apiUrl, httpOptions);
  }


  addPettyCash(Voucher: PettyCash): Observable<any> {
    const apiUrl = 'http://localhost:4200/api/voucher/';
    return this.http.post(apiUrl, Voucher, httpOptions);
  }

  getPettyCashReport(date): Observable<any> {
    const apiUrl = 'http://localhost:4200/api/voucher/' + date + '/';
    return this.http.post(apiUrl, httpOptions);
  }

  updatePettyCash(voucher: PettyCash): Observable<any> {
    const apiUrl = 'http://localhost:4200/api/voucher/' + voucher.id + '/';
    return this.http.put(apiUrl, voucher, httpOptions);
  }

  deletePettyCash(voucher: PettyCash): Observable<any> {
    const apiUrl = 'http://localhost:4200/api/voucher/' + voucher.id + '/';
    return this.http.delete(apiUrl, httpOptions);
  }
}
