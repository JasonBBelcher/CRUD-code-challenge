import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
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
  modalRef: BsModalRef;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.apiService.getTargets();
    this.targets$ = this.apiService.targets;
  }

  /* intent is to create a modal to ask the user whether they are sure they would like to delete a target */

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  goToEdit(id: any) {
    this.router.navigate(['/edit/target', id]);
  }

  delete(id: any) {
    this.apiService.deleteTarget(id);
  }
}
