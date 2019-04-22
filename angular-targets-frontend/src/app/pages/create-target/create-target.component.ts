import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-create-target',
  templateUrl: './create-target.component.html',
  styleUrls: ['./create-target.component.css']
})
export class CreateTargetComponent implements OnInit {
  targets$: Observable<any[]>;
  modalRef: BsModalRef;
  form: FormGroup;
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router,
    private modalService: BsModalService
  ) {
    // some test form data to get the POST right.
    this.form = this.fb.group({
      targetName: [''],
      keyContacts: this.fb.array([this.addKeyContactsFormGroup()]),
      companyInformation: [''],
      kpiData: this.fb.group({ startYearValue: [''], endYearValue: [''] }),
      status: ['RESEARCHING']
    });
  }

  addKeyContactsFormGroup(): FormGroup {
    return this.fb.group({
      name: [''],
      phone: [''],
      title: ['']
    });
  }

  ngOnInit() {
    this.apiService.getTargets();
    this.targets$ = this.apiService.targets;
  }

  addKeyContactClick(): void {
    (this.form.get('keyContacts') as FormArray).push(
      this.addKeyContactsFormGroup()
    );
  }

  save() {
    const formData = this.form.value;

    this.apiService.createTarget(formData);
    this.targets$ = this.apiService.targets;
    this.resetForm();
    this.modalRef.hide();
  }

  resetForm() {
    this.form = this.fb.group({
      targetName: [''],
      keyContacts: this.fb.array([this.addKeyContactsFormGroup()]),
      companyInformation: [''],
      kpiData: this.fb.group({ startYearValue: [''], endYearValue: [''] }),
      status: ['RESEARCHING']
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
