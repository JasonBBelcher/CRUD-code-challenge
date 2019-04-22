import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-targets',
  templateUrl: './view-targets.component.html',
  styleUrls: ['./view-targets.component.css']
})
export class ViewTargetsComponent implements OnInit {
  targets$: Observable<any[]>;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getTargets();
    this.targets$ = this.apiService.targets;
  }

  goToEdit(id: any) {
    this.router.navigate(['/edit/target', id]);
  }

  delete(id: any) {
    this.apiService.deleteTarget(id);
  }
}
