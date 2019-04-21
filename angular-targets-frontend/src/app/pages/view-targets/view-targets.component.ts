import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-view-targets',
  templateUrl: './view-targets.component.html',
  styleUrls: ['./view-targets.component.css']
})
export class ViewTargetsComponent implements OnInit {
  targets$: Observable<any[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getTargets();
    this.targets$ = this.apiService.targets;
  }
}
