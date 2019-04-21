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
  // tslint:disable-next-line:variable-name
  private _targets: BehaviorSubject<any[]>;
  private baseUrl: string;
  private dataStore: { targets: any };

  constructor(private http: HttpClient) {
    this.dataStore = { targets: [] };
    this._targets = new BehaviorSubject([]);
    this.targets = this._targets.asObservable();
  }
  prefix = 'api/v1';

  getTargets() {
    this.http.get(`${this.prefix}/targets`).subscribe(data => {
      this.dataStore.targets = data;
      this._targets.next(Object.assign({}, this.dataStore).targets);
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
