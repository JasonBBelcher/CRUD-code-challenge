import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  targets: Observable<any[]>;
  keyContacts: Observable<any[]>;
  // tslint:disable-next-line:variable-name
  private _targets: BehaviorSubject<any[]>;
  // tslint:disable-next-line:variable-name
  private _keyContacts: BehaviorSubject<any[]>;
  private baseUrl: string;
  private dataStore: { targets: any; keyContacts: any };

  constructor(private http: HttpClient) {
    this.dataStore = { targets: [], keyContacts: [] };
    this._targets = new BehaviorSubject([]);
    this._keyContacts = new BehaviorSubject([]);
    this.targets = this._targets.asObservable();
    this.keyContacts = this._keyContacts.asObservable();
  }
  prefix = 'api/v1';

  getTargets() {
    this.http.get(`${this.prefix}/targets`).subscribe(data => {
      console.log(data);
      this.dataStore.targets = data;
      this._targets.next(Object.assign({}, this.dataStore).targets);
    });
  }

  getKeyContacts() {
    this.http.get(`${this.prefix}/targets/contacts`).subscribe(data => {
      console.log(data);
      this.dataStore.keyContacts = data;
      this._keyContacts.next(Object.assign({}, this.dataStore).keyContacts);
    });
  }

  createTarget(body) {
    return this.http
      .post(`${this.prefix}/targets`, body)
      .pipe(catchError(err => err))
      .subscribe(() => {
        this.getTargets();
      });
  }
}
