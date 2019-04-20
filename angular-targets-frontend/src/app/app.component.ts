import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  targets$: Observable<any[]>;
  constructor(private apiService: ApiService) {}
  title = 'Targets for acquisitions';

  ngOnInit() {
    this.targets$ = this.apiService.getProducts();
  }
}
