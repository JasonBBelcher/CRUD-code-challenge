import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, BehaviorSubject, pipe } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  targets: Observable<any[]>;
  keyContacts: Observable<any[]>;
  // tslint:disable-next-line:variable-name
  private _targets: BehaviorSubject<any[]>;
  public currentResponse: BehaviorSubject<any>;

  // tslint:disable-next-line:variable-name
  private _keyContacts: BehaviorSubject<any[]>;

  private dataStore: { targets: any; keyContacts: any };

  constructor(private http: HttpClient) {
    this.dataStore = { targets: [], keyContacts: [] };
    this._targets = new BehaviorSubject([]);
    this._keyContacts = new BehaviorSubject([]);
    this.currentResponse = new BehaviorSubject({});
    this.targets = this._targets.asObservable();
    this.keyContacts = this._keyContacts.asObservable();
  }
  prefix = 'api/v1';

  getTargets(): void {
    this.http.get(`${this.prefix}/targets`).subscribe(data => {
      this.dataStore.targets = data;
      this._targets.next(Object.assign({}, this.dataStore).targets);
    });
  }

  getTarget(id: any): Observable<any> {
    return this.http
      .get(`${this.prefix}/targets/${id}`)
      .pipe(catchError(err => err));
  }

  updateTarget(id: any, body: any): void {
    this.http
      .patch(`${this.prefix}/targets/${id}`, body)
      .subscribe((data: any) => {
        this.dataStore.targets.forEach((target, index) => {
          if (target.id === data.id) {
            this.dataStore.targets[index] = data;
          }
        });

        this._targets.next(Object.assign({}, this.dataStore).targets);
      });
  }

  getKeyContacts(): void {
    this.http.get(`${this.prefix}/targets/contacts`).subscribe(data => {
      this.dataStore.keyContacts = data;
      this._keyContacts.next(Object.assign({}, this.dataStore).keyContacts);
    });
  }

  createTarget(body: any): void {
    this.http.post(`${this.prefix}/targets`, body).subscribe(
      data => {
        if (data) {
          this.dataStore.targets.push(data);
          // send currentResponse to any component with apiService dependency injected
          this.currentResponse.next(data);
          this._targets.next(Object.assign({}, this.dataStore).keyContacts);
        }
      },
      err => {
        if (err) {
          this.currentResponse.error(err);
        }
      }
    );
  }

  deleteTarget(id: any) {
    this.http.delete(`${this.prefix}/targets/${id}`).subscribe(data => {
      this.dataStore.targets.forEach((target, index) => {
        if (target.id === id) {
          this.dataStore.targets.splice(index, 1);
        }
      });
      this._targets.next(Object.assign({}, this.dataStore).targets);
    });
  }
}
